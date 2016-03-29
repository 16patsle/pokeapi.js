var PokeApi = PokeApi || {};

PokeApi.getGeneration = function getGeneration(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("generation/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getPokedex = function getPokedex(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("pokedex/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getVersion = function getVersion(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("version/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getVersionGroup = function getVersionGroup(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("version-group/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}