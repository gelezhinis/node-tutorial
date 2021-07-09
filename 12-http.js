const http = require('http');

const server = http.createServer((req, res) => {
   if(req.url === "/") {
      res.end('Welcome home');
   } else if(req.url === "/about") {
      res.end('Welcome to about');
   } else {
      res.end(`
      <h1>Ooops I did it again!</h1>
      <p>We can't find the page you are looking for</p>
      <a href="/">Home</a>
   `);
   }   
});

server.listen(5000);

// not working