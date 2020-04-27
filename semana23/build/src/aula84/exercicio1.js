"use strict";
/**
 *
 * Escreva uma função que receba uma string e determine se ela é um
 * palíndromo
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPalindrome = (input) => {
    const precomputedInput = input.replace(/ /g, "");
    let reversedString = "";
    for (let i = precomputedInput.length - 1; i >= 0; i--) {
        reversedString += precomputedInput[i];
    }
    return reversedString.toLowerCase() === precomputedInput.toLowerCase();
};
