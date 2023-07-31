export default function cleanSet(set, startString) {
  const result = [];

  for (const item of set) {
    if (item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }
  return startString.length > 0 ? result.join('-') : '';
}
