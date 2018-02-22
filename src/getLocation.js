var PokeApi = PokeApi || {};

PokeApi.getLocation = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("location/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getLocationArea = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("location-area/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getPalParkArea = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("pal-park-area/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getRegion = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("region/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
