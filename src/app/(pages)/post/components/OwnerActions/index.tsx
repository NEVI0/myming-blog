'use client';

import { useState } from 'react';

import { PostAbstract } from '@domain/entities';

import { Button, Checkbox } from '@app/components/ui';
import { DeletePostButton } from './components';

interface OwnerActionsProps {
  post: Omit<PostAbstract, 'toJson'>;
}

export default function OwnerActions({ post }: OwnerActionsProps) {
  const [isPublic, setIsPublic] = useState<boolean>(true);

  return (
    <section className="flex items-center justify-between">
      <Checkbox
        id="public-post"
        label="Post publico?"
        checked={isPublic}
        onToggle={setIsPublic}
      />

      <div className="flex items-center gap-4">
        <Button variant="default" className="w-[160px]">
          Cancelar
        </Button>

        <DeletePostButton post={post} />
      </div>
    </section>
  );
}
