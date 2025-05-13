'use client';

import { useState } from 'react';
import { OctagonX } from 'lucide-react';

import { UserAbstract } from '@domain/entities';

import { Button, Modal, VerticalDivider } from '@app/components/ui';

interface UserProps {
  user: Omit<UserAbstract, 'toJson'>;
}

export default function User({ user }: UserProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <section className="flex flex-col md:flex-row md:items-center gap-8 justify-between">
        <div className="flex items-center gap-4">
          <img
            src={user.image}
            alt={`Imagem de perfil de ${user.name}`}
            className="size-20 rounded-full"
          />

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <h2 className="text-xl font-bold text-gray-600">{user.email}</h2>
          </div>
        </div>

        <aside className="flex items-center gap-4">
          <button className="text-red-500" onClick={() => setIsModalOpen(true)}>
            Excluir conta
          </button>

          <VerticalDivider />

          <button>Sair</button>
        </aside>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col items-center gap-8 bg-background p-8 rounded-4xl w-[85%] md:w-[366px]">
          <OctagonX className="size-16 text-red-600" />

          <div className="flex flex-col items-center gap-2">
            <h3 className="text-2xl font-bold">Excluir conta</h3>

            <p className="text-gray-600 text-center">
              Tem certeza que deseja excluir sua conta? Seus posts serão
              deletados e está ação não pode ser desfeita.
            </p>
          </div>

          <div className="flex items-center gap-4 w-full">
            <Button
              variant="default"
              className="w-full"
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </Button>

            <Button variant="danger" className="w-full">
              Excluir
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
