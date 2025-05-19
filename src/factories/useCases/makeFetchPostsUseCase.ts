import 'server-only';

import { FetchPostsUseCase } from '@domain/useCases';
import { makePostRepository } from '@factories/repositories';

let instance: FetchPostsUseCase | null = null;

export default function makeFetchPostsUseCase() {
  if (!instance) {
    const postRepository = makePostRepository();
    instance = new FetchPostsUseCase(postRepository);
  }

  return instance;
}
