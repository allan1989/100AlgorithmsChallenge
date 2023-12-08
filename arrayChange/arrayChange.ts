export function arrayChange(inputArray: number[]): number {
    // let moves = 0;
    // let index = 1;
    // let isInSequence = arr => arr.every((num, i) => i === arr.length - 1 || num < arr[i + 1]);
  
	// if(isInSequence(inputArray)) {
    //     return moves;
    // }else {
    //     moves++;
    //     inputArray[index]++;
    //     index++;
    //     arrayChange(inputArray);
    // } 

    let count = 0;

    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] >= inputArray[i + 1]) {
            const difference = (inputArray[i] + 1) - inputArray[i + 1];
            inputArray[i + 1] = inputArray[i] + 1;
            count += difference;
        }
    }

    return count;
}

// console.log(arrayChange([1, 1, 1]));
// count = 1 [1, 1, 1]
// count = 2 [1, 2, 1]
// count = 3 [1, 2, 3]