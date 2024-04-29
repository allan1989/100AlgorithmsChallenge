export function integerToStringOfFixedWidth(
  number: number,
  width: number
): string {
  const numberToString = number.toString();
  return numberToString.length < width
    ? numberToString.padStart(width, '0')
    : numberToString.slice(-width);
}

// console.log(integerToStringOfFixedWidth(1234, 2));
// console.log(integerToStringOfFixedWidth(1234, 4));
// console.log(integerToStringOfFixedWidth(1234, 5));
