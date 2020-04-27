import {checkOneEdit} from "../src/aula84/exercicioTarde1"

describe("Testing checkOneEdit function", () => {
    it("Check if strings 'banana' and 'bananak' return true", () => {
        expect(checkOneEdit("banana", "bananak")).toEqual(true)
    })
    it("Check if strings 'banana' and 'banan' return true", () => {
        expect(checkOneEdit("banana", "banan")).toEqual(true)
    })
    it("Check if strings 'banana' and 'banana' return true", () => {
        expect(checkOneEdit("banana", "banana")).toEqual(true)
    })
    it("Check if strings 'banana' and 'bcdefg' return false", () => {
        expect(checkOneEdit("banana", "bcdefg")).toEqual(false)
    })
    it("Check if strings 'banana' and 'blueberry' return false", () => {
        expect(checkOneEdit("banana", "blueberry")).toEqual(false)
    })
})