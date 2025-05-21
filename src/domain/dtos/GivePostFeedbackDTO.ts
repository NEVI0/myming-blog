import { PostAbstract } from '@domain/entities';

type FeedbackType = 'likes' | 'dislikes';

export default interface GivePostFeedbackDTO {
  post: Omit<PostAbstract, 'toJson'>;
  feedback: FeedbackType;
}
