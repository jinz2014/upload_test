var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var serverName = 'localhost';
var serverPort = '8084';

// setup the message to be sent
var message = new Buffer('client message');

// send the message (DNS lookup delay the time to send for at least
// one tick. The only way to know for sure that the datagram is sent
// is by using a callback
client.send(message, 0, message.length, serverPort, serverName,
    function (err, bytes) {
      if (err)
        console.err(err);
      else {
        console.log('Number of bytes sent is ' + bytes);
        client.close();
      }
    }
    );
