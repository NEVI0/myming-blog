import Link from 'next/link';

import { ANIMATIONS } from '@app/constants/animations';
import { Animation, Button } from '@app/components/ui';

export default function NotFount() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 gap-8">
      <Animation
        animation={ANIMATIONS.PAGE_404}
        height={400}
        width={400}
        loop={false}
      />

      <div className="flex flex-col items-center justify-center gap-2 w-full md:w-1/2">
        <h1 className="text-center text-2xl font-bold">
          Ops... página não encontrada!
        </h1>

        <p className="text-center text-gray-600">
          Tem certeza que está tentando acessar o link certo? Qualquer coisa
          clique no link abaixo para voltar ao início.
        </p>
      </div>

      <Link href="/">
        <Button className="w-[160px]">Voltar ao início</Button>
      </Link>
    </section>
  );
}
