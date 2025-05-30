import 'server-only';

import { Post, POST_VALIDATION } from '@domain/entities';
import { CreatePostDTO } from '@domain/dtos';
import { SessionProviderAbstract } from '@domain/providers';
import { PostRepositoryAbstract } from '@domain/repositories';

export default class CreatePostUseCase {
  constructor(
    private readonly postRepository: PostRepositoryAbstract,
    private readonly sessionProvider: SessionProviderAbstract
  ) {}

  public async execute(dto: CreatePostDTO) {
    const session = await this.validateSession();
    this.validatePost(dto);

    const post = new Post({
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
        id: session.user!.id,
        name: session.user!.name,
      },
    });

    return this.postRepository.create(post);
  }

  private async validateSession() {
    const session = await this.sessionProvider.session();

    if (!session || !session.user || !session.user.id || !session.user.name) {
      throw new Error('Você deve estar logado para criar um post!');
    }

    return session;
  }

  private validatePost(dto: CreatePostDTO) {
    const { title, content } = dto;

    if (!title) {
      throw new Error('Você deve informar o título do post!');
    }

    if (title.length > POST_VALIDATION.MAX_TITLE_LENGTH) {
      throw new Error(
        `O título do post deve conter no máximo ${POST_VALIDATION.MAX_TITLE_LENGTH} caracteres!`
      );
    }

    if (!content) {
      throw new Error('Você deve informar o conteúdo do post!');
    }

    if (content.length < POST_VALIDATION.MIN_CONTENT_LENGTH) {
      throw new Error(
        `O conteúdo do post deve conter no mínimo ${POST_VALIDATION.MIN_CONTENT_LENGTH} caracteres!`
      );
    }
  }

  private generateRandomId() {
    return crypto.randomUUID();
  }
}
