export function addTwoDigits(n: any): number {
    return n.toString().split('').reduce((acc, curr) => Number(acc) + Number(curr));
}

// export function addTwoDigits(n: any): number {
//     const n1 = parseInt(n.toString().split('')[0]);
//     const n2 = parseInt(n.toString().split('')[1]);
//     return n1 + n2;
// }

console.log(addTwoDigits(29));