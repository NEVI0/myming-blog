'use server';

import { signIn, signOut, useAuth } from '@configs/auth';

export default async function handleUserSessionAction() {
  const session = await useAuth();

  if (!session) {
    return await signIn('google', { redirectTo: '/create' });
  }

  return await signOut({ redirectTo: '/' });
}
