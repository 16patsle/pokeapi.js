import {getResource} from './getResource';

export function getItem (id) {
    return new Promise(function(resolve, reject) {
        getResource("item/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getItemAttribute (id) {
    return new Promise(function(resolve, reject) {
        getResource("item-attribute/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getItemCategory (id) {
    return new Promise(function(resolve, reject) {
        getResource("item-category/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getItemFlingEffect (id) {
    return new Promise(function(resolve, reject) {
        getResource("item-fling-effect/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getItemPocket (id) {
    return new Promise(function(resolve, reject) {
        getResource("item-pocket/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
