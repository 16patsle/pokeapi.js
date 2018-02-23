var PokeApi = PokeApi || {};
PokeApi.apiUrl = "https://pokeapi.co/api/";
PokeApi.apiVersion = "v2";

PokeApi.getResource = function (resource, options) {
    resource = resource.split('/')
    resource[1] = resource[1].replace('undefined','')
    resource = resource.join('/')

    return new Promise(function(resolve, reject) {
        PokeApi.cachedFetch(PokeApi.apiUrl + PokeApi.apiVersion + "/" + resource, options).then(function(response) {
            // handle HTTP response
            if(response.ok){
                response.json().then(function(responseJson){resolve(responseJson)});
            } else{
                reject(response.status + " " + response.statusText)
            }

        }, function(error) {
            // handle network error
            reject(error.message);
        })
    })
}

PokeApi.getResourceFromUrl = function (url) {
  if(url.indexOf(PokeApi.apiUrl) !== -1 && url.indexOf(PokeApi.apiVersion) !== -1){
    return PokeApi.getResource(url.split('/').slice(5,7).join('/'))
  }
}
