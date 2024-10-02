const http = require('http');
const fs = require('fs');
const { argv } = require('process');

// Function to count students and output to a stream
function countStudents(filePath, responseStream) {
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }

  // Read the file content synchronously
  const fileData = fs.readFileSync(filePath, 'utf8').trim();
  const lines = fileData.split('\n').filter(line => line.trim() !== '');

  // Skip header line
  const students = lines.slice(1).map(line => line.split(','));

  // Count students and group by field
  const fieldsCount = {};
  students.forEach(([name, , , field]) => {
    if (!fieldsCount[field]) {
      fieldsCount[field] = [];
    }
    fieldsCount[field].push(name);
  });

  // Write total number of students
  responseStream.write(`Number of students: ${students.length}\n`);

  // Write number of students per field
  for (const [field, names] of Object.entries(fieldsCount)) {
    responseStream.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
  }
}

// HTTP server logic
const hostname = 'localhost';
const port = 1245;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(argv[2], res);
      res.end();
    } catch (error) {
      res.end(`${error.message}\n`);
    }
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;

