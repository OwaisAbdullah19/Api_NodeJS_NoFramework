const http  = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello World 2</h1>');
  res.end();
  console.log('Request received');
  }
)


server.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`)
 });

