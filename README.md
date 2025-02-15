# Node.js Port Conflict
This example demonstrates a common error in Node.js where a server fails to start because the specified port is already in use.

## Bug
The `server.listen(8080)` function call may throw an error if port 8080 is already occupied by another process.

## Solution
The solution involves checking if the port is available before attempting to bind to it.  This can be achieved using a library like `portfinder`.