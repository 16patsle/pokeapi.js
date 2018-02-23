var PokeApi = PokeApi || {};

PokeApi.getItem = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("item/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getItemAttribute = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("item-attribute/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getItemCategory = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("item-category/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getItemFlingEffect = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("item-fling-effect/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getItemPocket = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("item-pocket/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
