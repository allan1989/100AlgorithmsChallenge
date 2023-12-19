export function centuryFromYear(year: number): number {
    // const yearSplit = year.toString().split('');
    // const lastDigit = parseFloat(yearSplit[yearSplit.length - 1]);

    // if(yearSplit.length == 3) {
    //     return parseFloat(yearSplit[0]) + 1;
    // }
    
    // if(lastDigit === 0 && yearSplit.length === 3) {
    //     return parseFloat(yearSplit[0]) + 1;
    // }
    
    // if(lastDigit === 0 && yearSplit.length === 4) {
    //     return parseFloat(yearSplit.slice(0,2).join(''));
    // }
    
    // if(yearSplit.length === 4) {
    //     return parseFloat(yearSplit.slice(0,2).join('')) + 1;
    // }

    const century = year / 100;

    if(year % 100 === 0) {
        return century;
    }

    return Math.floor(century) + 1;

}

// console.log(centuryFromYear(1905));
// console.log(centuryFromYear(1700));