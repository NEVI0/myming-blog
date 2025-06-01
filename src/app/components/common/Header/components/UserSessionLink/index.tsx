'use client';

import Link from 'next/link';

import { SessionAbstract } from '@domain/entities';
import { handleUserSessionAction } from '@app/actions';

interface UserSessionLinkProps {
  session: SessionAbstract | null;
}

export default function UserSessionLink({ session }: UserSessionLinkProps) {
  return !!session ? (
    <Link
      href={`/account/${session.user?.id}`}
      className="h-[44px] w-full md:h-full md:w-auto flex items-center justify-center font-medium text-primary"
    >
      Minha conta
    </Link>
  ) : (
    <form action={handleUserSessionAction}>
      <button
        type="submit"
        className="h-[44px] w-full md:h-full md:w-auto flex items-center justify-center font-medium text-primary cursor-pointer"
      >
        Entrar em minha conta
      </button>
    </form>
  );
}
