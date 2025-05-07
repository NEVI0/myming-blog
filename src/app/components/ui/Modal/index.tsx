'use client';

import { useEffect } from 'react';

import { concatClasses } from '@app/helpers';

interface ModalProps {
  children: React.ReactNode;

  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <dialog
      className={concatClasses(
        'fixed top-0 left-0 w-full h-full bg-black/15 transition-transform transform items-center justify-center',
        isOpen ? 'flex' : 'hidden'
      )}
    >
      {children}
    </dialog>
  );
}
