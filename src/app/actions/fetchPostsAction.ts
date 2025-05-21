'use server';

import { z } from 'zod';

import { FetchPostsDTO } from '@domain/dtos';
import { makeFetchPostsUseCase } from '@factories/useCases';

const schema = z.object({
  search: z.string().optional(),
});

export default async function fetchPostsAction(params: FetchPostsDTO) {
  try {
    const dto = schema.parse(params);
    const posts = await makeFetchPostsUseCase().execute(dto);

    return { posts: posts.map((post) => post.toJson()) };
  } catch (error) {
    return { posts: [] };
  }
}
