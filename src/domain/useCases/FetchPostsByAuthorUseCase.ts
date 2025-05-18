import 'server-only';

import { FetchPostsByAuthorDTO } from '@domain/dtos';
import { PostRepositoryAbstract } from '@domain/repositories';

export default class FetchPostsByAuthorUseCase {
  constructor(private readonly postRepository: PostRepositoryAbstract) {}

  public async execute(dto: FetchPostsByAuthorDTO) {
    return this.postRepository.findAll({
      author: {
        id: dto.author.id,
      },
    });
  }
}
