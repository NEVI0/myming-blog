'use server';

import { makeFetchMostRecentPostsUseCase } from '@factories/useCases';

export default async function fetchMostRecentPostsAction() {
  try {
    const posts = await makeFetchMostRecentPostsUseCase().execute();
    return { posts: posts.map((post) => post.toJson()) };
  } catch (error) {
    return { posts: [] };
  }
}
