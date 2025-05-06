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
  console.log({ id });

  return (
    <>
      <Breadcrumb />
      <User />
      <Posts />
    </>
  );
}
