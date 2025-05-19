import { redirect } from 'next/navigation';

import { fetchUserByIdAction } from '@app/actions';

import { Breadcrumb } from '@app/components/ui';
import { User, Posts } from '../components';

interface ParamsAbstract {
  id: string;
}

interface AccountProps {
  params: Promise<ParamsAbstract>;
}

export default async function Account({ params }: AccountProps) {
  const { id } = await params;
  const { user } = await fetchUserByIdAction({ id });

  if (!user) {
    return redirect('/account/not-found');
  }

  return (
    <>
      <Breadcrumb />
      <User user={user} />
      <Posts user={user} />
    </>
  );
}
