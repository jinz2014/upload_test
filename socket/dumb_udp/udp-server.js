var dgram = require('dgram');
var server = dgram.createSocket('udp4');

// server waits for the incoming message from the client (remote address info)
server.on('message', 
    function(data, rinfo) {
      console.log('Server received data ' + data + ' from client ' + 
      rinfo.port + ' ' + rinfo.address + ':' + rinfo.port);
    }
    );

// server waits for the incoming client connection
server.on('listening', 
    function() {
      var addr = server.address();
      console.log('server listerning on ' + 
          addr.family + ' ' + addr.address + ':' + addr.port);
    }
    );

server.on("error", function(err) {
  console.log("server error:\n" + err.stack);
  server.close();
});

// for localhost, server listening on 0.0.0.0:8084
server.bind(8084);
