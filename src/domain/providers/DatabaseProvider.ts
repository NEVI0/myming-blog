import 'server-only';

type FindQueryOperator =
  | '=='
  | '!='
  | '>'
  | '>='
  | '<'
  | '<='
  | 'array-contains'
  | 'array-contains-any'
  | 'in'
  | 'not-in';

export interface FindQuery {
  field: string;
  operator: FindQueryOperator;
  value: string | number | boolean;
}

export default interface DatabaseProviderAbstract {
  find<T>(
    collection: string,
    query?: FindQuery | FindQuery[]
  ): {
    data(): Promise<T[] | null>;
    paginated(
      limit?: number,
      page?: number
    ): Promise<{
      data: T[] | null;
      page: number;
    }>;
  };

  findReference<T>(collection: string, referenceId: string): Promise<T | null>;

  create<T>(collection: string, data: object): Promise<T>;

  deleteOne(collection: string, query: FindQuery): Promise<void>;
  deleteMany(collection: string, query: FindQuery): Promise<void>;

  deleteByReference(collection: string, referenceId: string): Promise<void>;
}
