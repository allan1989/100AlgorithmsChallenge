export function htmlEndTagByStartTag(startTag: string): string {
  const tagName = startTag.split(" ")[0].split(/([a-zA-Z]+)/)[1];
  return `</${tagName}>`;
}

// console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
// console.log(htmlEndTagByStartTag('<i>'));
