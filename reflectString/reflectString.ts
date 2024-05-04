export function reflectString(inputString: string): string {
  let result = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reversedAlphabet = alphabet.split("").reverse().join("");

  for (let i = 0; i < inputString.length; i++) {
    result += reversedAlphabet[alphabet.indexOf(inputString[i])];
  }

  return result;
}

// console.log(reflectString("name"));
