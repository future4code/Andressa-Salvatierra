"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicioTarde2_1 = require("../src/aula84/exercicioTarde2");
describe("Testing compressString function ", () => {
    it("Check if input 'aabb' returns a2b2", () => {
        expect(exercicioTarde2_1.compressString("aabb")).toEqual("a2b2");
    });
});
