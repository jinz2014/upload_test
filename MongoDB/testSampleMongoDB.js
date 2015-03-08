var http = require('http');
var mongojs = require('mongojs');

var uri = "mongodb://demo_user:demo_password@ds027769.mongolab.com:27769/demo_database";
var db = mongojs.connect(uri, ["demo_collection"]);

// expect a function to handle all incoming requests
var server = http.createServer(requestHandler);

// a browser's request, server's response to the browser
function requestHandler(request, response) {
  response.writeHead(200, {"Context-Type":"text/html"});
  // find returns a cursor to the doc returned by our query
  // the curson is iterable and contains all the needed data
  db.demo_collection.find({"color" : "red"}, function (err, records) {
    if (err) {
      console.log("Error performing database query");
      response.end();
      return;
    } else {
      var html = '<h2>red</h2>';

      // iterate over the records array
      for (var i in records) {
        html += '<p><b>Car name:<b> '
             + records[i].name 
             + ' <br /><b>Number of wheels:</b> '
             + records[i].wheels
             + ' <br /><b>Color:</b> '
             + records[i].color
             + '</p>';
      }
      response.write(html);
      response.end();
    }
  });
}

server.listen(8888);



