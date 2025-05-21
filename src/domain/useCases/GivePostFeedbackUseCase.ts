import 'server-only';

import { Post } from '@domain/entities';
import { GivePostFeedbackDTO } from '@domain/dtos';
import { PostRepositoryAbstract } from '@domain/repositories';

export default class GivePostFeedbackUseCase {
  constructor(private readonly postRepository: PostRepositoryAbstract) {}

  public async execute(dto: GivePostFeedbackDTO) {
    const { post, feedback } = dto;

    return await this.postRepository.update(
      new Post({
        ...post,
        feedback: {
          ...post.feedback,
          [feedback]: (post.feedback[feedback] ?? 0) + 1,
        },
      })
    );
  }
}
