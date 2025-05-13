'use client';

import { useRouter } from 'next/navigation';

import {
  PostTitleInput,
  PostSubtitleInput,
  PostContentInput,
  PostAuthorNoteInput,
} from '@app/components/common';
import { Button } from '@app/components/ui';
import { createPostAction } from '@app/actions';

export default function Form() {
  const navigation = useRouter();

  return (
    <>
      <section className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <PostTitleInput />
            <PostSubtitleInput />
          </div>

          <PostContentInput />
        </div>

        <div className="flex justify-end">
          <PostAuthorNoteInput />
        </div>
      </section>

      <section className="flex items-center justify-end gap-4">
        <Button variant="default" onClick={() => navigation.back()}>
          Cancelar
        </Button>

        <Button
          onClick={() => {
            createPostAction({
              title: 'Meu titulo',
              content: 'fdfds fdsfsd dfhgfh fa',
              author: {
                id: 'fhjgbdfg',
                name: 'hfjdhjgbfjdhgdf',
              },
            });
          }}
        >
          Revisar post
        </Button>
      </section>
    </>
  );
}
