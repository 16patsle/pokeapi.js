import { apiUrl, apiVersion } from './getResource';
import type { CacheImplementation } from './cache/CacheImplementation';

export type CachedFetchOptions = {
  expiry?: number;
  cache?: boolean | 'idb' | 'memory';
};

const getCacheImplementation = async (
  cache: true | 'idb' | 'memory'
): Promise<CacheImplementation> => {
  return cache !== 'memory'
    ? ((await import('./cache/idbStorage')) as unknown as CacheImplementation)
    : await import('./cache/memoryStorage');
};

// Based on:
// https://codepen.io/SitePoint/pen/KrYrXA?editors=0012
export default async function cachedFetch(
  url: string,
  options: CachedFetchOptions = {},
  fetchOptions?: RequestInit
) {
  if (typeof options.expiry !== 'number') {
    // I hope you didn't set it to 0 seconds
    options.expiry = 24 * 60 * 60; // 24h default
  }
  if (options.cache === undefined) {
    options.cache = true;
  }
  if (!('indexedDB' in globalThis) && options.cache !== false) {
    options.cache = false;
  }

  const newUrl = new URL(url);
  if (newUrl.pathname.slice(-1) != '/') newUrl.pathname += '/';
  url = newUrl.toString();

  let cacheKey = '';

  if (options.cache) {
    if (url.indexOf(apiUrl) !== -1 && url.indexOf(apiVersion) !== -1) {
      // Use shorthand of URL as key
      cacheKey = url.split('/').slice(5, 7).join('/');
    } else {
      // Use the URL as the cache key in the DB
      cacheKey = url;
    }

    const cacheStorage = await getCacheImplementation(options.cache);
    const db = await cacheStorage.getDB();
    const cachedObject = await cacheStorage.get(db, cacheKey);
    const cached = cachedObject?.data ?? null;
    const whenCached = cachedObject?.whenCached ?? null;
    if (cached !== null && whenCached !== null) {
      // it was in the DB! Yay!
      const age = (Date.now() - Number(whenCached)) / 1000;
      if (age < options.expiry) {
        const response = new Response(new Blob([cached]));
        db.close();
        return response;
      } else {
        // We need to clean up this old key
        await cacheStorage.deleteKey(db, cacheKey);
      }
    }
    db.close();
  }

  const response = await fetch(url, fetchOptions);
  // let's only store in cache if the content-type is
  // JSON or something non-binary
  if (response.status === 200) {
    const ct = response.headers.get('Content-Type');
    if (
      options.cache &&
      ct &&
      (ct.match(/application\/json/i) || ct.match(/text\//i))
    ) {
      // There is a .json() instead of .text() but
      // we're going to store it in the DB as
      // string anyway.
      // If we don't clone the response, it will be
      // consumed by the time it's returned. This
      // way we're being un-intrusive.
      const content = await response.clone().text();
      const cacheStorage = await getCacheImplementation(options.cache);
      const db = await cacheStorage.getDB();
      cacheStorage.put(db, cacheKey, content);
      db.close();
    }
  }
  return response;
}
