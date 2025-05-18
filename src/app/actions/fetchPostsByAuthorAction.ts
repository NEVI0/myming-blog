'use server';

import { z } from 'zod';

import { FetchPostsByAuthorDTO } from '@domain/dtos';
import { makeFetchPostsByAuthorUseCase } from '@factories/useCases';

const schema = z.object({
  author: z.object({
    id: z.string(),
  }),
});

export default async function fetchPostsByAuthorAction(
  params: FetchPostsByAuthorDTO
) {
  try {
    const dto = schema.parse(params);
    const posts = await makeFetchPostsByAuthorUseCase().execute(dto);

    return { posts: posts.map((post) => post.toJson()) };
  } catch (error) {
    return { posts: [] };
  }
}
