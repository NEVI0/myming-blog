'use client';

import { useState, useEffect } from 'react';

import { PostAbstract } from '@domain/entities';
import { fetchPostsAction } from '@app/actions';

import { ANIMATIONS } from '@app/constants/animations';
import { handleErrorMessage } from '@app/helpers';
import { useToast } from '@app/hooks';
import { Post, Section } from '@app/components/common';
import { Animation, Button, SearchBox, Skeleton } from '@app/components/ui';

export default function Content() {
  const { toast } = useToast();

  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Omit<PostAbstract, 'toJson'>[]>([]);

  async function handleFetchPosts(searchParam: string) {
    try {
      setIsLoading(true);
      const data = await fetchPostsAction({ search: searchParam });

      setPosts(data.posts);
    } catch (error) {
      toast.error(
        handleErrorMessage(error, 'Erro ao buscar posts. Tente novamente!')
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleClearFilters() {
    setSearch('');
    handleFetchPosts('');
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleFetchPosts(search);
  }

  useEffect(() => {
    handleFetchPosts('');
  }, []);

  const notFoundPosts = !posts.length && !isLoading;

  return (
    <>
      <section>
        <form className="flex items-center gap-4" onSubmit={handleFormSubmit}>
          <SearchBox
            className="w-full"
            placeholder="Pesquisar post por título, autor ou conteúdo"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <Button type="submit" className="w-[224px]">
            Pesquisar
          </Button>
        </form>
      </section>

      <Section
        title="Posts encontrados"
        actions={
          <button
            className="h-full text-right font-medium text-primary cursor-pointer"
            onClick={handleClearFilters}
          >
            Limpar filtros
          </button>
        }
      >
        {isLoading ? (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-[168px] w-full rounded-3xl" />
            ))}
          </div>
        ) : notFoundPosts ? (
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
                Nenhum post encontrado... tente filtrar por um título ou autor.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
