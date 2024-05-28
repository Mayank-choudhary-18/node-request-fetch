// Import the 'http' module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
 
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  
  res.end('Hello from the Node.js server!');

 
  console.log(`Received request for: ${req.url}`);
});


server.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}/`);
});
