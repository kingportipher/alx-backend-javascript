// 3-get_ids_sum.js
export default function getStudentIdsSum(students) {
  return students.reduce((acc, student) => acc + student.id, 0);
}
