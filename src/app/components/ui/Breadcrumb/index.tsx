'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { VerticalDivider } from '@app/components/ui';

const PATH_TRANSLATIONS: Record<string, string> = {
  post: 'Post',
  posts: 'Posts',
  'create-post': 'Novo post',
  'review-post': 'Revisar post',
  account: 'Perfil',
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const items = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    const isLast = index === segments.length - 1;
    const page = PATH_TRANSLATIONS[segment];

    return (
      <div className="flex items-center gap-4" key={href}>
        <Link href={href}>{page}</Link>
        {!isLast && !page && <VerticalDivider />}
      </div>
    );
  });

  return (
    <section className="flex items-center gap-4">
      <Link href="/">Início</Link>
      {items.length > 0 && <VerticalDivider />}
      {items}
    </section>
  );
}
