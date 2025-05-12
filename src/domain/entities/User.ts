export interface UserAbstract {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default class User implements UserAbstract {
  public id: UserAbstract['id'];
  public name: UserAbstract['name'];
  public email: UserAbstract['email'];
  public password: UserAbstract['password'];

  constructor(user: UserProps) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }
}
