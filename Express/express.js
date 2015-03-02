var express = require('express');
var app = express();

// multiple request handlers
app.get('/', 
    function(req, res) { 
      res.send('Hello World Expressjs'); 
    });

app.get('/customer', 
    function(req, res) { 
      res.send('customer page');
    });

app.get('/admin', 
    function(req, res) { 
      res.send('admin page');
    });

app.listen(8084);
console.log('Server is running on port 8084');
