export function isTandemRepeat(inputString: string): boolean {
  return (
    inputString.substring(0, inputString.length / 2) ===
    inputString.substring(inputString.length / 2)
  ) || false
}

// console.log(isTandemRepeat('tandemtandem'))
// console.log(isTandemRepeat('qqq'))
// console.log(isTandemRepeat('2w2ww'))
