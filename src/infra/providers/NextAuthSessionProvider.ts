import 'server-only';

import { Session } from '@domain/entities';
import { SessionProviderAbstract } from '@domain/providers';

import { useAuth } from '@configs/auth';

export default class NextAuthSessionProvider
  implements SessionProviderAbstract
{
  constructor() {}

  public session: SessionProviderAbstract['session'] = async () => {
    const session = await useAuth();

    if (!session || !session.user) return null;

    return new Session({
      expires: session.expires,
      user: {
        id: session.user.id!,
        name: session.user.name!,
        email: session.user.email!,
        image: session.user.image!,
      },
    });
  };
}
