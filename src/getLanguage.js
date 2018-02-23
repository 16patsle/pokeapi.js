var PokeApi = PokeApi || {};

PokeApi.getLanguage = function (id) {
    return new Promise(function(resolve, reject) {
        PokeApi.getResource("language/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
