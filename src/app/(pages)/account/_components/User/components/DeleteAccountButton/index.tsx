'use client';

import { useState } from 'react';
import { OctagonX } from 'lucide-react';

import { deleteAccountAction } from '@app/actions';
import { handleErrorMessage } from '@app/helpers';
import { useToast } from '@app/hooks';

import { Button, Modal } from '@app/components/ui';

export default function DeleteAccountButton() {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  async function handleDeleteAccount() {
    try {
      setIsLoading(true);
      await deleteAccountAction();

      toast.success(
        'Conta excluída com sucesso! Você será redirecionado para a página inicial...'
      );

      location.reload();
    } catch (error) {
      toast.error(
        handleErrorMessage(error, 'Erro ao excluir conta. Tente novamente!')
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        className="text-red-500 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        Excluir conta
      </button>

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
              disabled={isLoading}
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </Button>

            <Button
              variant="danger"
              className="w-full"
              disabled={isLoading}
              onClick={handleDeleteAccount}
            >
              {isLoading ? 'Excluindo...' : 'Excluir'}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
