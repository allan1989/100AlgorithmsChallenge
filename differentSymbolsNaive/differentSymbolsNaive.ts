export function differentSymbolsNaive(s: string): number {
  let mapping = {};

  for (let char of s) {
    if (mapping.hasOwnProperty(char)) {
      mapping[char]++;
    } else {
      mapping[char] = 1;
    }
  }

  return Object.keys(mapping).length;
}

// export function differentSymbolsNaive(s: string): number {
//     return new Set(s).size
// }

// export function differentSymbolsNaive(s: string): number {
// 	return s.split('').filter((el,i, arr) => arr.indexOf(el) === i).length;
// } 

// console.log(differentSymbolsNaive('cabca'));
