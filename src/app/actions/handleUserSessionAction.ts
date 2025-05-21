'use server';

import { signIn, signOut, auth } from '@configs/auth';

export default async function handleUserSessionAction() {
  const session = await auth();

  if (!session) {
    return await signIn('google', { redirectTo: '/' });
  }

  return await signOut({ redirectTo: '/' });
}
