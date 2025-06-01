import 'server-only';

import { PostRepositoryAbstract } from '@domain/repositories';

export default class FetchMostRecentPostsUseCase {
  constructor(private readonly postRepository: PostRepositoryAbstract) {}

  public async execute() {
    return this.postRepository.findMostRecents();
  }
}
