export function almostIncreasingSequence(sequence: number[]): boolean {
    const sequenceSliced = [...sequence].splice(0, sequence.length - 1);
    const sequenceSlicedAndSorted = [...sequenceSliced].sort((a,b) => a - b);
    return sequenceSliced.every((el,i) => el === sequenceSlicedAndSorted[i]);
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 