var app = require('express')();

// Express set app to be a function handler to HTTP server
var http = require('http').Server(app);

// a server mounted on the Node.JS HTTP server
var io = require('socket.io')(http);

// route handler /
app.get('/', function(req, res){
  //res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html');

});

// listen on the connection event for incoming socket
io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('disconnect', function() {
      console.log('user disconnected');
    });

    socket.on('chat message', function(msg) {
      console.log(msg);
    });
});

// listern on port 3000
http.listen(3000, function(){
    console.log('listening on *:3000');
});
