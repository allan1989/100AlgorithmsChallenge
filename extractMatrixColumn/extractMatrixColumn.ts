export function extractMatrixColumn(matrix: number[][], column: number): number[] {
    return matrix.reduce((acc, curr) => {
       acc.push(curr[column]);
       return acc;
    }, []);
}

// console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));