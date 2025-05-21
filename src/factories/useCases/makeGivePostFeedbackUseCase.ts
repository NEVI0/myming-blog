import { GivePostFeedbackUseCase } from '@domain/useCases';
import { makePostRepository } from '@factories/repositories';

let instance: GivePostFeedbackUseCase | null = null;

export default function makeGivePostFeedbackUseCase() {
  if (!instance) {
    const postRepository = makePostRepository();
    instance = new GivePostFeedbackUseCase(postRepository);
  }

  return instance;
}
