export function confirmEnding(str: string, target: string) {
    return str.substr(-target.length) === target
}

// const confirmEnding = (str: string, target: string) => str.endsWith(target)


console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));