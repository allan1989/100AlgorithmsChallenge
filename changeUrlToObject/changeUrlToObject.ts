export function changeUrlToObject(url:string):object {
  const formattedString = url.match(/([A-Za-z]+)=?([A-Za-z]+)+/gm);

  if (formattedString === null) return {};

  return formattedString.reduce((acc, curr, _, arr) => {
    let [objKey, objVal = true] = curr.split("=");

    let keyIsDuplicated = arr.filter((pair) => pair.includes(objKey));

    if (keyIsDuplicated.length > 1) {
      acc[objKey] = [...keyIsDuplicated].map(
        (key) => key.split("=")[1] || true
      );
    } else {
      acc[objKey] = objVal;
    }

    return acc;
  }, {});
}
