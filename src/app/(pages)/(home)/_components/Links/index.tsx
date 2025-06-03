import Link from 'next/link';

import { VerticalDivider } from '@app/components/ui';

export default function Links() {
  return (
    <section className="flex gap-4 items-center">
      <Link href="/privacy" className="font-medium text-primary">
        Política de privacidade
      </Link>

      <VerticalDivider />

      <Link href="/terms" className="font-medium text-primary">
        Termos de uso
      </Link>
    </section>
  );
}
