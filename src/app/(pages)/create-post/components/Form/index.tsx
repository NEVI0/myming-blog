'use client';

import { useState } from 'react';
import { redirect, useRouter } from 'next/navigation';

import { ChevronRight } from 'lucide-react';

import { POST_VALIDATION } from '@domain/entities';
import { createPostAction } from '@app/actions';
import { useToast } from '@app/hooks';

import { Button, Checkbox } from '@app/components/ui';
import {
  PostTitleInput,
  PostSubtitleInput,
  PostContentInput,
  PostAuthorNoteInput,
} from './components';

export default function Form() {
  const router = useRouter();
  const { toast } = useToast();

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
    } catch (error: any) {
      toast.error(error.message || 'Erro ao criar post');
    } finally {
      setIsLoading(false);
      if (redirectPath) redirect(redirectPath);
    }
  }

  const isFormValid =
    title.length > 0 && content.length >= POST_VALIDATION.MIN_CONTENT_LENGTH;

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

      <section>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-4">
            <ChevronRight className="text-primary size-4" />
            <small className="text-sm">
              O título do post pode ter até {POST_VALIDATION.MAX_TITLE_LENGTH}{' '}
              caracteres;
            </small>
          </li>

          <li className="flex items-center gap-4">
            <ChevronRight className="text-primary size-4" />
            <small className="text-sm">
              O subtítulo do post pode ter até{' '}
              {POST_VALIDATION.MAX_SUBTITLE_LENGTH} caracteres;
            </small>
          </li>

          <li className="flex items-center gap-4">
            <ChevronRight className="text-primary size-4" />
            <small className="text-sm">
              O conteúdo do post deve ter pelo menos{' '}
              {POST_VALIDATION.MIN_CONTENT_LENGTH} caracteres;
            </small>
          </li>

          <li className="flex items-center gap-4">
            <ChevronRight className="text-primary size-4" />
            <small className="text-sm">
              A nota de autor pode ter até{' '}
              {POST_VALIDATION.MAX_AUTHOR_NOTE_LENGTH} caracteres;
            </small>
          </li>
        </ul>
      </section>

      <section className="flex flex-col md:flex-row gap-8 md:items-center justify-between">
        <Checkbox
          id="public-post"
          label="Post publico?"
          checked={isPublic}
          onToggle={setIsPublic}
        />

        <div className="flex items-center gap-4 w-full md:w-auto">
          <Button
            type="button"
            variant="default"
            className="w-full md:w-[160px]"
            disabled={isLoading}
            onClick={router.back}
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            className="w-full md:w-[160px]"
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? 'Publicando...' : 'Publicar post'}
          </Button>
        </div>
      </section>
    </form>
  );
}
