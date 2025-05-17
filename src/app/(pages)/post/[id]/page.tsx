import { redirect } from 'next/navigation';
import { fetchPostByIdAction } from '@app/actions';

import { Breadcrumb } from '@app/components/ui';
import { Content, Feedback } from '../components';

interface ParamsAbstract {
  id: string;
}

interface PostProps {
  params: Promise<ParamsAbstract>;
}

export default async function Post({ params }: PostProps) {
  const { id } = await params;
  const { post } = await fetchPostByIdAction({ id });

  if (!post) return redirect('/post/not-found');

  return (
    <>
      <Breadcrumb />
      <Content post={post} />
      <Feedback />
    </>
  );
}
