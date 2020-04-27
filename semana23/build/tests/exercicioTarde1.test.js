"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicioTarde1_1 = require("../src/aula84/exercicioTarde1");
describe("Testing checkOneEdit function", () => {
    it("Check if strings 'banana' and 'bananak' return true", () => {
        expect(exercicioTarde1_1.checkOneEdit("banana", "bananak")).toEqual(true);
    });
    it("Check if strings 'banana' and 'banan' return true", () => {
        expect(exercicioTarde1_1.checkOneEdit("banana", "banan")).toEqual(true);
    });
    it("Check if strings 'banana' and 'banana' return true", () => {
        expect(exercicioTarde1_1.checkOneEdit("banana", "banana")).toEqual(true);
    });
    it("Check if strings 'banana' and 'bcdefg' return false", () => {
        expect(exercicioTarde1_1.checkOneEdit("banana", "bcdefg")).toEqual(false);
    });
    it("Check if strings 'banana' and 'blueberry' return false", () => {
        expect(exercicioTarde1_1.checkOneEdit("banana", "blueberry")).toEqual(false);
    });
});
