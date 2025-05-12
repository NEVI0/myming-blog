import 'server-only';

import { DatabaseProviderAbstract } from '@domain/providers';
import { FirestoreDatabaseProvider } from '@infra/providers';

let instance: DatabaseProviderAbstract | null = null;

export default function makeDatabaseProvider() {
  if (!instance) {
    instance = new FirestoreDatabaseProvider();
  }

  return instance;
}
