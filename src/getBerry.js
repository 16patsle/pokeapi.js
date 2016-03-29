var PokeApi = PokeApi || {};

PokeApi.getBerry = function getBerry(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("berry/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getBerryFirmness = function getBerryFirmness(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("berry-firmness/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getBerryFlavor = function getBerryFlavor(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("berry-flavor/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}