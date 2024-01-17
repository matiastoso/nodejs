const http = require('http');

const server = http.createServer( (request, response) => {
    response.end(`<h1> Hola mundo, desde el Backend </h1>`);
})

server.listen(8080, () => {
    console.log('Listening on port 8080');
})