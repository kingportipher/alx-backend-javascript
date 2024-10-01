const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line !== ''); // Remove empty lines
    const fields = lines[0].split(',');
    const students = lines.slice(1).map(line => line.split(','));

    const counts = fields.slice(1).reduce((acc, field) => {
      acc[field] = students.filter(student => student[1] === field).length;
      return acc;
    }, {});

    console.log(`Number of students: ${students.length}`);
    for (const field in counts) {
      const studentNames = students
        .filter(student => student[1] === field)
        .map(student => student[0])
        .join(', ');
      console.log(`Number of students in ${field}: ${counts[field]}. List: ${studentNames}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
