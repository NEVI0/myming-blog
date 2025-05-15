import 'server-only';

import { CreatePostUseCase } from '@domain/useCases';
import { makeSessionProvider } from '@factories/providers';
import { makePostRepository } from '@factories/repositories';

let instance: CreatePostUseCase | null = null;

export default function makeCreatePostUseCase() {
  if (!instance) {
    const postRepository = makePostRepository();
    const sessionProvider = makeSessionProvider();

    instance = new CreatePostUseCase(postRepository, sessionProvider);
  }

  return instance;
}
