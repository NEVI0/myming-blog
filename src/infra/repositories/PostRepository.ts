import 'server-only';

import { Post, PostAbstract } from '@domain/entities';
import { PostRepositoryAbstract } from '@domain/repositories';
import { DatabaseProviderAbstract } from '@domain/providers';

const POST_COLLECTION_NAME = 'posts';

export default class PostRepository implements PostRepositoryAbstract {
  constructor(private readonly databaseProvider: DatabaseProviderAbstract) {}

  public findAll: PostRepositoryAbstract['findAll'] = async () => {
    const posts = await this.databaseProvider.find<PostAbstract>(
      POST_COLLECTION_NAME
    );

    if (!posts || posts.length === 0) return [];
    return posts.map((post) => new Post(post));
  };

  public findById: PostRepositoryAbstract['findById'] = async (id) => {
    const posts = await this.databaseProvider.find<PostAbstract>(
      POST_COLLECTION_NAME,
      {
        field: 'id',
        operator: '==',
        value: id,
      }
    );

    if (!posts || posts.length === 0) return null;
    return new Post(posts[0]);
  };

  public create: PostRepositoryAbstract['create'] = async (post) => {
    const createdPost = await this.databaseProvider.create<PostAbstract>(
      POST_COLLECTION_NAME,
      post.toJson()
    );

    return new Post(createdPost);
  };
}
