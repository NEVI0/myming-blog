import { User } from '@domain/entities';

export default interface UserRepositoryAbstract {
  findById(id: string): Promise<User | null>;
}
