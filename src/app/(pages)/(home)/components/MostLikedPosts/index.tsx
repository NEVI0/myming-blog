import Link from 'next/link';

import { Section, Post } from '@app/components/common';

export default function MostLikedPosts() {
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
      <div className="grid  gap-4 grid-cols-1 md:grid-cols-2">
        {new Array(6).fill(0).map((_, index) => (
          <Post key={index} />
        ))}
      </div>
    </Section>
  );
}
