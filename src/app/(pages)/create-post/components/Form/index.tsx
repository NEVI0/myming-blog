'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';

import { createPostAction } from '@app/actions';

import { Button, Checkbox } from '@app/components/ui';
import {
  PostTitleInput,
  PostSubtitleInput,
  PostContentInput,
  PostAuthorNoteInput,
} from './components';

export default function Form() {
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string | null>(null);
  const [content, setContent] = useState<string>('');
  const [note, setNote] = useState<string | null>(null);
  const [isPublic, setIsPublic] = useState<boolean>(true);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let redirectPath = '';

    try {
      setIsLoading(true);

      const { post } = await createPostAction({
        title,
        subtitle: subtitle ?? undefined,
        content,
        note: note ?? undefined,
        isPublic,
      });

      if (!post) {
        throw new Error('Erro ao criar post');
      }

      redirectPath = `/post/${post.id}`;
    } catch (error) {
      console.log({ error, message: 'tratamento de erro' });
    } finally {
      setIsLoading(false);
      if (redirectPath) redirect(redirectPath);
    }
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
          <Button variant="default" className="w-[160px]" disabled={isLoading}>
            Cancelar
          </Button>

          <Button type="submit" className="w-[160px]" disabled={isLoading}>
            {isLoading ? 'Publicando...' : 'Publicar post'}
          </Button>
        </div>
      </section>
    </form>
  );
}
