'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { X } from 'lucide-react';

import { IconButton } from '@app/components/ui';
import { concatClasses } from '@app/helpers';

interface MobileDrawerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileDrawerMenu({
  isOpen,
  onToggle,
}: MobileDrawerMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <aside
      className={concatClasses(
        'fixed top-0 right-0 w-64 h-full bg-background transition-transform transform border-l border-gray-300',
        isOpen ? 'translate-x-0' : 'translate-x-64'
      )}
    >
      <div className="flex items-center justify-between w-full h-[80px] border-b border-gray-300 px-8">
        <h3 className="text-lg font-bold">Menu</h3>

        <IconButton icon={<X />} onClick={onToggle} />
      </div>

      <nav className="flex flex-col items-start gap-4 p-8">
        <Link
          href="/"
          className="flex items-center  font-medium w-full h-[44px]"
          onClick={onToggle}
        >
          Início
        </Link>

        <Link
          href="/posts"
          className="flex items-center  font-medium w-full h-[44px]"
          onClick={onToggle}
        >
          Publicações
        </Link>

        <Link
          href="/#about"
          className="flex items-center  font-medium w-full h-[44px]"
          onClick={onToggle}
        >
          Sobre o blog
        </Link>

        <Link
          href="/account/nevio"
          className="flex items-center  font-medium text-primary w-full h-[44px]"
          onClick={onToggle}
        >
          Minha conta
        </Link>
      </nav>
    </aside>
  );
}
