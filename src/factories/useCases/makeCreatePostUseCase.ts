import 'server-only';

import { CreatePostUseCase } from '@domain/useCases';
import { makePostRepository } from '@factories/repositories';

let instance: CreatePostUseCase | null = null;

export default function makeCreatePostUseCase() {
  if (!instance) {
    const postRepository = makePostRepository();
    instance = new CreatePostUseCase(postRepository);
  }

  return instance;
}
