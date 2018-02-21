var PokeApi = PokeApi || {};

PokeApi.getMachine = function getMachine(id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("machine/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
