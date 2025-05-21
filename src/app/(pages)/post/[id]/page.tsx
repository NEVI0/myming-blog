import { redirect } from 'next/navigation';
import { fetchPostByIdAction, fetchUserSession } from '@app/actions';

import { Breadcrumb } from '@app/components/ui';
import { Content, Feedback, OwnerActions } from '../components';

interface ParamsAbstract {
  id: string;
}

interface PostProps {
  params: Promise<ParamsAbstract>;
}

export default async function Post({ params }: PostProps) {
  const session = await fetchUserSession();

  const { id } = await params;
  const { post } = await fetchPostByIdAction({ id });

  if (!post) return redirect('/post/not-found');

  const isOwner = session?.user?.id === post.author.id;

  return (
    <>
      <Breadcrumb />
      <Content post={post} />
      {isOwner ? <OwnerActions post={post} /> : <Feedback />}
    </>
  );
}
