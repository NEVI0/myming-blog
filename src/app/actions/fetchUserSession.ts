'use server';

import { auth } from '@configs/auth';

export default async function fetchUserSession() {
  const session = await auth();
  return session;
}
