//1) a)
// const printNumbers = (input: number) => {
//     if (input > 0) {
//        printNumbers(input - 1)
//     }
//     console.log(input)
// }
//
// printNumbers(10)

//b)
const printNumbers = (input: number) => {
    if (input > 0) {
        console.log(input)
        printNumbers(input - 1)
    }
}

printNumbers(10)