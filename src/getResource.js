import cachedFetch from './cachedFetch';

export let apiUrl = "https://pokeapi.co/api/";
export let apiVersion = "v2";

export function getResource (resource, options) {
    resource = resource.split('/')
    resource[1] = resource[1].replace('undefined','')
    resource = resource.join('/')

    return new Promise(function(resolve, reject) {
        cachedFetch(apiUrl + apiVersion + "/" + resource, options).then(function(response) {
            // handle HTTP response
            if(response.ok){
                response.json().then(function(responseJson){resolve(responseJson)});
            } else{
                reject(response.status + " " + response.statusText)
            }

        }, function(error) {
            // handle network error
            reject(error);
        })
    })
}

export function getResourceFromUrl (url, options) {
  if(url.indexOf(apiUrl) !== -1 && url.indexOf(apiVersion) !== -1){
    return getResource(url.split('/').slice(5,7).join('/'), options)
  }
}
