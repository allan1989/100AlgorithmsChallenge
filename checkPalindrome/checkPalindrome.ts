export function checkPalindrome(inputString: string): boolean {
    return inputString.toLowerCase() === inputString.split('').reverse().join('').toLowerCase();
}   

// console.log(checkPalindrome('aabaa'));
// console.log(checkPalindrome('abac'));
// console.log(checkPalindrome('a'));
