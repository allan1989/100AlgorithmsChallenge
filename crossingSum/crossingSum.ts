export function crossingSum(matrix: number[][], a: number, b: number): number {
    const aRow = matrix[a].reduce((acc, curr) => acc + curr);
    const bCol = matrix.filter((_,i) => i !== a).reduce((acc, curr) => acc + curr[0], 0);
    return aRow + bCol;
}

// console.log(crossingSum([[1, 1, 1, 1], 
//     [2, 2, 2, 2], 
//     [3, 3, 3, 3]], 1, 3));