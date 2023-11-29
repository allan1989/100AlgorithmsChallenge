export function absoluteValuesSumMinimization(array: number[]): number {
  const isEven = array.length % 2  === 0;
  return isEven ? array[array.length / 2 - 1] : array[Math.floor(array.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));          // 4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));       // 4 
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));    // 7
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])); // 7