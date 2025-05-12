import 'server-only';

export default interface DatabaseProviderAbstract {
  findAll<T>(collection: string): Promise<T>;
  findById<T>(collection: string, id: string): Promise<T | null>;

  create<T>(collection: string, data: object): Promise<T>;
}
