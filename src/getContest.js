var PokeApi = PokeApi || {};

PokeApi.getContestType = function getContestType(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("contest-type/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getContestEffect = function getContestEffect(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("contest-effect/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getSuperContestEffect = function getSuperContestEffect(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("super-contest-effect/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}