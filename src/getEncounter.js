import {getResource} from './getResource';

export function getEncounterMethod (id) {
    return new Promise(function(resolve, reject) {
        getResource("encounter-method/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getEncounterCondition (id) {
    return new Promise(function(resolve, reject) {
        getResource("encounter-condition/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}

export function getEncounterConditionValue (id) {
    return new Promise(function(resolve, reject) {
        getResource("encounter-condition-value/" + id).then(function(response) {
            resolve(response);
        }).catch(function(error){
            reject(error);
        })
    })
}
