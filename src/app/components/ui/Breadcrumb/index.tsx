'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { VerticalDivider } from '@app/components/ui';

type BreadcrumbItem = {
  label: string;
  href: string;
};

const PATHS_WITH_PARAMS = ['post', 'account'];

const PATH_TRANSLATIONS: Record<string, string> = {
  post: 'Post',
  posts: 'Posts',
  'create-post': 'Novo post',
  account: 'Perfil',
  edit: 'Editar',
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const defaultBreadcrumb: Array<BreadcrumbItem | null> = [
    {
      label: 'Início',
      href: '/',
    },
  ];

  const breadcrumb: Array<BreadcrumbItem | null> = defaultBreadcrumb
    .concat(
      segments.map((segment, index) => {
        const label = PATH_TRANSLATIONS[segment];
        const hasParams = PATHS_WITH_PARAMS.includes(segment);

        if (hasParams) {
          const nextSegment = segments[index + 1];

          return {
            label,
            href: `/${segment}/${nextSegment}`,
          };
        }

        if (!label) return null;

        return {
          label,
          href: `/${segment}`,
        };
      })
    )
    .filter((item) => item !== null);

  function handleGenerateKey() {
    return Math.random().toString(36).substring(2, 15);
  }

  return (
    <section className="flex items-center gap-4">
      {breadcrumb
        .filter((item) => item !== null)
        .map((item, index) => {
          const isLast = index === breadcrumb.length - 1;

          if (isLast) {
            return (
              <Link href={item.href} key={handleGenerateKey()}>
                {item.label}
              </Link>
            );
          }

          return [
            <Link href={item.href} key={handleGenerateKey()}>
              {item.label}
            </Link>,
            <VerticalDivider key={handleGenerateKey()} />,
          ];
        })}
    </section>
  );
}
