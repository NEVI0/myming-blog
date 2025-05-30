'use server';

import { z } from 'zod';

import { UpdatePostDTO } from '@domain/dtos';
import { makeUpdatePostUseCase } from '@factories/useCases';

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
    }),
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
});

export default async function updatePostAction(params: UpdatePostDTO) {
  try {
    const dto = schema.parse(params);
    const post = await makeUpdatePostUseCase().execute(dto);

    return { post: post.toJson() };
  } catch (error) {
    return { post: null };
  }
}
