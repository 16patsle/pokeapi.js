var PokeApi = PokeApi || {};

PokeApi.getAbility = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("ability/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getCharacteristic = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("characteristic/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getEggGroup = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("egg-group/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getGender = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("gender/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getGrowthRate = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("growth-rate/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getNature = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("nature/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getPokeathlonStat = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("pokeathlon-stat/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getPokemon = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("pokemon/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getPokemonColor = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("pokemon-color/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getPokemonForm = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("pokemon-form/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getPokemonHabitat = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("pokemon-habitat/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getPokemonShape = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("pokemon-shape/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getPokemonSpecies = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("pokemon-species/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getStat = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("stat/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

PokeApi.getType = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("type/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
