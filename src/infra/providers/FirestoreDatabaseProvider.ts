import 'server-only';

import { firestoreDatabase } from '@configs/firebase';

import { DatabaseProviderAbstract } from '@domain/providers';
import {
  FilterQuery,
  OrderByDirection,
} from '@domain/providers/DatabaseProvider';

class QueryBuilder<T> {
  private snapshot: FirebaseFirestore.Query;

  constructor(collection: string, db: FirebaseFirestore.Firestore) {
    this.snapshot = db.collection(collection);
  }

  public where(query: FilterQuery | FilterQuery[]) {
    const isQueryArray = Array.isArray(query);

    if (isQueryArray) {
      query.forEach((filter) => {
        this.snapshot = this.snapshot.where(
          filter.field,
          filter.operator,
          filter.value
        );
      });
    } else {
      this.snapshot = this.snapshot.where(
        query.field,
        query.operator,
        query.value
      );
    }

    return {
      limit: this.limit.bind(this),
      orderBy: this.orderBy.bind(this),
      execute: this.execute.bind(this),
    };
  }

  public orderBy(field: string, direction?: OrderByDirection) {
    this.snapshot = this.snapshot.orderBy(field, direction ?? 'asc');

    return {
      limit: this.limit.bind(this),
      execute: this.execute.bind(this),
    };
  }

  public limit(limit: number) {
    this.snapshot = this.snapshot.limit(limit);

    return {
      execute: this.execute.bind(this),
    };
  }

  protected async getSnapshot() {
    return await this.snapshot.get();
  }

  public async execute(): Promise<T> {
    const snapshot = await this.getSnapshot();
    return snapshot.docs.map((doc) => doc.data()) as T;
  }
}

class FindBuilder<T> extends QueryBuilder<T> {
  constructor(collection: string, db: FirebaseFirestore.Firestore) {
    super(collection, db);
  }
}

class UpdateBuilder<T> extends QueryBuilder<T> {
  private collection: string;
  private db: FirebaseFirestore.Firestore;

  private data: object = {};

  constructor(
    collection: string,
    db: FirebaseFirestore.Firestore,
    data: object
  ) {
    super(collection, db);

    this.db = db;
    this.collection = collection;
    this.data = data;
  }

  public override async execute(): Promise<T> {
    const snapshot = await this.getSnapshot();
    if (!snapshot.docs.length) throw Error('Database document not found!');

    const promises: any[] = [];

    snapshot.docs.forEach((doc) => {
      promises.push(
        this.db.collection(this.collection).doc(doc.id).update(this.data)
      );
    });

    await Promise.all(promises);
    return snapshot.docs.map((doc) => doc.data()) as T;
  }
}

class DeleteBuilder<T> extends QueryBuilder<T> {
  private collection: string;
  private db: FirebaseFirestore.Firestore;

  constructor(collection: string, db: FirebaseFirestore.Firestore) {
    super(collection, db);

    this.db = db;
    this.collection = collection;
  }

  public override async execute(): Promise<T> {
    const snapshot = await this.getSnapshot();
    if (!snapshot.docs.length) throw Error('Database document not found!');

    const promises: any[] = [];

    snapshot.docs.forEach((doc) => {
      promises.push(this.db.collection(this.collection).doc(doc.id).delete());
    });

    await Promise.all(promises);
    return snapshot.docs.map((doc) => doc.data()) as T;
  }
}

export default class FirestoreDatabaseProvider
  implements DatabaseProviderAbstract
{
  private readonly db = firestoreDatabase;

  constructor() {}

  public find: DatabaseProviderAbstract['find'] = <T>(collection: string) => {
    return new FindBuilder<T>(collection, this.db);
  };

  public create: DatabaseProviderAbstract['create'] = async <T>(
    collection: string,
    data: object
  ) => {
    const snapshot = await this.db.collection(collection).add(data);
    const doc = await snapshot.get();

    return doc.data() as T;
  };

  public update: DatabaseProviderAbstract['update'] = <T>(
    collection: string,
    data: object
  ) => {
    return new UpdateBuilder<T>(collection, this.db, data);
  };

  public delete: DatabaseProviderAbstract['delete'] = <T>(
    collection: string
  ) => {
    return new DeleteBuilder<T>(collection, this.db);
  };

  public findReference: DatabaseProviderAbstract['findReference'] = async <T>(
    collection: string,
    referenceId: string
  ) => {
    const snapshot = await this.db
      .collection(collection)
      .doc(referenceId)
      .get();

    if (!snapshot.exists) return null;
    return snapshot.data() as T;
  };

  public updateByTransaction: DatabaseProviderAbstract['updateByTransaction'] =
    async (collection: string, query: FilterQuery, data: object) => {
      const snapshot = await this.db
        .collection(collection)
        .where(query.field, query.operator, query.value)
        .limit(1)
        .get();

      const [docRef] = snapshot.docs;
      if (!docRef) throw Error('Database document not found!');

      await this.db.runTransaction(async (transaction) => {
        const doc = await transaction.get(docRef.ref);
        if (!doc.exists) throw Error('Database document not found!');

        transaction.update(docRef.ref, data);
      });
    };

  public deleteReference: DatabaseProviderAbstract['deleteReference'] = async (
    collection: string,
    referenceId: string
  ) => {
    await this.db.collection(collection).doc(referenceId).delete();
  };
}
