var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 25, 34, 36, 38, 39, 65, 74, 98];
var infoAboutArray = function (numbersArray) {
    //numero de elementos no array
    var numberOfElements = numbersArray.length;
    //verificando quantos números ímpares o array tem
    var oddNumbers = [];
    numbersArray.forEach(function (num) {
        if (num % 2 !== 0) {
            oddNumbers.push(num);
        }
    });
    var numberOfOddNumbers = oddNumbers.length;
    //somando todos os elementos do array
    var sumOfAllElements = numbersArray.reduce(function (sum, current) { return sum + current; }, 0);
    var result = { numberOfElements: numberOfElements, numberOfOddNumbers: numberOfOddNumbers, sumOfAllElements: sumOfAllElements };
    console.log(result);
    return result;
};
infoAboutArray(numbersArray);
