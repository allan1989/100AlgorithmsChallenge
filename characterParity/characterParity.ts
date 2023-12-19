export function characterParity(symbol: string): string {

    const parsedInteger = parseInt(symbol);

    if(isNaN(parsedInteger)) {
        return 'not a digit'
    }

    return parsedInteger % 2 === 0 ? 'even' : 'odd'
}

// console.log(characterParity('5'))
// console.log(characterParity('8'))
// console.log(characterParity('q'))
