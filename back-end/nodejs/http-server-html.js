const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((request, response) => {
  fs.readFile(__dirname + '/alunos.html', function(err, html) {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(html);
    response.end();
  });
});

server.listen(port, () => {
  console.log('Servidor rodando na porta: ', port);
});
