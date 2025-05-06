import { Post, Section } from '@app/components/common';

export default function FoundPosts() {
  return (
    <Section
      title="Posts encontrados"
      actions={
        <p className="h-full text-right font-medium text-primary">
          Limpar filtros
        </p>
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
