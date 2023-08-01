export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredArray = [...set].filter((string) => string.startsWith(startString));
  return filteredArray.map((value) => value.slice(startString.length)).join('-');
}
