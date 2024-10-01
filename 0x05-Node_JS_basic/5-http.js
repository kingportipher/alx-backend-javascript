const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line !== '');
        const fields = lines[0].split(',');
        const students = lines.slice(1).map(line => line.split(','));

        const counts = fields.slice(1).reduce((acc, field) => {
          acc[field] = students.filter(student => student[1] === field).length;
          return acc;
        }, {});

        resolve({
          numberOfStudents: students.length,
          fieldCounts: counts,
        });
      }
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const { numberOfStudents, fieldCounts } = await countStudents(process.argv[2]);
      res.write(`Number of students: ${numberOfStudents}\n`);
      for (const field in fieldCounts) {
        const studentNames = Object.keys(fieldCounts[field]).join(', ');
        res.write(`Number of students in ${field}: ${fieldCounts[field]}. List: ${studentNames}\n`);
      }
      res.end();
    } catch (err) {
      res.write('Cannot load the database');
      res.end();
    }
  } else {
    res.end('Not found');
  }
});

module.exports = app;
