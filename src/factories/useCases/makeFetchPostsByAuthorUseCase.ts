import 'server-only';

import { FetchPostsByAuthorUseCase } from '@domain/useCases';
import { makePostRepository } from '@factories/repositories';

let instance: FetchPostsByAuthorUseCase | null = null;

export default function makeFetchPostsByAuthorUseCase() {
  if (!instance) {
    const postRepository = makePostRepository();
    instance = new FetchPostsByAuthorUseCase(postRepository);
  }

  return instance;
}
