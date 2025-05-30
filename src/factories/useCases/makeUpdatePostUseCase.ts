import 'server-only';

import { UpdatePostUseCase } from '@domain/useCases';

import { makePostRepository } from '@factories/repositories';
import { makeSessionProvider } from '@factories/providers';

let instance: UpdatePostUseCase | null = null;

export default function makeUpdatePostUseCase() {
  if (!instance) {
    const postRepository = makePostRepository();
    const sessionProvider = makeSessionProvider();

    instance = new UpdatePostUseCase(postRepository, sessionProvider);
  }

  return instance;
}
