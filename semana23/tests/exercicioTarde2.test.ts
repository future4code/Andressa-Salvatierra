import { compressString } from "../src/aula84/exercicioTarde2"

describe("Testing compressString function ", () => {
    it("Check if input 'aabb' returns a2b2", () => {
        expect(compressString("aabb")).toEqual("a2b2")
    })
})