export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let max = 0;
    let sum = 0;
    for(let i = 0; i < inputArray.length; i++) {
        sum = inputArray[i] - inputArray[i + 1];
        if(Math.abs(sum) > max) {
            max = sum;
        }
    }
    return max;
}

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));