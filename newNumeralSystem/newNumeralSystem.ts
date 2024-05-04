export function newNumeralSystem(number: string): string[] {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  const limit = alphabet.indexOf(number);
  const result:string[] = [];
  for (let i = 0; i <= limit; i++) {
    for (let j = i; j <= limit; j++) {
      if (
        limit ===
        alphabet.indexOf(alphabet[i]) + alphabet.indexOf(alphabet[j])
      ) {
        result.push(`${alphabet[i]} + ${alphabet[j]}`);
      }
    }
  }
  return result;
}

// console.log(newNumeralSystem('G'));
