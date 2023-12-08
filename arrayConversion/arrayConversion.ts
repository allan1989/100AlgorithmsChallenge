export function arrayConversion(inputArray: number[]): number {
    let count = 1;
    let newArray = [];
    
  if(inputArray.length === 1) {
  	return inputArray[0];
  } else {
  	if(count % 2 !== 0) {
    	for(let i = 0; i < inputArray.length; i++) {
      	newArray.push((inputArray[i] + inputArray[i + 1]));
      }
      count++
      arrayConversion(newArray);
    }else {
    	for(let i = 0; i < newArray.length; i++) {
      	newArray = [];
        newArray.push(newArray[i] * newArray[i + 1]);
        count++
        arrayConversion(newArray)
      }
    }
  }
}

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
