'use client';

import { handleUserSessionAction } from '@app/actions';

export default function SignOutButton() {
  async function handleSignOut() {
    await handleUserSessionAction();
  }

  return (
    <button onClick={handleSignOut} className="cursor-pointer">
      Sair
    </button>
  );
}
