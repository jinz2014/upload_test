function start() {

  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Node");
    response.end();
  }


  var http = require("http");
  http.createServer(onRequest).listen(8080);
  console.log("Server has started.");
}

exports.start = start;

