export function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  let days = 0;
  let height = 0;
  for (let i = 0; i < desiredHeight; i += upSpeed) {
    days++;
    height += upSpeed - downSpeed;
  }
  return days;
}

// console.log(growingPlant(100, 10, 910))
