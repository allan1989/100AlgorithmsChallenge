export function compareIntegers(a: string, b: string): string {
    const parsedA = parseInt(a);
    const parsedB = parseInt(b);

    if(parsedA < parsedB) return 'less'
    if(parsedA > parsedB) return 'greater'
    return 'equal'
}

// console.log(compareIntegers('12', '13'));
// console.log(compareIntegers('875', '799'));
// console.log(compareIntegers('1000', '1000'));