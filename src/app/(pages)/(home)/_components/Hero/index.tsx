import Link from 'next/link';

import { Button, SearchBox } from '@app/components/ui';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 h-[672px]">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-4xl font-bold text-center w-full md:w-[80%]">
          Publique seus posts sobre qualquer assunto de seu{' '}
          <span className="text-primary">interesse</span>!
        </h1>

        <p className="text-gray-600 text-center w-full md:w-[50%]">
          Pesquise abaixo por um post já publicado por outro usuário ou publique
          algo você mesmo
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-[60%]">
        <SearchBox placeholder="Pesquise por um post" className="w-full" />

        <Link href="/posts" className="w-full md:w-auto">
          <Button className="w-full">Pesquisar</Button>
        </Link>
      </div>
    </section>
  );
}
