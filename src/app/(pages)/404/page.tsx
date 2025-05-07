import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 w-full h-full bg-background">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Ops... página não encontrada</h1>
        <p className="text-gray-600">
          Parece que a página que você está procurando não existe.
        </p>
      </div>

      <Link href="/" className="text-primary font-medium">
        Voltar para a página inicial
      </Link>
    </main>
  );
}
