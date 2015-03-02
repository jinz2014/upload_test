var serverPort = 8088;
var serverName = 'localhost';
var net = require('net');
console.log('connecting to server...');
var client = net.connect({server:serverName,port:serverPort},
    function(){ 
      console.log('client connected'); 
      console.log('send data to server');
      client.write('greeting from client socket');
    });

client.on('data', 
    function(data) { 
      console.log('received data: ' + data.toString()); 
      client.end();
    });

client.on('error',
    function(err){ 
      console.log(err);
    });

client.on('end', 
    function() { 
      console.log('client disconnected');
    });
