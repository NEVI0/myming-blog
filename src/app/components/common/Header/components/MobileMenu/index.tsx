'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { IconButton } from '@app/components/ui';
import { concatClasses } from '@app/helpers';
import { SessionAbstract } from '@domain/entities';

import UserSessionLink from '../UserSessionLink';

interface MobileMenuProps {
  session: SessionAbstract | null;
}

export default function MobileMenu({ session }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <div className="md:hidden">
        <IconButton icon={<Menu />} type="button" onClick={handleToggleMenu} />
      </div>

      <aside
        className={concatClasses(
          'fixed top-0 right-0 w-64 h-full bg-background transition-transform transform border-l border-gray-300',
          isMenuOpen ? 'translate-x-0' : 'translate-x-64'
        )}
      >
        <div className="flex items-center justify-between w-full h-[80px] border-b border-gray-300 px-8">
          <h3 className="text-lg font-bold">Menu</h3>

          <IconButton icon={<X />} onClick={handleToggleMenu} />
        </div>

        <nav className="flex flex-col items-start gap-4 p-8">
          <Link
            href="/"
            className="flex items-center  font-medium w-full h-[44px]"
            onClick={handleToggleMenu}
          >
            Início
          </Link>

          <Link
            href="/posts"
            className="flex items-center  font-medium w-full h-[44px]"
            onClick={handleToggleMenu}
          >
            Publicações
          </Link>

          <Link
            href="/#about"
            className="flex items-center  font-medium w-full h-[44px]"
            onClick={handleToggleMenu}
          >
            Sobre o blog
          </Link>

          <UserSessionLink session={session} />
        </nav>
      </aside>
    </>
  );
}
