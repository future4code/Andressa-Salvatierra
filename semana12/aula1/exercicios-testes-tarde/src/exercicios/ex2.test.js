import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  
  it("Checa se parâmetro é uma string", () => {
    let frase = 200
    let result = checaPalindromo(frase);
    expect(result).toBe("Insira uma palavra/frase")
    
  });


});
