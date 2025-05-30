import Link from 'next/link';

import { handleUserSessionAction, fetchUserSession } from '@app/actions';

export default async function UserSessionLink() {
  const session = await fetchUserSession();

  return !!session ? (
    <Link
      href={`/account/${session.user?.id}`}
      className="h-full flex items-center justify-center font-medium text-primary"
    >
      Minha conta
    </Link>
  ) : (
    <form action={handleUserSessionAction}>
      <button
        type="submit"
        className="h-full flex items-center justify-center font-medium text-primary cursor-pointer"
      >
        Entrar em minha conta
      </button>
    </form>
  );
}
