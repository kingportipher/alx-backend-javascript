const express = require('express');
const { argv } = require('process');
const fs = require('fs');

const app = express();

// Route for the root path
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

// Route for students list
app.get('/students', (req, res) => {
  res.type('text/plain');
  res.write('This is the list of our students\n');

  // Reading the student data file
  fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Cannot load the database');
      return;
    }

    const lines = data.trim().split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1).map(line => line.split(','));

    const fields = new Map();

    students.forEach(([name, , , field]) => {
      if (!fields.has(field)) {
        fields.set(field, []);
      }
      fields.get(field).push(name);
    });

    // Write total number of students
    res.write(`Number of students: ${students.length}\n`);

    // Write number of students by field
    for (const [field, names] of fields.entries()) {
      res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
    }

    res.end();
  });
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
