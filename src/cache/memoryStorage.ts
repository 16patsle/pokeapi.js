import type { DB } from './CacheImplementation';

const cache = new Map<
  string,
  {
    cacheKey: string;
    whenCached: number;
    data: string;
  }
>();

export async function getDB(): Promise<DB> {
  return { close() {} };
}

export async function get(db: DB, cacheKey: string) {
  return cache.get(cacheKey);
}

export async function put(db: DB, cacheKey: string, data: string) {
  const whenCached = Date.now();
  cache.set(cacheKey, {
    cacheKey,
    whenCached,
    data,
  });
}

export async function deleteKey(db: DB, cacheKey: string) {
  cache.delete(cacheKey);
}
