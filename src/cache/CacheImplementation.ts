export type DB = {
  close: () => void;
};

export type CacheImplementation = {
  /**
   * Open a database.
   */
  getDB: () => Promise<DB>;
  /**
   * Retrieves the value of the first record matching the key.
   *
   * Resolves with undefined if no match is found.
   */
  get: (
    db: DB,
    key: string
  ) => Promise<
    | {
        cacheKey: string;
        whenCached: number;
        data: string;
      }
    | undefined
  >;
  /**
   * Put an item in the store.
   *
   * Replaces any item with the same key.
   */
  put: (db: DB, key: string, content: string) => Promise<void>;
  /**
   * Deletes records in store matching the given key.
   */
  deleteKey: (db: DB, key: string) => Promise<void>;
};
