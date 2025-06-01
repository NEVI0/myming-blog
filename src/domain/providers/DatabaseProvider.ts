import 'server-only';

export type OrderByDirection = 'asc' | 'desc';

export type FilterQueryOperator =
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

export interface FilterQuery {
  field: string;
  operator: FilterQueryOperator;
  value: string | number | boolean;
}

interface FilterSubMethods<T> {
  limit(limit: number): {
    execute: () => Promise<T>;
  };

  orderBy(
    field: string,
    direction?: OrderByDirection
  ): {
    limit: (limit: number) => {
      execute: () => Promise<T>;
    };
    execute: () => Promise<T>;
  };

  where(query: FilterQuery | FilterQuery[]): {
    limit: (limit: number) => {
      execute: () => Promise<T>;
    };
    orderBy: (
      field: string,
      direction?: OrderByDirection
    ) => {
      limit: (limit: number) => {
        execute: () => Promise<T>;
      };
      execute: () => Promise<T>;
    };
    execute: () => Promise<T>;
  };
}

interface FindSubMethods<T> extends FilterSubMethods<T> {
  execute(): Promise<T>;
}

interface UpdateSubMethods<T> extends FilterSubMethods<T> {
  execute(data: object): Promise<T>;
}

interface DeleteSubMethods<T> extends FilterSubMethods<T> {
  execute(): Promise<T>;
}

export default interface DatabaseProviderAbstract {
  find<T>(collection: string): FindSubMethods<T>;
  create<T>(collection: string, data: object): Promise<T>;
  update<T>(collection: string, data: object): UpdateSubMethods<T>;
  delete<T>(collection: string): DeleteSubMethods<T>;

  findReference<T>(collection: string, referenceId: string): Promise<T | null>;
  updateByTransaction(
    collection: string,
    query: FilterQuery,
    data: object
  ): Promise<void>;
  deleteReference(collection: string, referenceId: string): Promise<void>;
}
