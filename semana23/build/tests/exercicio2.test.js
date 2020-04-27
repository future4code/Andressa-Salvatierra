"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio2_1 = require("../src/aula84/exercicio2");
describe("Testing checkAnagram function", () => {
    it("Should return false for inputs 'abc' and 'ab'", () => {
        expect(exercicio2_1.checkAnagram("abc", "ab")).toEqual(false);
    });
    it("Should return true for inputs 'banana' and 'aaabnn'", () => {
        expect(exercicio2_1.checkAnagram("banana", "aaabnn")).toEqual(true);
    });
    it("Should return false for inputs 'banana' and 'banand' ", () => {
        expect(exercicio2_1.checkAnagram("banana", "banand")).toEqual(false);
    });
    it("Should return false for inputs 'banana' and 'cdefgh' ", () => {
        expect(exercicio2_1.checkAnagram("banana", "cdefgh")).toEqual(false);
    });
});
