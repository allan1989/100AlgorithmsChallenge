export function tasksTypes(deadlines: number[], day: number): number[] {
  let [today, upComing,later] = [0, 0, 0];

  for (let task of deadlines) {
    if (task <= day) today++;
    else if (task >= day && task <= day + 7) {
      upComing++;
    } else {
      later++;
    }
  }

  return [today, upComing, later];
}

// console.log(tasksTypes([1, 2, 3, 4, 5], 2));
// console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
