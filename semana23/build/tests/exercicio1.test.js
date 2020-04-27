"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio1_1 = require("../src/aula84/exercicio1");
describe("Testing checkPalindrome function", () => {
    it("Should return true for o input 'bob'", () => {
        const result = exercicio1_1.checkPalindrome("bob");
        expect(result).toEqual(true);
    });
    it("Should return true for input 'Bob'", () => {
        const result = exercicio1_1.checkPalindrome("Bob");
        expect(result).toEqual(true);
    });
    it("Should return true for input 'A dama admirou o rim da amada'", () => {
        expect(exercicio1_1.checkPalindrome("A dama admirou o rim da amada")).toEqual(true);
    });
    it("Should return false for input 'Goli'", () => {
        expect(exercicio1_1.checkPalindrome("Goli")).toEqual(false);
        expect("Teste").toEqual("Teste");
        expect("Teste").toBe("Teste");
        // REFERENCIA
        const obj = { name: "Goli" };
        expect(obj).toBe(obj);
        expect({ name: "Goli" }).toEqual({ name: "Goli" });
    });
});
