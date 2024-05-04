export function pigLatin(str: string): string {
  const vowels = "aeiouy";
  let result;

  if (vowels.includes(str[0])) {
    result = `${str}way`;
  } else {
    const firstVowelsIndex = str
      .split("")
      .findIndex((el) => vowels.includes(el));
    result = `${str.slice(firstVowelsIndex)}${str.slice(0, firstVowelsIndex)}ay`;
  }

  return result;
}

// console.log(pigLatin("glove"));
// console.log(pigLatin("eight"));
