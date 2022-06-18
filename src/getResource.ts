import cachedFetch, { type CachedFetchOptions } from './cachedFetch';

export let apiUrl = 'https://pokeapi.co/api/';
export let apiVersion = 'v2';

export async function getResource(resource: string, options: CachedFetchOptions) {
  let resourceSplit = resource.split('/');
  resourceSplit[1] = resourceSplit[1].replace('undefined', '');
  resource = resourceSplit.join('/');

  try {
    const response = await cachedFetch(
      apiUrl + apiVersion + '/' + resource,
      options
    );
    // handle HTTP response
    if (response.ok) {
      return await response.json();
    } else {
      throw response.status + ' ' + response.statusText;
    }
  } catch (error) {
    // handle network error
    throw error;
  }
}

export function getResourceFromUrl(url: string, options: CachedFetchOptions) {
  if (url.indexOf(apiUrl) !== -1 && url.indexOf(apiVersion) !== -1) {
    return getResource(url.split('/').slice(5, 7).join('/'), options);
  }
}
