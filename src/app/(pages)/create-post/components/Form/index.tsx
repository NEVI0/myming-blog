'use client';

import { useState } from 'react';

import { Button, Checkbox } from '@app/components/ui';
import {
  PostTitleInput,
  PostSubtitleInput,
  PostContentInput,
  PostAuthorNoteInput,
} from './components';
import { createPostAction } from '@app/actions';

export default function Form() {
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string | null>(null);
  const [content, setContent] = useState<string>('');
  const [note, setNote] = useState<string | null>(null);
  const [isPublic, setIsPublic] = useState<boolean>(true);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await createPostAction({
      title,
      subtitle: subtitle ?? undefined,
      content,
      note: note ?? undefined,
      isPublic,
    });
  }

  return (
    <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
      <section className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <PostTitleInput value={title} onChange={setTitle} />
            <PostSubtitleInput value={subtitle ?? ''} onChange={setSubtitle} />
          </div>

          <PostContentInput value={content} onChange={setContent} />
        </div>

        <div className="flex justify-end">
          <PostAuthorNoteInput value={note ?? ''} onChange={setNote} />
        </div>
      </section>

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

          <Button type="submit" className="w-[160px]">
            Revisar post
          </Button>
        </div>
      </section>
    </form>
  );
}
