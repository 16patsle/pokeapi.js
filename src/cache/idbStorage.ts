import { openDB, type IDBPDatabase, type DBSchema } from 'idb';

interface CacheDBSchema extends DBSchema {
  cachedResources: {
    key: string;
    value: {
      cacheKey: string;
      whenCached: number;
      data: string;
    };
    indexes: {
      whenCached: number;
    };
  };
}

export async function getDB() {
  const db = await openDB<CacheDBSchema>('pokeapi.js', 1, {
    async upgrade(db) {
      const objectStore = db.createObjectStore('cachedResources', {
        keyPath: 'cacheKey',
      });

      objectStore.createIndex('whenCached', 'whenCached', {
        unique: false,
      });

      await objectStore.transaction.done;
    },
  });
  return db;
}

export async function get(db: IDBPDatabase<CacheDBSchema>, cacheKey: string) {
  const tx = db.transaction('cachedResources', 'readonly');
  const store = tx.store;
  return store.get(cacheKey);
}

export async function put(
  db: IDBPDatabase<CacheDBSchema>,
  cacheKey: string,
  data: string
) {
  const tx = db.transaction('cachedResources', 'readwrite');
  const store = tx.store;
  const whenCached = Date.now();
  return store.put({
    cacheKey,
    whenCached,
    data,
  });
}

export async function deleteKey(
  db: IDBPDatabase<CacheDBSchema>,
  cacheKey: string
) {
  const tx = db.transaction('cachedResources', 'readwrite');
  const store = tx.store;
  return store.delete(cacheKey);
}
