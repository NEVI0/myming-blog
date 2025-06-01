import { Suspense } from 'react';

import { Breadcrumb } from '@app/components/ui';
import { Content } from './_components';

export default function Posts() {
  return (
    <>
      <Breadcrumb />

      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </>
  );
}
