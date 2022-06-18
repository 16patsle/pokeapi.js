import { apiUrl, apiVersion } from './getResource';

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
      cacheKey = 'pokeapi.js:' + url.split('/').slice(5, 7).join('/');
    } else {
      // Use the URL as the cache key to localStorage
      cacheKey = 'pokeapi.js:' + url;
    }

    const cached = localStorage.getItem(cacheKey);
    const whenCached = localStorage.getItem(cacheKey + ':ts');
    if (cached !== null && whenCached !== null) {
      // it was in localStorage! Yay!
      const age = (Date.now() - Number(whenCached)) / 1000;
      if (age < options.expiry) {
        const response = new Response(new Blob([cached]));
        return Promise.resolve(response);
      } else {
        // We need to clean up this old key
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheKey + ':ts');
      }
    }
  }

  const response = await fetch(url, fetchOptions);
  // let's only store in cache if the content-type is
  // JSON or something non-binary
  if (response.status === 200) {
    const ct = response.headers.get('Content-Type');
    if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
      // There is a .json() instead of .text() but
      // we're going to store it in sessionStorage as
      // string anyway.
      // If we don't clone the response, it will be
      // consumed by the time it's returned. This
      // way we're being un-intrusive.
      const content = await response.clone().text();
      localStorage.setItem(cacheKey, content);
      localStorage.setItem(cacheKey + ':ts', String(Date.now()));
    }
  }
  return response;
}
