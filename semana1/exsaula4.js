/**
 * Comece seu exercício aqui! :D
 */

// EXERCÍCIOS INTERPRETAÇÃO DE CÓDIGO //

// Exercício 1 //

// let sum = 0
// for(let i = 0;/**condição de início**/ i < 11; /**condição de parada**/i++ /**incremento**/) {
//   sum += i // enquanto i < 11, somar sum com i, atualizando o valor de sum, com o i aumentando de um em um 
// }
// console.log(sum) //imprimir o resultado da soma, 55



// Exercício 2 //
//a. O comando push adiciona um novo item do array em um array já existente.
//.b Todos os números múltiplos de 5 serão colocados no novo array -> novaLista = [10, 15, 20, 25, 30]
//c. se numero = 3, seria impresso um array com itens que seriam os múltiplos de 3 -> [12, 15, 18, 27, 30]
//se numero = 4, um array com todos os múltiplos de 4 -> [12, 20]

// EXERCÍCIOS ESCRITA DE CÓDIGO //

// Exercício 4 //
//a. 

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = arrayOriginal[0]
// let menor = arrayOriginal[0]

// for (let el of arrayOriginal) {
//   if (maior < el) {
//     maior = el
//   }
// }

// for (let el of arrayOriginal) {
//   if (menor > el) {
//     menor = el
//   }
// }

// console.log("O maior número é "+ maior + " e o menor número é", menor)

//b.
// let divPorDez = []

// for (let el of arrayOriginal) {
//   divPorDez.push(el/10)
  
// }
// console.log(divPorDez)

//c. 
// let impares = []

// for (let el of arrayOriginal) {
//   if (el % 2 !== 0) {
//     impares.push(el)
//   }
// }
// console.log(impares)

//d.
// for(let index = 0; index < arrayOriginal.length; index++)
// {
//     console.log("O elemento do índex "+ index + " é "+ arrayOriginal[index])
// }

// DESAFIOS //

// EXERCÍCIOS INTERPRETAÇÃO DE CÓDIGO //

// Exercício 3 //

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: ")) //pede p/o usuário digitar um numero 

let quantidadeAtual = 0 //variavel começa em 0

while(quantidadeAtual < quantidadeTotal){ //enquanto atual < total (a que o usuário digitou), ou seja, avalia por quanto tempo nosso bloco vai rodar até parar
  console.log("while")
  let linha = "" // variavel com valor string vazio?

  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){ //um while loop escrito de forma mais simples, portanto, enquanto asteriscos for < atual+1, rode a linha abaixo e depois incremente de um em um na variavel asteriscos 
    console.log("for let")
    linha += "0" //
  }
  console.log(linha) 
  quantidadeAtual++
  console.log("while depois do for let")
}
