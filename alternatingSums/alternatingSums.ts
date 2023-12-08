export function alternatingSums(a: number[]): number[] {
    const team1 = a.filter((_,i) => i % 2 === 0).reduce((acc, cur) => acc + cur);
    const team2 = a.filter((_, i) => i % 2 !== 0).reduce((acc, cur) => acc + cur);
    return [team1, team2];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))