import { PostAbstract } from '@domain/entities';

export default interface UpdatePostDTO {
  post: Omit<PostAbstract, 'toJson'>;
}
