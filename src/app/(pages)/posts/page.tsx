import { Breadcrumb } from '@app/components/ui';

import { FoundPosts, Filters } from './components';

export default function Posts() {
  return (
    <>
      <Breadcrumb />
      <Filters />
      <FoundPosts />
    </>
  );
}
