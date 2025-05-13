import 'server-only';

import { UserRepositoryAbstract } from '@domain/repositories';
import { UserRepository } from '@infra/repositories';

import { makeDatabaseProvider } from '@factories/providers';

let instance: UserRepositoryAbstract | null = null;

export default function makeUserRepository() {
  if (!instance) {
    const databaseProvider = makeDatabaseProvider();
    instance = new UserRepository(databaseProvider);
  }

  return instance;
}
