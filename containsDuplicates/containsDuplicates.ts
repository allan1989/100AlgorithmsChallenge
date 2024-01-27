export function containsDuplicates(a: number[]): boolean {
    return a.filter((el, i, arr) => arr.indexOf(el) != i).length > 0
}

// console.log(containsDuplicates([1, 2, 3, 1]));
// console.log(containsDuplicates([3, 1]));
