import 'server-only';

import { Post, PostAbstract } from '@domain/entities';
import { PostRepositoryAbstract } from '@domain/repositories';
import { DatabaseProviderAbstract } from '@domain/providers';

import { FindQuery } from '@domain/providers/DatabaseProvider';
import { FindAllFilters } from '@domain/repositories/PostRepository';

const POST_COLLECTION_NAME = 'posts';

export default class PostRepository implements PostRepositoryAbstract {
  constructor(private readonly databaseProvider: DatabaseProviderAbstract) {}

  public findAll: PostRepositoryAbstract['findAll'] = async (filters) => {
    const query = this.buildQueryParams(filters);

    const posts = await this.databaseProvider
      .find<PostAbstract>(POST_COLLECTION_NAME, query)
      .data();

    if (!posts || posts.length === 0) return [];
    return posts.map((post) => new Post(post));
  };

  public findById: PostRepositoryAbstract['findById'] = async (id) => {
    const query: FindQuery = {
      field: 'id',
      operator: '==',
      value: id,
    };

    const posts = await this.databaseProvider
      .find<PostAbstract>(POST_COLLECTION_NAME, query)
      .data();

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

  public deleteById: PostRepositoryAbstract['deleteById'] = async (id) => {
    await this.databaseProvider.deleteOne(POST_COLLECTION_NAME, {
      field: 'id',
      operator: '==',
      value: id,
    });
  };

  public deleteByAuthorId: PostRepositoryAbstract['deleteByAuthorId'] = async (
    id
  ) => {
    await this.databaseProvider.deleteMany(POST_COLLECTION_NAME, {
      field: 'author.id',
      operator: '==',
      value: id,
    });
  };

  private buildQueryParams(filters: FindAllFilters) {
    let query: FindQuery[] = [];

    if (filters.search) {
      query.push(
        {
          field: 'title',
          operator: '>=',
          value: filters.search,
        },
        {
          field: 'author.name',
          operator: '>=',
          value: filters.search,
        }
      );
    }
    if (filters.public) {
      query.push({
        field: 'public',
        operator: '==',
        value: filters.public,
      });
    }
    if (filters.author) {
      query.push({
        field: 'author.id',
        operator: '==',
        value: filters.author.id,
      });
    }

    return query;
  }
}
