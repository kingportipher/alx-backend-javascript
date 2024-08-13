// 4-update_grade_by_city.js
export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradesMap = new Map(newGrades.map(grade => [grade.studentId, grade.grade]));

  return students
    .filter(student => student.location === city)
    .map(student => ({
      ...student,
      grade: gradesMap.get(student.id) || 'N/A'
    }));
}
