import { Button, SearchBox } from '@app/components/ui';

export default function Filters() {
  return (
    <section className="flex items-center gap-4">
      <SearchBox
        placeholder="Pesquisar post por título, autor ou conteúdo"
        className="w-full"
      />
      <Button className="w-[224px]">Pesquisar</Button>
    </section>
  );
}
