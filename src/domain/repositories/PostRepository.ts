import 'server-only';

import { PostAbstract } from '@domain/entities';

export interface FindAllFilters {
  search?: string;
  author?: {
    id: string;
  };
}

export default interface PostRepositoryAbstract {
  findAll(filters: FindAllFilters): Promise<PostAbstract[]>;
  findById(id: string): Promise<PostAbstract | null>;

  create(post: PostAbstract): Promise<PostAbstract>;
  // update(post: PostAbstract): Promise<PostAbstract>;
  // delete(post: PostAbstract): Promise<void>;
}
