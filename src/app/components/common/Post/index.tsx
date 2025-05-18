import Link from 'next/link';

import { PostAbstract } from '@domain/entities';
import { limitContentCharacters } from './helpers';

interface PostProps {
  post: Omit<PostAbstract, 'toJson'>;
}

export default function Post({ post }: PostProps) {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="flex flex-col justify-between gap-4 p-6 h-[168px] w-full rounded-3xl overflow-hidden bg-gray-100 hover:bg-gray-200 transition-colors">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-medium">{post.title}</h3>

          <p className="text-sm text-gray-600">
            {limitContentCharacters(post.content)}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <small className="text-sm text-gray-600">
            Por {post.author.name}
          </small>
          <small className="text-sm text-gray-600">
            {post.feedback.likes} curtidas
          </small>
        </div>
      </div>
    </Link>
  );
}
