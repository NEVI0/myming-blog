'use server';

import { z } from 'zod';

import { GivePostFeedbackDTO } from '@domain/dtos';
import { makeGivePostFeedbackUseCase } from '@factories/useCases';

const schema = z.object({
  post: z.object({
    id: z.string().nonempty(),
    title: z.string().nonempty(),
    subtitle: z.string().optional(),
    content: z.string().nonempty(),
    note: z.string().optional(),
    isPublic: z.boolean(),
    feedback: z.object({
      likes: z.number().optional(),
      dislikes: z.number().optional(),
    }),
    author: z.object({
      id: z.string().nonempty(),
      name: z.string().nonempty(),
      email: z.string().nonempty(),
    }),
    createdAt: z.string().nonempty(),
    updatedAt: z.string().nonempty(),
  }),
  feedback: z.enum(['likes', 'dislikes']),
});

export default async function givePostFeedbackAction(
  params: GivePostFeedbackDTO
) {
  try {
    const dto = schema.parse(params);
    const post = await makeGivePostFeedbackUseCase().execute(dto);

    return { post: post.toJson() };
  } catch (error) {
    return { post: null };
  }
}
