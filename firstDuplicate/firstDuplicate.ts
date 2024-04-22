export function firstDuplicate(a: number[]): number {
  let mapping = a.reduce((acc, curr, i, arr) => {
    if (arr.indexOf(curr) !== arr.lastIndexOf(curr)) {
      acc[curr] = arr.lastIndexOf(curr);
    }
    return acc;
  }, {});
  if (Object.keys(mapping).length) {
    const index = Math.min(...Object.values(mapping));
    for (let key in mapping) {
      if (mapping[key] === index) {
        return +key;
      }
    }
  } else {
    return -1;
  }
}

// console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
// console.log(firstDuplicate([2, 4, 3, 5, 1]));
