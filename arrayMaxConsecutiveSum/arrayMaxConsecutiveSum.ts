export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let max = 0;
  let currentValue = 0;

  for(let i = 0; i < inputArray.length; i++) {
  	let currentArray:number[] = [];
    currentArray.push(inputArray[i])
   
    for(let j = i + 1; currentArray.length < k; j++) {
    	currentArray.push(inputArray[j])
    }
    
    currentValue = currentArray.reduce((a,b) => a + b);
    
    if(currentValue > max) {
    	max = currentValue;
    }
    
  }
  return max;
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));