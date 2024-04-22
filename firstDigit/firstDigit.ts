export function firstDigit(inputString: string): string {
	return inputString.match(/[0-9]/g)[0];
}

// console.log(firstDigit('var_1__Int'));
// console.log(firstDigit('q2q-q'));
// console.log(firstDigit('0ss'));
