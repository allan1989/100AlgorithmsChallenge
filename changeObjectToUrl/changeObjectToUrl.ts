export function changeObjectToUrl(obj) {
  let result = "?";

  let count = 0;

  for (let key in obj) {
    count++;

    if (Array.isArray(obj[key])) {
      for (let value of obj[key]) {
        if (value === true) {
          result += `${key}`;
        } else {
          result += `${key}=${value}&`;
        }
      }
    } else {
      if (obj[key] === true) {
        result += `${key}`;
      } else {
        result += `${key}=${obj[key]}${
          count === Object.keys(obj).length ? "" : "&"
        }`;
      }
    }
  }

  return decodeURIComponent(result);
}
