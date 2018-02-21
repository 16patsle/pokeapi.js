var PokeApi = PokeApi || {};

PokeApi.getMove = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("move/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getMoveAilment = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("move-ailment/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getMoveBattleStyle = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("move-battle-style/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getMoveCategory = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("move-category/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getMoveDamageClass = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("move-damage-class/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getMoveLearnMethod = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("move-learn-method/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getMoveTarget = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("move-target/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
