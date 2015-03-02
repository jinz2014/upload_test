var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

var server = http.createServer(function(request, response){
console.log('Connection');
var path = url.parse(request.url).pathname;
console.log(path);

switch(path){
case '/':
response.writeHead(200, {'Content-Type': 'text/html'});
response.write('hello world');
break;
case '/socket.html':
fs.readFile(__dirname + path, function(error, data){
if (error){
response.writeHead(404);
response.write("opps this doesn't exist - 404");
response.end();
}
else{
response.writeHead(200, {"Content-Type": "text/html"});
response.write(data, "utf8"); // the char encoding of the html doc
response.end();
}
});
break;
default:
response.writeHead(404);
response.write("opps this doesn't exist - 404");
response.end();
break;
}
});

server.listen(8001);

var socket = io.listen(server);

// wait for io.connect() in the socket.html
socket.on('connection', function(socket) {
  //-------------------------------------------
  // Server send data to client
  //-------------------------------------------
  // basic emit 
  socket.emit('message', {'message' : 'hello'});

  // emit date event every 1000 ms
  setInterval(function() {
    socket.emit('date', {'date' : new Date()});
  }, 1000);

  //-------------------------------------------
  // Server listen for the emitted event from socket.html
  //-------------------------------------------
  socket.on('client_data', function(data) {
    process.stdout.write(data.letter);
  });
});

