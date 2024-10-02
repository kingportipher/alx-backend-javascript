const http = require('http');
const countStudents = require('./3-read_file_async');

// Get the database path from the command line arguments
const databaseFile = process.argv[2];

// Create the HTTP server
const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        // For the root URL path "/"
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        // For the URL path "/students"
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('This is the list of our students\n');
        
        try {
            // Call the countStudents function and append the output
            const result = await countStudents(databaseFile);
            res.write(result + '\n');
        } catch (error) {
            res.write(error.message + '\n');
        }

        res.end();
    } else {
        // For any other URL path, return 404 Not Found
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

// Make the server listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the server app
module.exports = app;
