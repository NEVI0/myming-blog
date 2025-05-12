import 'server-only';

import { PostRepositoryAbstract } from '@domain/repositories';
import { PostRepository } from '@infra/repositories';

import { makeDatabaseProvider } from '@factories/providers';

let instance: PostRepositoryAbstract | null = null;

export default function makePostRepository() {
  if (!instance) {
    const databaseProvider = makeDatabaseProvider();
    instance = new PostRepository(databaseProvider);
  }

  return instance;
}
