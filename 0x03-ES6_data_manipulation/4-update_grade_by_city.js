export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((students) => students.location === city);
  return filteredStudents.map((student) => {
    let studentGrade = 'N/A';
    newGrades.forEach(({ studentId, grade }) => {
      if (studentId === student.id) {
        studentGrade = grade;
      }
    });
    return { ...student, grade: studentGrade };
  });
}
