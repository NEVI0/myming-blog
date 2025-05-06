'use client';

import { useState } from 'react';

import Link from 'next/link';
import { Menu } from 'lucide-react';

import { IconButton, VerticalDivider } from '@app/components/ui';
import { MobileDrawerMenu } from './components';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="flex items-center justify-center w-full h-[80px] border-b border-gray-300">
        <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8 ">
          <Link
            href="/"
            className="h-full flex items-center justify-center font-medium"
          >
            <h1 className="text-2xl font-bold">
              <span className="text-primary">My</span>Mind Blog
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-4 h-full">
            <Link
              href="/"
              className="h-full flex items-center justify-center font-medium"
            >
              Início
            </Link>

            <VerticalDivider />

            <Link
              href="/posts"
              className="h-full flex items-center justify-center font-medium"
            >
              Publicações
            </Link>

            <VerticalDivider />

            <Link
              href="/#about"
              className="h-full flex items-center justify-center font-medium"
            >
              Sobre o blog
            </Link>

            <VerticalDivider />

            <Link
              href="/account/nevio"
              className="h-full flex items-center justify-center font-medium text-primary"
            >
              Minha conta
            </Link>
          </nav>

          <div className="md:hidden">
            <IconButton
              icon={<Menu />}
              type="button"
              onClick={handleToggleMenu}
            />
          </div>
        </div>
      </header>

      <MobileDrawerMenu isOpen={isMenuOpen} onToggle={handleToggleMenu} />
    </>
  );
}
