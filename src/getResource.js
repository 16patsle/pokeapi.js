var apiGlobals = {
    apiUrl:"http://pokeapi.co/api/",
    apiVersion: "v2",
}

function getResource(resource) {
    return new Promise(function(resolve, reject){
        fetch(apiGlobals.apiUrl + apiGlobals.apiVersion + "/" + resource).then(function(response) {
            // handle HTTP response
            if(response.ok){
                response.json().then(function(responseJson){resolve(responseJson)});
            } else{
                reject(response.status + " " + response.statusText)
            }
           
        }, function(error) {
            // handle network error
            reject(error.message);
        })
    })
}