import 'server-only';

import { DeletePostByIdDTO } from '@domain/dtos';
import { PostRepositoryAbstract } from '@domain/repositories';

export default class DeletePostByIdUseCase {
  constructor(private readonly postRepository: PostRepositoryAbstract) {}

  public async execute(dto: DeletePostByIdDTO) {
    return this.postRepository.deleteById(dto.id);
  }
}
