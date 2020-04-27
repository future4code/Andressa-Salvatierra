const addAllNumbers = (n: number) => {
    let sum = 0
    for(let i = 1; i <= n; i++ ) {
        sum = sum + i
    }
    console.log(sum)
}

addAllNumbers(5)