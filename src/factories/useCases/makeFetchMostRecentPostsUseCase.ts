import 'server-only';

import { FetchMostRecentPostsUseCase } from '@domain/useCases';
import { makePostRepository } from '@factories/repositories';

let instance: FetchMostRecentPostsUseCase | null = null;

export default function makeFetchMostRecentPostsUseCase() {
  if (!instance) {
    const postRepository = makePostRepository();
    instance = new FetchMostRecentPostsUseCase(postRepository);
  }

  return instance;
}
