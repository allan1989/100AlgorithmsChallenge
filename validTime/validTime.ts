export function validTime(time: string): boolean {
  const [hours, minutes] = [+time.split(":")[0], +time.split(":")[1]];
  return hours < 24 && hours >= 0 && minutes < 60 && minutes >= 0;
}

// console.log(validTime('13:58'));
// console.log(validTime('25:51'));
// console.log(validTime('02:76'));
