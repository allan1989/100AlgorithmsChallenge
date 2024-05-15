export function uniqueDigitProducts(a: number[]): number {
  return a
    .map((n) =>
      n.toString().length > 1
        ? n
            .toString()
            .split("")
            .reduce((acc, curr) => +acc * +curr)
        : n
    )
    .filter((el, i, arr) => arr.indexOf(el) === i).length;
}

// console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
