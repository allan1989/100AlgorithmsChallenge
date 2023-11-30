export function adjacentElementsProduct(inputArray: number[]): number {
    let max = inputArray[0] * inputArray[1];
    for(let i = 0; i < inputArray.length - 1; i++) {
        let current = inputArray[i] * inputArray[i + 1];
        if(current > max) {
            max = current
        }
    }
    return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));