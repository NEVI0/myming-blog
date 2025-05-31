import { redirect } from 'next/navigation';

import { fetchPostByIdAction, fetchUserSession } from '@app/actions';

import { Breadcrumb } from '@app/components/ui';
import { Form } from './_components';

interface ParamsAbstract {
  id: string;
}

interface EditPostProps {
  params: Promise<ParamsAbstract>;
}

export default async function EditPost({ params }: EditPostProps) {
  const session = await fetchUserSession();

  const { id } = await params;
  const { post } = await fetchPostByIdAction({ id });

  if (!post) return redirect('/post/not-found');

  const isOwner = session?.user?.id === post.author.id;
  if (!isOwner) return redirect(`/post/${id}`);

  return (
    <>
      <Breadcrumb />
      <Form post={post} />
    </>
  );
}
