import { redirect } from 'next/navigation';

import { useAuth } from '@configs/auth';

import { Breadcrumb } from '@app/components/ui';
import { Form } from './components';

export default async function CreatePost() {
  const session = await useAuth();

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
