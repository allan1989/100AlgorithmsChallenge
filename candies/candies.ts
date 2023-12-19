export function candies(n: number, m: number): number {
    // let total = 0;
  
    // for(let i = n; i < m; i+=n) {
    //     if(i > total) {
    //         total = i;
    //     }
    // }
    
    // return total;

    const candy = Math.floor(m/3);
    return candy * n;
}

console.log(candies(3, 10));