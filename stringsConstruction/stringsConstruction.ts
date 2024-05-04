export function stringsConstruction(a: string, b: string): number {
  let result = 0;
  b.split('').forEach((char) => {
    if (a.includes(char)) {
      result++;
    }
  });
  return result / a.length;
}

// console.log(stringsConstruction('abc', 'abccba'));
