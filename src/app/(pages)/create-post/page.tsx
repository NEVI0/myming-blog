import { redirect } from 'next/navigation';

import { fetchUserSession } from '@app/actions';

import { Breadcrumb } from '@app/components/ui';
import { Form } from './components';

export default async function CreatePost() {
  const session = await fetchUserSession();

  if (!session) {
    redirect('/access-account');
  }

  return (
    <>
      <Breadcrumb />
      <Form />
    </>
  );
}
