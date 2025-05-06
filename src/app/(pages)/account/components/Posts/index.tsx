import Link from 'next/link';
import { Plus } from 'lucide-react';

import { Post, Section } from '@app/components/common';

export default function Posts() {
  return (
    <Section title="Puplicações">
      <div className="grid  gap-4 grid-cols-1 md:grid-cols-2">
        {new Array(6).fill(0).map((_, index) => (
          <Post key={index} />
        ))}

        <Link href="/create-post">
          <div className="flex items-center justify-center gap-4 h-[168px] w-full border border-dashed border-gray-300 hover:border-primary transition-colors rounded-3xl text-primary font-medium">
            Adicionar novo post <Plus />
          </div>
        </Link>
      </div>
    </Section>
  );
}
