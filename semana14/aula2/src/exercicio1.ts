const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 25, 34, 36, 38, 39, 65, 74, 98]
type returnedObjectAboutArray = {
    numberOfElements: number,
    numberOfOddNumbers: number,
    sumOfAllElements: number
}

const infoAboutArray = (numbersArray: number[]): returnedObjectAboutArray => {
    //numero de elementos no array
    let numberOfElements = numbersArray.length
    
    //verificando quantos números ímpares o array tem
    let oddNumbers = []
    numbersArray.forEach((num) => {
        if (num % 2 !== 0) {
            oddNumbers.push(num)
        } 
    })
    let numberOfOddNumbers = oddNumbers.length

    //somando todos os elementos do array
    let sumOfAllElements = numbersArray.reduce((sum, current) => sum + current, 0)

    let result = {numberOfElements, numberOfOddNumbers, sumOfAllElements}
    console.log(result)
    return result
}

infoAboutArray(numbersArray)