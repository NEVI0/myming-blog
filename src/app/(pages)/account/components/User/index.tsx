import { VerticalDivider } from '@app/components/ui';

export default function User() {
  return (
    <section className="flex flex-col md:flex-row md:items-center gap-8 justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Névio Costa Magagnin</h1>
        <h2 className="text-xl font-bold text-gray-600">nevio.dev@gmail.com</h2>
      </div>

      <aside className="flex items-center gap-4">
        <button className="text-red-500">Excluir conta</button>

        <VerticalDivider />

        <button>Sair</button>
      </aside>
    </section>
  );
}
