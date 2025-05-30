'use server';

import { z } from 'zod';

import { GivePostFeedbackDTO } from '@domain/dtos';
import { makeGivePostFeedbackUseCase } from '@factories/useCases';

const schema = z.object({
  postId: z.string().nonempty(),
  feedback: z.enum(['likes', 'dislikes']),
});

export default async function givePostFeedbackAction(
  params: GivePostFeedbackDTO
) {
  try {
    const dto = schema.parse(params);
    await makeGivePostFeedbackUseCase().execute(dto);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
