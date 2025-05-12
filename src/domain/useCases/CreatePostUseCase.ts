import 'server-only';

import { Post } from '@domain/entities';
import { CreatePostDTO } from '@domain/dtos';
import { PostRepositoryAbstract } from '@domain/repositories';

export default class CreatePostUseCase {
  constructor(private readonly postRepository: PostRepositoryAbstract) {}

  public async execute(dto: CreatePostDTO) {
    return this.postRepository.create(
      new Post({
        id: this.generateRandomId(),
        title: dto.title,
        subtitle: dto.subtitle,
        content: dto.content,
        note: dto.note,
        author: dto.author,
      })
    );
  }

  private generateRandomId() {
    return crypto.randomUUID();
  }
}
