'use server';

import { z } from 'zod';

import { FetchPostByIdDTO } from '@domain/dtos';
import { makeFetchPostByIdUseCase } from '@factories/useCases';

const schema = z.object({
  id: z.string(),
});

export default async function fetchPostByIdAction(params: FetchPostByIdDTO) {
  try {
    const dto = schema.parse(params);
    const post = await makeFetchPostByIdUseCase().execute(dto);

    if (!post) return { post: null };
    return { post: post.toJson() };
  } catch (error) {
    console.log(error);
    return { post: null };
  }
}
