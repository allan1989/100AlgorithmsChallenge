export function isLucky(n: number): boolean {
  const firstHalf = n.toString().slice(0, n.toString().length / 2);
  const secondHalf = n.toString().slice(n.toString().length / 2);
  const sum = (arr) => arr.split("").reduce((acc, curr) => +acc + +curr, 0);
  return sum(firstHalf) === sum(secondHalf);
}

// console.log(isLucky(1230));
// console.log(isLucky(239017));
