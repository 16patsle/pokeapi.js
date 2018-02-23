import {getResource} from './getResource';

export function getMachine (id) {
    return new Promise(function(resolve, reject) {
        getResource("machine/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
