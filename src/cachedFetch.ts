import { apiUrl, apiVersion } from './getResource';
import * as idbStorage from './idbStorage';

export type CachedFetchOptions = {
  expiry?: number;
  cache?: boolean;
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

    const db = await idbStorage.getDB();
    const cachedObject = await idbStorage.get(db, cacheKey);
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
        await idbStorage.deleteKey(db, cacheKey);
      }
    }
    db.close();
  }

  const response = await fetch(url, fetchOptions);
  // let's only store in cache if the content-type is
  // JSON or something non-binary
  if (response.status === 200) {
    const ct = response.headers.get('Content-Type');
    if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
      // There is a .json() instead of .text() but
      // we're going to store it in the DB as
      // string anyway.
      // If we don't clone the response, it will be
      // consumed by the time it's returned. This
      // way we're being un-intrusive.
      const content = await response.clone().text();
      const db = await idbStorage.getDB();
      idbStorage.put(db, cacheKey, content);
      db.close();
    }
  }
  return response;
}
