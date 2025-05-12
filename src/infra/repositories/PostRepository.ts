import 'server-only';

import { PostAbstract } from '@domain/entities';
import { PostRepositoryAbstract } from '@domain/repositories';
import { DatabaseProviderAbstract } from '@domain/providers';

const POST_COLLECTION_NAME = 'posts';

export default class PostRepository implements PostRepositoryAbstract {
  constructor(private readonly databaseProvider: DatabaseProviderAbstract) {}

  public findAll: PostRepositoryAbstract['findAll'] = async () => {
    return this.databaseProvider.findAll<PostAbstract[]>(POST_COLLECTION_NAME);
  };

  public findById: PostRepositoryAbstract['findById'] = async (id) => {
    return this.databaseProvider.findById<PostAbstract>(
      POST_COLLECTION_NAME,
      id
    );
  };

  public create: PostRepositoryAbstract['create'] = async (post) => {
    return this.databaseProvider.create<PostAbstract>(
      POST_COLLECTION_NAME,
      post.toJson()
    );
  };
}
