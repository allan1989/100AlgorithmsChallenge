export function firstNotRepeatingCharacter(s: string): string {
  return (
    s
      .split("")
      .find((char, _, arr) => arr.indexOf(char) === arr.lastIndexOf(char)) ||
    "_"
  );
}

// console.log(firstNotRepeatingCharacter('abacabad'));
// console.log(firstNotRepeatingCharacter('abacabaabacaba'));
