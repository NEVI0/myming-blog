import { User, UserAbstract } from '@domain/entities';
import { UserRepositoryAbstract } from '@domain/repositories';
import { DatabaseProviderAbstract } from '@domain/providers';

const USER_COLLECTION_NAME = 'users';

export default class UserRepository implements UserRepositoryAbstract {
  constructor(private readonly databaseProvider: DatabaseProviderAbstract) {}

  public findById: UserRepositoryAbstract['findById'] = async (id) => {
    const user = await this.databaseProvider.findReference<UserAbstract>(
      USER_COLLECTION_NAME,
      id
    );

    if (!user) return null;
    return new User({ ...user, id });
  };
}
