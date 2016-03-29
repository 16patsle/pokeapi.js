var PokeApi = PokeApi || {};

PokeApi.getEvolutionChain = function getEvolutionChain(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("evolution-chain/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getEvolutionTrigger = function getEvolutionTrigger(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("evolution-trigger/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
