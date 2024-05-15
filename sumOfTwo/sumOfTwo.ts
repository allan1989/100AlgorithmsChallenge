// export function sumOfTwo(a: number[], b: number[], v: number): boolean {
//   const bSplitted = b.map((n) => n.toString().split("")).flat(Infinity); 
//   const aSplitted = a.map((n) => n.toString()); 
//   const vSplitted = v
//     .toString()
//     .split("")
//     .map((n) => n.toString()); 

//   return vSplitted.every(
//     (n) =>
//       aSplitted.includes(n) ||
//       (bSplitted.includes(n) && aSplitted.includes(n)) ||
//       bSplitted.includes(n)
//   ); // 0.452 s => limit 5s // 5000 ms
// }

export function sumOfTwo(a: number[], b: number[], v: number): boolean {
    const hashMap = {};

    for(let num of a){
        const difference = v - num;
        hashMap[difference] = difference;
    }

    for(let num of b){
        if(hashMap.hasOwnProperty(num)) {
            return true
        }
    }

    return false; // 0.427s
}

// console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
