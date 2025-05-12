import 'server-only';

import { PostAbstract } from '@domain/entities';

export default interface PostRepositoryAbstract {
  findAll(): Promise<PostAbstract[]>;
  findById(id: string): Promise<PostAbstract | null>;

  create(post: PostAbstract): Promise<PostAbstract>;
  // update(post: PostAbstract): Promise<PostAbstract>;
  // delete(post: PostAbstract): Promise<void>;
}
