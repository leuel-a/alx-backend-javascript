export default function getStudentIdsSum(students) {
  return students.reduce((accumlator, currValue) => accumlator + currValue.id, 0);
}
