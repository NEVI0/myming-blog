import 'server-only';

import { Post, PostAbstract } from '@domain/entities';
import { PostRepositoryAbstract } from '@domain/repositories';
import { DatabaseProviderAbstract } from '@domain/providers';

import { FilterQuery } from '@domain/providers/DatabaseProvider';
import { FindAllFilters } from '@domain/repositories/PostRepository';

const POST_COLLECTION_NAME = 'posts';

export default class PostRepository implements PostRepositoryAbstract {
  constructor(private readonly databaseProvider: DatabaseProviderAbstract) {}

  public findAll: PostRepositoryAbstract['findAll'] = async (filters) => {
    const query = this.buildQueryParams(filters);

    const posts = await this.databaseProvider
      .find<PostAbstract[]>(POST_COLLECTION_NAME)
      .where(query)
      .execute();

    if (!posts || posts.length === 0) return [];
    return posts.map((post) => new Post(post));
  };

  public findById: PostRepositoryAbstract['findById'] = async (id) => {
    const query: FilterQuery = {
      field: 'id',
      operator: '==',
      value: id,
    };

    const posts = await this.databaseProvider
      .find<PostAbstract[]>(POST_COLLECTION_NAME)
      .where(query)
      .execute();

    if (!posts.length) return null;
    return new Post(posts[0]);
  };

  public findMostRecents: PostRepositoryAbstract['findMostRecents'] =
    async () => {
      const posts = await this.databaseProvider
        .find<PostAbstract[]>(POST_COLLECTION_NAME)
        .orderBy('createdAt', 'desc')
        .limit(8)
        .execute();

      if (!posts || posts.length === 0) return [];
      return posts.map((post) => new Post(post));
    };

  public create: PostRepositoryAbstract['create'] = async (post) => {
    const createdPost = await this.databaseProvider.create<PostAbstract>(
      POST_COLLECTION_NAME,
      post.toJson()
    );

    return new Post(createdPost);
  };

  public update: PostRepositoryAbstract['update'] = async (post) => {
    const posts = await this.databaseProvider
      .update<PostAbstract[]>(POST_COLLECTION_NAME, post.toJson())
      .where({
        field: 'id',
        operator: '==',
        value: post.id,
      })
      .execute();

    return new Post(posts[0]);
  };

  public deleteById: PostRepositoryAbstract['deleteById'] = async (id) => {
    await this.databaseProvider
      .delete(POST_COLLECTION_NAME)
      .where({
        field: 'id',
        operator: '==',
        value: id,
      })
      .limit(1)
      .execute();
  };

  public deleteByAuthorId: PostRepositoryAbstract['deleteByAuthorId'] = async (
    id
  ) => {
    await this.databaseProvider
      .delete(POST_COLLECTION_NAME)
      .where({
        field: 'author.id',
        operator: '==',
        value: id,
      })
      .execute();
  };

  private buildQueryParams(filters: FindAllFilters) {
    let query: FilterQuery[] = [];

    if (filters.search) {
      query.push({
        field: 'title',
        operator: '==',
        value: filters.search,
      });
    }
    if (filters.public) {
      query.push({
        field: 'isPublic',
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

    if (query.length === 1) return query[0];
    return query;
  }
}
