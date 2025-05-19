'use client';

import Link from 'next/link';

import { ANIMATIONS } from '@app/constants/animations';
import { Animation, Button } from '@app/components/ui';

export default function PostNotFound() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 gap-8">
      <Animation
        animation={ANIMATIONS.NOT_FOUND}
        height={200}
        width={200}
        loop={false}
      />

      <div className="flex flex-col items-center justify-center gap-2 w-full md:w-1/2">
        <h1 className="text-center text-2xl font-bold">
          Post não encontrado...
        </h1>

        <p className="text-center text-gray-600">
          Tem certeza que o link que você está tentando acessar está correto?
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Link href="/">
          <Button variant="default" className="w-[160px]">
            Início
          </Button>
        </Link>

        <Link href="/posts">
          <Button className="w-[160px]">Posts</Button>
        </Link>
      </div>
    </section>
  );
}
