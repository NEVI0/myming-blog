import 'server-only';

import { DeletePostByIdUseCase } from '@domain/useCases';
import { makePostRepository } from '@factories/repositories';

let instance: DeletePostByIdUseCase | null = null;

export default function makeDeletePostByIdUseCase() {
  if (!instance) {
    const postRepository = makePostRepository();
    instance = new DeletePostByIdUseCase(postRepository);
  }

  return instance;
}
