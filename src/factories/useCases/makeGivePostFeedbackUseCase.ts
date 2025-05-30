import 'server-only';

import { GivePostFeedbackUseCase } from '@domain/useCases';
import { makePostFeedbackRepository } from '@factories/repositories';

let instance: GivePostFeedbackUseCase | null = null;

export default function makeGivePostFeedbackUseCase() {
  if (!instance) {
    const postFeedbackRepository = makePostFeedbackRepository();
    instance = new GivePostFeedbackUseCase(postFeedbackRepository);
  }

  return instance;
}
