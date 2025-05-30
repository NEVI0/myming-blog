import { redirect } from 'next/navigation';

import { fetchUserSession } from '@app/actions';

export default async function RedirectToAccount() {
  const session = await fetchUserSession();

  if (!session) {
    return redirect('/');
  }

  return redirect(`/account/${session?.user?.id}`);
}
