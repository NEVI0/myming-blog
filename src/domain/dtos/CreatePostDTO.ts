import { AuthorAbstract } from '@domain/entities';

export default interface CreatePostDTO {
  title: string;
  subtitle?: string;
  content: string;
  note?: string;
  author: AuthorAbstract;
}
