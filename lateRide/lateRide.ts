export function lateRide(n: number): number {
  const time = [Math.round(n / 60), Math.round(n % 60)];
  const [hours, minutes] = time;
  return (hours.toString() + minutes.toString())
    .split("")
    .reduce((acc, curr) => +acc + +curr, 0);
}

// console.log(lateRide(240));
// console.log(lateRide(808));
