import 'server-only';

import { UpdatePostDTO } from '@domain/dtos';
import { Post, POST_VALIDATION } from '@domain/entities';
import { PostRepositoryAbstract } from '@domain/repositories';

import { SessionProviderAbstract } from '@domain/providers';

export default class UpdatePostUseCase {
  constructor(
    private readonly postRepository: PostRepositoryAbstract,
    private readonly sessionProvider: SessionProviderAbstract
  ) {}

  public async execute(dto: UpdatePostDTO) {
    await this.validateSession();
    this.validatePost(dto);

    const post = new Post({
      ...dto.post,
      updatedAt: new Date().toISOString(),
    });

    return this.postRepository.update(post);
  }

  private async validateSession() {
    const session = await this.sessionProvider.session();

    if (!session || !session.user || !session.user.id || !session.user.name) {
      throw new Error('Você deve estar logado para atualizar um post!');
    }

    return session;
  }

  private validatePost(dto: UpdatePostDTO) {
    const { title, content } = dto.post;

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
}
