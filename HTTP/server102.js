var http = require("http");
var url  = require("url");

function start(route) {

  // request handler to handle HTTP requests
  function onRequest(request, response) {
    console.log(request.url);
    
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");

    route(pathname);

    //response.writeHead(200, {"Content-Type": "text/plain"});
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('<h1>Hello Node</h1>');
    response.write('<ul>');
    for (var i = 0; i <= 10; i++) {
      response.write('<li>' + i + '</li>');
    }
    response.write('</ul>');
    response.end();
  }


  http.createServer(onRequest).listen(8080);
  console.log("Server has started.");
}

exports.start = start;

