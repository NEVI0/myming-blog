import 'server-only';

import { User, UserAbstract } from '@domain/entities';
import { UserRepositoryAbstract } from '@domain/repositories';
import { DatabaseProviderAbstract } from '@domain/providers';

import { FilterQuery } from '@domain/providers/DatabaseProvider';

const USER_COLLECTION_NAME = 'users';
const ACCOUNT_COLLECTION_NAME = 'accounts';
const SESSION_COLLECTION_NAME = 'sessions';

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

  public deleteById: UserRepositoryAbstract['deleteById'] = async (id) => {
    const query: FilterQuery = {
      field: 'userId',
      operator: '==',
      value: id,
    };

    await Promise.all([
      this.databaseProvider.deleteReference(USER_COLLECTION_NAME, id),
      this.databaseProvider
        .delete(ACCOUNT_COLLECTION_NAME)
        .where(query)
        .execute(),
      this.databaseProvider
        .delete(SESSION_COLLECTION_NAME)
        .where(query)
        .execute(),
    ]);
  };
}
