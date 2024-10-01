const fs = require('fs').promises;

function countStudents(path) {
    return fs.readFile(path, 'utf-8')
        .then((data) => {
            const lines = data.trim().split('\n');

            // Filter out any empty lines
            const validLines = lines.filter((line) => line.trim() !== '');

            if (validLines.length <= 1) {
                console.log('Number of students: 0');
                return;
            }

            // Extract headers and student data
            const students = validLines.slice(1).map(line => line.split(','));

            console.log(`Number of students: ${students.length}`);

            // Group students by field
            const fields = {};

            students.forEach(student => {
                const firstName = student[0];
                const field = student[3];
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstName);
            });

            // Output the number of students per field and the list of first names
            for (const field in fields) {
                const studentsInField = fields[field];
                console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
            }
        })
        .catch(() => {
            throw new Error('Cannot load the database');
        });
}

module.exports = countStudents;
