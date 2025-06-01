import { Suspense } from 'react';
import Link from 'next/link';

import { fetchMostRecentPostsAction } from '@app/actions';

import { Post, Section } from '@app/components/common';
import { Skeleton } from '@app/components/ui';

export default async function MostRecentPosts() {
  const { posts } = await fetchMostRecentPostsAction();

  return (
    <Section
      title="Posts mais recentes"
      actions={
        <Link
          href="/posts"
          className="h-full text-right font-medium text-primary"
        >
          Ver todos os posts
        </Link>
      }
    >
      <Suspense
        fallback={
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="h-[168px] w-full rounded-3xl" />
            ))}
          </div>
        }
      >
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </Suspense>
    </Section>
  );
}
