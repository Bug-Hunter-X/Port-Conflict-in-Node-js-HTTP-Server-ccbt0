const http = require('http');
const portfinder = require('portfinder');

portfinder.getPort((err, port) => {
  if (err) {
    console.error('Error finding a free port:', err);
    return;
  }

  const requestListener = (request, response) => {
    response.writeHead(200);
    response.end('Hello, World!');
  };

  const server = http.createServer(requestListener);

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});