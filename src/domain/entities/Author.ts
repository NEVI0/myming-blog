export interface AuthorAbstract {
  id: string;
  name: string;
}

interface AuthorProps {
  id: string;
  name: string;
}

export default class Author implements AuthorAbstract {
  public id: AuthorAbstract['id'];
  public name: AuthorAbstract['name'];

  constructor(author: AuthorProps) {
    this.id = author.id;
    this.name = author.name;
  }
}
