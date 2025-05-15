import { UserAbstract } from './User';

export interface SessionAbstract {
  expires?: string;
  user?: Omit<UserAbstract, 'toJson'>;
}

interface SessionProps {
  expires?: string;
  user?: Omit<UserAbstract, 'toJson'>;
}

export default class Session implements SessionAbstract {
  public expires: SessionAbstract['expires'];
  public user: SessionAbstract['user'];

  constructor(session: SessionProps) {
    this.expires = session.expires;
    this.user = session.user;
  }
}
