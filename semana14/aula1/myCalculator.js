const operation = process.argv[2]
const value1 = Number(process.argv[3])
const value2 = Number(process.argv[4])

switch (operation) {
    case "add":
        let sumOfValues = value1 + value2
        console.log("O resultado da soma é: " + sumOfValues)
        break;
    case "subtract":
        let subtractionOfValues = value1 - value2
        console.log("O resultado da subtração é: " + subtractionOfValues)
        break;
    case "divide":
        let divisionOfValues = value1 / value2
        console.log("O resultado da divisão é: " + divisionOfValues)
        break;
    case "multiply":
        let multiplicationOfValues = value1 * value2
        console.log("O resultado da multiplicação é: " + multiplicationOfValues)
        break;
    default: 
        console.log("Por favor escolha a operaçao e forneça 2 valores")
        break;
}
