'use server';

import { auth } from '@configs/auth';

export default async function fetchUserSession() {
  const session = await auth();

  if (!session || !session.user) return null;

  return {
    expires: session.expires,
    user: {
      id: session.user.id!,
      name: session.user.name!,
      email: session.user.email!,
      image: session.user.image!,
    },
  };
}
