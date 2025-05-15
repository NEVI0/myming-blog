export default interface CreatePostDTO {
  title: string;
  subtitle?: string;
  content: string;
  note?: string;
  isPublic: boolean;
}
