export function containsCloseNums(nums: number[], k: number): boolean {
    let duplicateNumber = nums.filter((el, i, arr) => arr.indexOf(el) != i)[0];
    return Math.abs(nums.indexOf(duplicateNumber) - nums.lastIndexOf(duplicateNumber)) <= k;
}

// console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
// console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));