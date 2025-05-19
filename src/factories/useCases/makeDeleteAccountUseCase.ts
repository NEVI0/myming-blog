import 'server-only';

import { DeleteAccountUseCase } from '@domain/useCases';
import { makeSessionProvider } from '@factories/providers';
import {
  makePostRepository,
  makeUserRepository,
} from '@factories/repositories';

let instance: DeleteAccountUseCase | null = null;

export default function makeDeleteAccountUseCase() {
  if (!instance) {
    const userRepository = makeUserRepository();
    const postRepository = makePostRepository();
    const sessionProvider = makeSessionProvider();

    instance = new DeleteAccountUseCase(
      userRepository,
      postRepository,
      sessionProvider
    );
  }

  return instance;
}
