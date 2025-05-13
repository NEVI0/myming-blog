import Link from 'next/link';

import { useAuth } from '@configs/auth';
import { handleUserSessionAction } from '@app/actions';

export default async function UserSessionLink() {
  const session = await useAuth();

  return !!session ? (
    <Link
      href={`/account/${session.user?.id}`}
      className="h-full flex items-center justify-center font-medium text-primary"
    >
      Minha conta
    </Link>
  ) : (
    <button
      className="h-full flex items-center justify-center font-medium text-primary"
      onClick={handleUserSessionAction}
    >
      Entrar em minha conta
    </button>
  );
}
