export function ratingThreshold(
  threshold: number,
  ratings: number[][]
): number[] {
  let result = [];
  const sum = (arr) =>
    arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

  for (let i = 0; i < ratings.length; i++) {
    if (sum(ratings[i]) < threshold) {
      result.push(i);
    }
  }

  return result;
}

// console.log(ratingThreshold(3.5,
//     [[3, 4],
//     [3, 3, 3, 4],
//     [4]]));
