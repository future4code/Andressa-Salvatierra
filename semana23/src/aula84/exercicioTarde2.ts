export const compressString = (input: string): string => {
    let counts: number[] = []
    for(let i = 0; i < input.length; i++) {
        let char1 = input[i] //compara a letra com a próxima
        let char2 = input[i+1] 

        if (char1 === char2) {//se um for igual ao outro, adicionar ao count 
            let eachCount = 0
            eachCount =+ 1
            counts = [eachCount]
        }
    }
    return `${counts}`
}

