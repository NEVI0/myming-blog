import 'server-only';

import { GivePostFeedbackDTO } from '@domain/dtos';
import { PostFeedbackRepositoryAbstract } from '@domain/repositories';

export default class GivePostFeedbackUseCase {
  constructor(
    private readonly postFeedbackRepository: PostFeedbackRepositoryAbstract
  ) {}

  public async execute(dto: GivePostFeedbackDTO) {
    const { postId, feedback } = dto;

    if (feedback === 'likes') {
      await this.postFeedbackRepository.like(postId);
    } else {
      await this.postFeedbackRepository.dislike(postId);
    }
  }
}
