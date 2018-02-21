var PokeApi = PokeApi || {};

PokeApi.getContestType = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("contest-type/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getContestEffect = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("contest-effect/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getSuperContestEffect = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("super-contest-effect/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
