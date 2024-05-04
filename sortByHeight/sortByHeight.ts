export function sortByHeight(a: number[]): number[] {
  const array2 = a.filter((el) => el !== -1).sort((a, b) => a - b);
  let indexVal = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = array2[indexVal];
      indexVal++;
    }
  }
  return a;
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
