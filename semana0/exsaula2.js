// //EXERCICIO 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 //true

// let resultado = bool1 && bool2 && bool3
// console.log("a. ", resultado)
// //Resposta: a. false

// resultado = (bool2 || bool1) && !bool3 //false
// console.log("b. ", resultado)
// //Resposta: b. false

// resultado = !resultado /*true*/ && (bool1 || bool1)
// console.log("c. ", resultado)
// // Resposta: true

// resultado = (resultado /*true*/ && (!bool1 /*false*/ || bool2)) && !bool3 //false
// console.log("d. ", resultado)
// // Resposta: d. false

// console.log("e. ", typeof resultado)
// // Resposta: e. boolean
// //-----------------------------------------------------------------------
// //EXERCICIO 2

// //a. Array é uma lista de valores contidas em uma variável. Os componentes do array podem ser de
// // diferentes tipos de valores. Uma variável é declarada utilizando decladadores, nome da variável
// // e valor da variável. Por exemplo:
// //const nomeDaVariavel = 2 //const -> delcarador; '=' símbolo de atribuição; 2 -> valor numérico
// //let nomeDaVariavel2 = true //let -> declarador; true -> valor booleano

// //b. O index inicial de um array é 0.
// //const array = [1,2,3,4,5]
// //console.log(array[0])

// //c. O tamanho de um array pode ser determinado da seguinte forma:
// //console.log(array.length)

// //d.

// let array
// console.log('I. ', array)
//   //I. undefined

// array = null
// console.log('II. ', array)
//   //II. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('III. ', array.length)
//   //III. 11

// let i = 0
// console.log('IV. ', array[i], " e ", array[i+1])
//   //IV. 3 e 4

// array[i+1] = 19
// const valor = array[i+6]
// console.log('V. ', array[i+1], " e ", valor)
//   //V. 19 e 9

// i+=1
// array[i] = array[i-1]
// console.log('VI. ', array[i])
//   //VI. 3

// i = array.length - 1 //ultimo elemento: 13
// array[i] = array[i-3] //13
// const resultadoC = array[i]%array[1] //sobra 1
// console.log('VII. ', resultadoC)
//   //VII. 1

// //-----------------------------------------------------------------------

// // EXERCICIO 3:
// // formula K -> C
// //  (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273,15
// // formula C -> F
// //  (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

//---

// //a.
// let kelvin = 77
// let grausFarenheit
// let grausCelsius = 80

// grausFarenheit = (kelvin - 273.15)/(5/9) + 32
// console.log(grausFarenheit, 'K')

//---

// //b.
// grausFarenheit = grausCelsius*(9/5) + 32
// console.log(grausFarenheit, "°F")

//---

// //c.
// // grausCelsius = 30
// // grausFarenheit = grausCelsius*(9/5) + 32
// // console.log(grausFarenheit, "°F")
// // grausFarenheit = 86
// // kelvin = (grausFarenheit - 32)*(5/9) + 273.15
// // console.log(kelvin, "K")

//---

//d.

// let grausCelsius
// let grausFarenheit
// let kelvin
// grausCelsius = prompt("Insira o valor que deseja converter para K: ")
// grausCelsius = Number(grausCelsius)
// grausFarenheit = grausCelsius*(9/5) + 32
// kelvin = (grausFarenheit - 32)*(5/9) + 273.15
// console.log(kelvin, "K")

let pergunta;
//pergunta = prompt("1. Qual é seu prato de comida preferido?")
//console.log("Resposta: ", pergunta)

let pergunta2;
//pergunta2 = prompt("2. Qual é a sua música preferida?")
//console.log("Resposta: ", pergunta2)

let pergunta3;
//pergunta3 = prompt("3. Qual é a sua cor preferida?")
//console.log("Resposta: ", pergunta3)

let pergunta4;
//pergunta4 = prompt("4. Qual é a sua banda preferida?")
//console.log("Resposta: ", pergunta4)

let pergunta5;
//pergunta5 = prompt("5. Qual é o seu nome completo?")
//console.log("Resposta: ", pergunta5)

//---

//-----------------------------------------------------------------------

// EXERCICIO 3

//a.
let salarioMinimo;
let quiloWatt;
let quiloWattHora;

//assumindo que o valor inserido em kW é mensal
//salarioMinimo = prompt("Digite o atual valor do salário mínimo: ")
//quiloWatt = prompt("Digite o consumo energético da sua residência, em kW: ")

salarioMinimo = Number(salarioMinimo);
quiloWatt = Number(quiloWatt);

//horas em um mes = 730.001
quiloWattHora = (salarioMinimo * (1 / 5) * quiloWatt) / 730;
console.log(quiloWattHora);
