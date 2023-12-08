export function alphabeticShift(inputString: string): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return inputString.split('').map(el => {
        let letter = alphabet[alphabet.indexOf(el) + 1];
        return !!letter ? letter : alphabet[0];
    }).join('')
}

console.log(alphabeticShift('crazy'));