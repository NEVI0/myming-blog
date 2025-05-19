import 'server-only';

import { FetchPostsDTO } from '@domain/dtos';
import { PostRepositoryAbstract } from '@domain/repositories';

export default class FetchPostsUseCase {
  constructor(private readonly postRepository: PostRepositoryAbstract) {}

  public async execute(dto: FetchPostsDTO) {
    return this.postRepository.findAll({ ...dto, public: true });
  }
}
