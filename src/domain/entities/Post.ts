import Author, { AuthorAbstract } from './Author';

export interface PostAbstract {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  note?: string;
  isPublic: boolean;
  author: AuthorAbstract;
  createdAt: string;
  updatedAt: string;

  toJson(): Omit<PostAbstract, 'toJson'>;
}

interface PostProps {
  id?: string;
  title: string;
  subtitle?: string;
  content: string;
  note?: string;
  isPublic: boolean;
  author: {
    id: string;
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export default class Post implements PostAbstract {
  public id: PostAbstract['id'];
  public title: PostAbstract['title'];
  public subtitle: PostAbstract['subtitle'];
  public content: PostAbstract['content'];
  public note: PostAbstract['note'];
  public isPublic: PostAbstract['isPublic'];
  public author: PostAbstract['author'];
  public createdAt: PostAbstract['createdAt'];
  public updatedAt: PostAbstract['updatedAt'];

  constructor({
    id = '',
    title,
    subtitle = '',
    content,
    note = '',
    isPublic = true,
    author,
    createdAt = new Date().toISOString(),
    updatedAt = new Date().toISOString(),
  }: PostProps) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
    this.note = note;
    this.isPublic = isPublic;

    this.author = new Author({
      id: author.id,
      name: author.name,
    });

    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public toJson: PostAbstract['toJson'] = () => {
    return {
      id: this.id,
      title: this.title,
      subtitle: this.subtitle,
      content: this.content,
      note: this.note,
      isPublic: this.isPublic,
      author: {
        id: this.author.id,
        name: this.author.name,
      },
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  };
}
