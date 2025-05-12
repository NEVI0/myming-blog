import 'server-only';

import { DatabaseProviderAbstract } from '@domain/providers';
import { firestoreDatabase } from '@configs/firebase';

export default class FirestoreDatabaseProvider
  implements DatabaseProviderAbstract
{
  private readonly db = firestoreDatabase;

  constructor() {}

  public findAll: DatabaseProviderAbstract['findAll'] = async <T>(
    collection: string
  ) => {
    const snapshot = await this.db.collection(collection).get();
    return snapshot.docs.map((doc) => doc.data() as T);
  };

  public findById: DatabaseProviderAbstract['findById'] = async <T>(
    collection: string,
    id: string
  ) => {
    const snapshot = await this.db
      .collection(collection)
      .where('id', '==', id)
      .get();

    if (!snapshot.docs[0]) return null;
    return snapshot.docs[0].data() as T;
  };

  public create: DatabaseProviderAbstract['create'] = async <T>(
    collection: string,
    data: object
  ) => {
    const docRef = await this.db.collection(collection).add(data);
    const doc = await docRef.get();

    return doc.data() as T;
  };
}
