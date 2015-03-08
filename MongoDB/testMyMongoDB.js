var http = require('http');
var mongojs = require('mongojs');

//-----------------------------------------------------------------------------
// access demo database
//-----------------------------------------------------------------------------
var uri = "mongodb://jinz:jinz1234@ds063870.mongolab.com:63870/demo_database";
var db = mongojs.connect(uri, ["my_collection"]);

// expect a function to handle all incoming requests
var server = http.createServer(requestHandler);

// a browser's request, server's response to the browser
function requestHandler(request, response) {
  response.writeHead(200, {"Context-Type":"text/html"});

  // find returns a cursor to the doc returned by our query
  // the curson is iterable and contains all the needed data
  var color = "silver";
  db.my_collection.find({"color" : color}, function (err, records) {
    if (err) {
      console.log("Error performing database query");
      response.end();
      return;
    } else {
      var html = '<h2>red</h2>';

      if (records.length == 0) {
        response.write('Car of color ' + color + ' not found in the database.');
        response.end();
      } else {
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
    }
  });
}

server.listen(8888);



