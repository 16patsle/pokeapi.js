var PokeApi = PokeApi || {};
PokeApi.apiUrl = "https://pokeapi.co/api/";
PokeApi.apiVersion = "v2";

PokeApi.getResource = function getResource(resource) {
    return new Promise(function(resolve, reject) {
        fetch(PokeApi.apiUrl + PokeApi.apiVersion + "/" + resource).then(function(response) {
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

PokeApi.getBerry = function getBerry(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("berry/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}