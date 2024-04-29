export function makeArrayConsecutive2(statues: number[]): number {
  let sizes = [];
  for (let i = Math.min(...statues); i < Math.max(...statues); i++) {
    if (!statues.includes(i)) {
      sizes.push(i);
    }
  }
  return sizes.length;
}

// console.log(makeArrayConsecutive2([6, 2, 3, 8]));
