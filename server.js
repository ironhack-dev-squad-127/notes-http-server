// File "server.js"

// If you want to try by yourself, you can't execute it on Repl.it, you have to create a file "server.js"

// To execute it, go in the right folder and run: $ node server.js

// To do a change, you have to:
// - Save the file
// - Kill the server with Ctrl+C
// - Relaunch the server with the command: $ node server.js

// Save in the variable http the output of the package "http"
const http = require('http');

// Create a web server
// Everytime we go to http://localhost:3000 (or for example http://localhost:3000/tomato), the callback function is executed
const server = http.createServer((request, response) => {
  // `request.url` is the url typed after "http://localhost:3000"
  console.log(`Someone has requested ${request.url}`);

  if (request.url === '/') {
    response.write('Hello, world!');
    response.end();
  }
  else if (request.url === '/carrot') {
    response.write('Hello, I am a <strong>carrot</strong>!');
    response.end();
  }
  else {
    response.statusCode = 404;
    response.write('404 Page');
    response.end();
  }
});

// Create a server on http://localhost:3000
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
});