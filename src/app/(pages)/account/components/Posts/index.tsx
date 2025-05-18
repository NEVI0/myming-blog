import Link from 'next/link';
import { Plus } from 'lucide-react';

import { useAuth } from '@configs/auth';

import { fetchPostsByAuthorAction } from '@app/actions';

import { UserAbstract } from '@domain/entities';
import { Post, Section } from '@app/components/common';
import { Animation, Button } from '@app/components/ui';
import { ANIMATIONS } from '@app/constants/animations';

interface PostsProps {
  user: Omit<UserAbstract, 'toJson'>;
}

export default async function Posts({ user }: PostsProps) {
  const session = await useAuth();

  const { posts } = await fetchPostsByAuthorAction({
    author: {
      id: user.id,
    },
  });

  const isOwner = session?.user?.id === user.id;

  if (posts.length === 0) {
    return (
      <Section title="Puplicações">
        <div className="flex flex-col items-center justify-center gap-8">
          <Animation
            animation={ANIMATIONS.NOT_FOUND}
            height={200}
            width={200}
            loop={false}
          />

          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-center text-2xl font-bold">Nada aqui...</h2>

            <p className="text-center text-gray-600 w-[80%]">
              {isOwner
                ? 'Parece que você não publicou nada ainda. Clique no botão abaixo para criar um novo post.'
                : 'Parece que este usuário não publicou nada ainda.'}
            </p>
          </div>

          {isOwner && (
            <Link href="/create-post">
              <Button>Criar novo post</Button>
            </Link>
          )}
        </div>
      </Section>
    );
  }

  return (
    <Section title="Puplicações">
      <div className="grid  gap-4 grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}

        {isOwner && (
          <Link href="/create-post">
            <div className="flex items-center justify-center gap-4 h-[168px] w-full border border-dashed border-gray-300 hover:border-primary transition-colors rounded-3xl text-primary font-medium">
              Adicionar novo post <Plus />
            </div>
          </Link>
        )}
      </div>
    </Section>
  );
}
