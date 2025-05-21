'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { OctagonX } from 'lucide-react';

import { PostAbstract } from '@domain/entities';
import { Button, Modal } from '@app/components/ui';
import { deletePostByIdAction } from '@app/actions';

interface DeletePostButtonProps {
  post: Omit<PostAbstract, 'toJson'>;
}

export default function DeletePostButton({ post }: DeletePostButtonProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  async function handleDeletePost() {
    let redirectPath = '';

    try {
      setIsLoading(true);
      await deletePostByIdAction({ id: post.id });

      redirectPath = '/';
    } catch (error) {
    } finally {
      setIsLoading(false);
      if (redirectPath) redirect(redirectPath);
    }
  }

  return (
    <>
      <Button
        variant="danger"
        className="w-[160px]"
        onClick={() => setIsModalOpen(true)}
      >
        Excluir
      </Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col items-center gap-8 bg-background p-8 rounded-4xl w-[85%] md:w-[366px]">
          <OctagonX className="size-16 text-red-600" />

          <div className="flex flex-col items-center gap-2">
            <h3 className="text-2xl font-bold">Excluir post</h3>

            <p className="text-gray-600 text-center">
              Tem certeza que deseja excluir o post{' '}
              <strong>“{post.title}”</strong>? Está ação não pode ser desfeita.
            </p>
          </div>

          <div className="flex items-center gap-4 w-full">
            <Button
              variant="default"
              className="w-full"
              disabled={isLoading}
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </Button>

            <Button
              variant="danger"
              className="w-full"
              disabled={isLoading}
              onClick={handleDeletePost}
            >
              {isLoading ? 'Excluindo...' : 'Excluir'}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
