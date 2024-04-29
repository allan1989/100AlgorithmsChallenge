export function longestDigitsPrefix(inputString: string): string {
     return inputString.match(/([0-9]+)/g)[0];
}

// console.log(longestDigitsPrefix('123aa1'));