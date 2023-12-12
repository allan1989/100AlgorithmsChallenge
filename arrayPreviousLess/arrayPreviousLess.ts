export function arrayPreviousLess(items: number[]): number[] {
    return items.map((el,i, arr) => arr[i - 1] < el ? arr[i - 1] : -1)
}

// console.log(arrayPreviousLess([3, 5, 2, 4, 5]));