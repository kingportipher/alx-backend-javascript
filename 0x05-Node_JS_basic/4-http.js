const http = require('http');

// Create the server and respond with "Hello Holberton School!" for any endpoint
const app = http.createServer((req, res) => {
    res.statusCode = 200; // Set status code to 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Set response content type to plain text
    res.end('Hello Holberton School!'); // Send response body
});

// Make the server listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app server for use in other files
module.exports = app;
