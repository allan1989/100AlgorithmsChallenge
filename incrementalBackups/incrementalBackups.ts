export function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  let result = [];
  for (let i = 0; i < changes.length; i++) {
    const [time, id] = changes[i];
    if (time > lastBackupTime) {
      if (!result.includes(id)) {
        result.push(id);
      }
    }
  }
  return result.sort();
}

// console.log(incrementalBackups(461620205, [[461620203, 1],
//     [461620204, 2],
//     [461620205, 6],
//     [461620206, 5],
//     [461620207, 3],
//     [461620207, 5],
//     [461620208, 1]]));
