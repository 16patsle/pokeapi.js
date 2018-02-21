var PokeApi = PokeApi || {};

PokeApi.getEncounterMethod = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("encounter-method/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getEncounterCondition = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("encounter-condition/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getEncounterConditionValue = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("encounter-condition-value/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
