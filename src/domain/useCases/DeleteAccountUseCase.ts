import 'server-only';

import { SessionProviderAbstract } from '@domain/providers';
import {
  PostRepositoryAbstract,
  UserRepositoryAbstract,
} from '@domain/repositories';

export default class DeleteAccountUseCase {
  constructor(
    private readonly userRepository: UserRepositoryAbstract,
    private readonly postRepository: PostRepositoryAbstract,
    private readonly sessionProvider: SessionProviderAbstract
  ) {}

  public async execute() {
    const session = await this.sessionProvider.session();

    if (!session || !session.user) {
      throw new Error('You must be logged in to delete your account');
    }

    await Promise.all([
      this.postRepository.deleteByAuthorId(session.user.id),
      this.userRepository.deleteById(session.user.id),
    ]);
  }
}
