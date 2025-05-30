import { PostAbstract } from '@domain/entities';

type FeedbackType = 'likes' | 'dislikes';

export default interface GivePostFeedbackDTO {
  postId: PostAbstract['id'];
  feedback: FeedbackType;
}
