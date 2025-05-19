import 'server-only';

import { Query, CollectionReference } from 'firebase-admin/firestore';
import { firestoreDatabase } from '@configs/firebase';

import { DatabaseProviderAbstract } from '@domain/providers';
import { FindQuery } from '@domain/providers/DatabaseProvider';

export default class FirestoreDatabaseProvider
  implements DatabaseProviderAbstract
{
  private readonly db = firestoreDatabase;

  constructor() {}

  public find: DatabaseProviderAbstract['find'] = <T>(
    collection: string,
    query?: FindQuery | FindQuery[]
  ) => {
    const hasQueryFilters = !!query || Array.isArray(query);

    const snapshot = hasQueryFilters
      ? this.findByQuery(collection, query)
      : this.findAll(collection);

    return {
      data: async () => {
        const data = await snapshot.get();
        return data.docs.map((doc) => doc.data()) as T;
      },
      paginated: async (limit = 10, page = 1) => {
        const first = await snapshot.limit(limit).get();
        const last = first.docs[first.docs.length - 1];

        const data = await snapshot.startAt(last).limit(limit).get();
        return {
          data: data.docs.map((doc) => doc.data()) as T,
          page,
        };
      },
    };
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

  public create: DatabaseProviderAbstract['create'] = async <T>(
    collection: string,
    data: object
  ) => {
    const snapshot = await this.db.collection(collection).add(data);
    const doc = await snapshot.get();

    return doc.data() as T;
  };

  public deleteOne: DatabaseProviderAbstract['deleteOne'] = async (
    collection: string,
    query: FindQuery
  ) => {
    const snapshot = await this.db
      .collection(collection)
      .where(query.field, query.operator, query.value)
      .limit(1)
      .get();

    const [docRef] = snapshot.docs;
    if (!docRef) throw Error('Database document not found!');

    await this.db.collection(collection).doc(docRef.id).delete();
  };

  public deleteMany: DatabaseProviderAbstract['deleteMany'] = async (
    collection: string,
    query: FindQuery
  ) => {
    const snapshot = await this.db
      .collection(collection)
      .where(query.field, query.operator, query.value)
      .get();

    const promises: Promise<any>[] = [];

    snapshot.docs.forEach((doc) => {
      promises.push(this.db.collection(collection).doc(doc.id).delete());
    });

    await Promise.all(promises);
  };

  public deleteByReference: DatabaseProviderAbstract['deleteByReference'] =
    async (collection: string, referenceId: string) => {
      await this.db.collection(collection).doc(referenceId).delete();
    };

  private findAll(collection: string) {
    return this.db.collection(collection);
  }

  private findByQuery(collection: string, query: FindQuery | FindQuery[]) {
    return this.applyQuery(collection, query);
  }

  private applyQuery(collection: string, query: FindQuery | FindQuery[]) {
    const isQueryArray = Array.isArray(query);
    let collectionRef: Query | CollectionReference =
      this.db.collection(collection);

    if (isQueryArray) {
      query.forEach((q) => {
        collectionRef = collectionRef.where(q.field, q.operator, q.value);
      });

      return collectionRef;
    }

    return collectionRef.where(query.field, query.operator, query.value);
  }
}
