import {getResource} from './getResource';

export function getLanguage (id) {
    return new Promise(function(resolve, reject) {
        getResource("language/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
