export interface UserAbstract {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image: string;

  toJson(): Omit<UserAbstract, 'toJson'>;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image: string;
}

export default class User implements UserAbstract {
  public id: UserAbstract['id'];
  public name: UserAbstract['name'];
  public email: UserAbstract['email'];
  public emailVerified: UserAbstract['emailVerified'];
  public image: UserAbstract['image'];

  constructor(user: UserProps) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.image = user.image;
  }

  public toJson: UserAbstract['toJson'] = () => {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      emailVerified: this.emailVerified,
      image: this.image,
    };
  };
}
