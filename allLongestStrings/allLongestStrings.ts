export function allLongestStrings(inputArray: string[]): string[] {
    const longuestLength = Math.max(...inputArray.map(string => string.length));
    return inputArray.filter(string => string.length === longuestLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));