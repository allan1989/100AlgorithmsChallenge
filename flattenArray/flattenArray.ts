export function flattenArray(arr: any[]): any[] {
  let r = [];

  flatten(arr);

  function flatten(arr) {
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        flatten(el);
      } else {
        r.push(el);
      }
    });
  }

  return r;
}

// console.log(flattenArray([[["a"]], [["b"]]]));
// console.log(flattenArray([1, [2], [3, [[4]]]]));
