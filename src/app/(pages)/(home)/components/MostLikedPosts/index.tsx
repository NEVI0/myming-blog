'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Section } from '@app/components/common';
import { Skeleton } from '@app/components/ui';

export default function MostLikedPosts() {
  const [isLoading] = useState<boolean>(true);

  return (
    <Section
      title="Posts mais curtidos pelos usuário"
      actions={
        <Link
          href="/posts"
          className="h-full text-right font-medium text-primary"
        >
          Ver todos os posts
        </Link>
      }
    >
      {isLoading ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-[168px] w-full rounded-3xl" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {/* {new Array(6).fill(0).map((_, index) => (
          <Post key={index} />
        ))} */}
        </div>
      )}
    </Section>
  );
}
