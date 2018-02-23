import {getResource} from './getResource';

export function getBerry (id) {
    return new Promise(function(resolve, reject) {
        getResource("berry/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getBerryFirmness (id) {
    return new Promise(function(resolve, reject) {
        getResource("berry-firmness/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getBerryFlavor (id) {
    return new Promise(function(resolve, reject) {
        getResource("berry-flavor/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
