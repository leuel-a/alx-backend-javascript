export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredArray = [...set].filter((string) => typeof string === 'string' && string.startsWith(startString));
  return filteredArray.map((string) => string.slice(startString.length)).join('-');
}
