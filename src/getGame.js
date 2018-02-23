var PokeApi = PokeApi || {};

PokeApi.getGeneration = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("generation/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getPokedex = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("pokedex/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getVersion = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("version/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getVersionGroup = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("version-group/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
