import cachedFetch, { type CachedFetchOptions } from './cachedFetch';

export const apiUrl = 'https://pokeapi.co/api/';
export const apiVersion = 'v2';

export async function getResource(
  resource: string,
  options?: CachedFetchOptions
) {
  resource = resource.replace('undefined', '');

  const response = await cachedFetch(
    `${apiUrl}${apiVersion}/${resource}`,
    options
  );
  // handle HTTP response
  if (response.ok) {
    return await response.json();
  } else {
    throw response.status + ' ' + response.statusText;
  }
}

export function getResourceFromUrl(url: string, options: CachedFetchOptions) {
  if (url.indexOf(apiUrl) !== -1 && url.indexOf(apiVersion) !== -1) {
    return getResource(url.split('/').slice(5, 7).join('/'), options);
  }
}
