import { FetchPostByIdUseCase } from '@domain/useCases';
import { makePostRepository } from '@factories/repositories';

let instance: FetchPostByIdUseCase;

export default function makeFetchPostByIdUseCase() {
  if (!instance) {
    const postRepository = makePostRepository();
    instance = new FetchPostByIdUseCase(postRepository);
  }

  return instance;
}
