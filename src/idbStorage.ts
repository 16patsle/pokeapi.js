import { openDB, type IDBPDatabase } from 'idb';

export async function getDB() {
  const db = await openDB('pokeapi.js', 1, {
    async upgrade(db) {
      const objectStore = db.createObjectStore('cachedResources', {
        keyPath: 'cacheKey',
      });

      objectStore.createIndex('whenCached', 'whenCached', {
        unique: false,
      });

      await objectStore.transaction.done
    }
  });
  return db;
}

export async function get(db: IDBPDatabase, cacheKey: string) {
  const tx = db.transaction('cachedResources', 'readonly');
  const store = tx.store;
  return store.get(cacheKey);
}

export async function put(db: IDBPDatabase, cacheKey: string, data: any) {
  const tx = db.transaction('cachedResources', 'readwrite');
  const store = tx.store;
  const whenCached = Date.now();
  return store.put({
    cacheKey,
    whenCached,
    data,
  })
}

export async function deleteKey(db: IDBPDatabase, cacheKey: string) {
  const tx = db.transaction('cachedResources', 'readwrite');
  const store = tx.store;
  return store.delete(cacheKey);
}