var http = require('http');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    if(request.url === '/'){
        response.end('Hello World');
    }else if(request.url === '/contato'){
        response.end('manoel.josefneto@gmail.com');
    }else {
        response.end('Not Found!');
    }
});

server.listen(1337,'127.0.0.1');
console.log('Server rodando em http://127.0.0.1:1337');