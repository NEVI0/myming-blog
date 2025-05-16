import { FetchPostByIdDTO } from '@domain/dtos';
import { PostRepositoryAbstract } from '@domain/repositories';

export default class FetchPostByIdUseCase {
  constructor(private readonly postRepository: PostRepositoryAbstract) {}

  public async execute(dto: FetchPostByIdDTO) {
    return this.postRepository.findById(dto.id);
  }
}
