export function isCaseInsensitivePalindrome(inputString: string): boolean {
    return inputString.toLowerCase() === inputString.split('').reverse().join('').toLowerCase()
}

// console.log(isCaseInsensitivePalindrome('AaBaa'));
// console.log(isCaseInsensitivePalindrome('abac'));