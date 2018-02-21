var PokeApi = PokeApi || {};

PokeApi.getBerry = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("berry/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getBerryFirmness = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("berry-firmness/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getBerryFlavor = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("berry-flavor/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
