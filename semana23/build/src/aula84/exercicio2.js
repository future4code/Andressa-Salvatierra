"use strict";
/**
 *
 * Escreva uma função (em Typescript) que receba duas strings e
 * determine se uma é anagrama da outra
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAnagram = (s1, s2) => {
    if (s1.length !== s2.length) {
        return false;
    }
    const hashTableForS1 = {};
    const hashTableForS2 = {};
    for (let i = 0; i < s1.length; i++) {
        const charS1 = s1[i];
        if (hashTableForS1[charS1]) {
            hashTableForS1[charS1]++;
        }
        else {
            hashTableForS1[charS1] = 1;
        }
        const charS2 = s2[i];
        if (hashTableForS2[charS2]) {
            hashTableForS2[charS2]++;
        }
        else {
            hashTableForS2[charS2] = 1;
        }
    }
    for (let key in hashTableForS1) {
        if (hashTableForS1[key] !== hashTableForS2[key]) {
            return false;
        }
    }
    return true;
};
// "aabbbbbbccc" "a2b6c3"
// "terremoto" "t1e1r2m1o1t1o1"
