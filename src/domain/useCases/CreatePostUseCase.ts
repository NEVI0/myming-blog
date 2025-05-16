import 'server-only';

import { Post } from '@domain/entities';
import { CreatePostDTO } from '@domain/dtos';
import { SessionProviderAbstract } from '@domain/providers';
import { PostRepositoryAbstract } from '@domain/repositories';

export default class CreatePostUseCase {
  constructor(
    private readonly postRepository: PostRepositoryAbstract,
    private readonly sessionProvider: SessionProviderAbstract
  ) {}

  public async execute(dto: CreatePostDTO) {
    const session = await this.sessionProvider.session();

    if (!session || !session.user) {
      throw new Error('You must be logged in to create a post');
    }

    return this.postRepository.create(
      new Post({
        id: this.generateRandomId(),
        title: dto.title,
        subtitle: dto.subtitle,
        content: dto.content,
        note: dto.note,
        isPublic: dto.isPublic,
        feedback: {
          likes: 0,
          dislikes: 0,
        },
        author: {
          id: session.user.id,
          name: session.user.name,
        },
      })
    );
  }

  private generateRandomId() {
    return crypto.randomUUID();
  }
}
