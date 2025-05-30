import 'server-only';

import { PostAbstract } from '@domain/entities';

export default interface PostFeedbackRepositoryAbstract {
  like(postId: PostAbstract['id']): Promise<void>;
  dislike(postId: PostAbstract['id']): Promise<void>;
}
