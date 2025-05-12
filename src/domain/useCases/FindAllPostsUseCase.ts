import 'server-only';

import { FindAllPostsDTO } from '@domain/dtos';
import { PostRepositoryAbstract } from '@domain/repositories';

export default class FindAllPostsUseCase {
  constructor(private readonly postRepository: PostRepositoryAbstract) {}

  public async execute(_: FindAllPostsDTO) {
    return this.postRepository.findAll();
  }
}
