'use client';

import Link from 'next/link';

import { handleUserSessionAction } from '@app/actions';
import { ANIMATIONS } from '@app/constants/animations';

import { Animation, Button } from '@app/components/ui';

export default function AccessAccount() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 gap-8">
      <Animation animation={ANIMATIONS.LOGIN} height={200} width={200} />

      <div className="flex flex-col items-center justify-center gap-2 w-full md:w-1/2">
        <h1 className="text-center text-2xl font-bold">
          Ops... parece que você não está logado
        </h1>

        <p className="text-center text-gray-600">
          Você precisa estar logado na sua conta para acessar a página e criar
          um post. Clique no botão abaixo para acessar sua conta.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Link href="/">
          <Button variant="default" className="w-[160px]">
            Início
          </Button>
        </Link>

        <Button className="w-[160px]" onClick={handleUserSessionAction}>
          Posts
        </Button>
      </div>
    </section>
  );
}
