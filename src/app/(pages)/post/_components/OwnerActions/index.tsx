import Link from 'next/link';

import { PostAbstract } from '@domain/entities';

import { Button } from '@app/components/ui';
import { DeletePostButton } from './components';

interface OwnerActionsProps {
  post: Omit<PostAbstract, 'toJson'>;
}

export default function OwnerActions({ post }: OwnerActionsProps) {
  return (
    <section className="flex items-center justify-end gap-4">
      <Link href={`/post/${post.id}/edit`}>
        <Button variant="default" className="w-[160px]">
          Editar
        </Button>
      </Link>

      <DeletePostButton post={post} />
    </section>
  );
}
