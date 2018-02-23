import {getResource} from './getResource';

export function getMove (id) {
    return new Promise(function(resolve, reject) {
        getResource("move/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getMoveAilment (id) {
    return new Promise(function(resolve, reject) {
        getResource("move-ailment/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getMoveBattleStyle (id) {
    return new Promise(function(resolve, reject) {
        getResource("move-battle-style/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getMoveCategory (id) {
    return new Promise(function(resolve, reject) {
        getResource("move-category/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getMoveDamageClass (id) {
    return new Promise(function(resolve, reject) {
        getResource("move-damage-class/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getMoveLearnMethod (id) {
    return new Promise(function(resolve, reject) {
        getResource("move-learn-method/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getMoveTarget (id) {
    return new Promise(function(resolve, reject) {
        getResource("move-target/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
