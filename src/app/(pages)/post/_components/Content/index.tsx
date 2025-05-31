import { PostAbstract } from '@domain/entities';
import Link from 'next/link';

interface ContentProps {
  post: Omit<PostAbstract, 'toJson'>;
}

export default function Content({ post }: ContentProps) {
  function handleFormatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  function handleFormatTime(date: string) {
    return new Date(date).toLocaleTimeString();
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <h2 className="text-xl font-bold text-gray-600">{post.subtitle}</h2>
      </div>

      <div className="flex flex-col gap-4 w-full h-fit">
        <p className="w-full">{post.content}</p>
      </div>

      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center justify-between">
        <Link href={`/account/${post.author.id}`}>
          <div className="flex flex-col">
            <p className="text-sm text-gray-600 text-center md:text-left">
              Por {post.author.name}
            </p>

            <small className="text-xs text-gray-600 text-center md:text-left">
              Em {handleFormatDate(post.createdAt)} às{' '}
              {handleFormatTime(post.createdAt)}
            </small>
          </div>
        </Link>

        {!!post.note && (
          <div className="flex items-center justify-center md:justify-end gap-4">
            <i className="bx bxs-quote-alt-left text-xl text-gray-400"></i>
            <span className="italic text-gray-600">{post.note}</span>
            <i className="bx bxs-quote-alt-right text-xl text-gray-400"></i>
          </div>
        )}
      </div>
    </section>
  );
}
