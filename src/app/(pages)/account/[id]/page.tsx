import { fetchUserByIdAction } from '@app/actions';
import { Breadcrumb } from '@app/components/ui';

import { redirect } from 'next/navigation';

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
    return redirect('/');
  }

  return (
    <>
      <Breadcrumb />
      <User user={user.toJson()} />
      <Posts />
    </>
  );
}
