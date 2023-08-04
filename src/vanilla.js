const http = require('http');

//route handler 
const server = http.createServer((req, res) => {
  //if user send a get request we do a 200 and close
  if (req.method === 'GET' && req.url === '/') {
    console.log('Hello from server');
    //response object is scoped the incoming req, so its unique
    res.end();
  }
});

//server is listening on port 3000
server.listen(3001, () => {
  console.log('server on port 3001');
});
