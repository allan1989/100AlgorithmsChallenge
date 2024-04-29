export function largestOfFour(nums: number[][]): number[] {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(Math.max(...nums[i]));
  }
  return result;
}

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
// console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
