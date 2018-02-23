var PokeApi = PokeApi || {};

PokeApi.getEvolutionChain = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("evolution-chain/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getEvolutionTrigger = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("evolution-trigger/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
