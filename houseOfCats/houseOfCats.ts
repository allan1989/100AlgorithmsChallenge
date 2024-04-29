export function houseOfCats(legs: number): number[] {
  let result = [];
  const cats = Math.floor(legs / 4);
  const humans = Math.floor(legs / 2);

  if (cats > 0) result.push(cats);
  if (humans > 0) result.push(humans);

  return result.sort();
}

// console.log(houseOfCats(6));
// console.log(houseOfCats(2));
