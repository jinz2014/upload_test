var server = require("./server102");
var router = require("./router");

//server.start();
server.start(router.route);
