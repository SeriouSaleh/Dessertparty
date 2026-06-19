const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello Saleh');
});

server.listen(3000);
