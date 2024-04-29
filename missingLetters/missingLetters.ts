export function missingLetters(str: string): string {
  let missingLetter;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(alphabet[i]) === -1) {
      missingLetter = alphabet[i];
    }
  }
  return missingLetter || undefined;
}

// console.log(missingLetters("bce"));
// console.log(missingLetters("abce"));
// console.log(missingLetters("abcdefghjklmno"));
// console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
