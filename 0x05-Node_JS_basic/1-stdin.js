// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Handle user input from stdin
process.stdin.on('data', (input) => {
    const name = input.toString().trim(); // Get the user's input and trim whitespace
    console.log(`Your name is: ${name}`);
    process.exit(); // Exit the program
});

// Handle program exit event
process.on('exit', () => {
    console.log("This important software is now closing");
});
