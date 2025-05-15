'use server';

import { z } from 'zod';

import { CreatePostDTO } from '@domain/dtos';
import { makeCreatePostUseCase } from '@factories/useCases';

const schema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  content: z.string(),
  note: z.string().optional(),
  isPublic: z.boolean(),
});

export default async function createPostAction(params: CreatePostDTO) {
  try {
    const dto = schema.parse(params);
    await makeCreatePostUseCase().execute(dto);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
