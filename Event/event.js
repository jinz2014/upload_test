
// events and listeners

var events = require('events');

var EventEmitter = events.EventEmitter;

var e = new EventEmitter;

// listen to the event once
e.once('msgSendEvent', function(msg) {console.log('Once: ' + msg);});

// listen to the send message event till the application ends
e.on('msgSendEvent', function(msg) {console.log('On: ' + msg);});

// listen to the recv message event till the application ends
var msgFunc = function(msg) {console.log('On: ' + msg);};
e.on('msgRecvEvent', msgFunc);

// emit events
e.emit('msgSendEvent', 'send message a');
e.emit('msgSendEvent', 'send message b');
e.emit('msgRecvEvent', 'recv message c');

// remove events and test again
e.removeListener('msgRecvEvent', msgFunc);
e.emit('msgRecvEvent', 'recv message d');
