export default function appendToEachArrayValue(array, appendString) {
  const updatedArray = [];

  for (const val of array) {
    updatedArray.push(appendString + val);
  }
  return updatedArray;
}
