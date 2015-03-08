var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var database = new Db('test', server);

database.open(function(err, db) { 
  if(!err) { 
    console.log("connected to MongoDB");

    // create a table of employee
    db.collection('employee', function(err,coll){ 
      var employee = {name:'user1', email:'jinz@email.com', country: 'germany'}; 
      //Insert. 
      coll.insert(employee,function (err){ 
        if(err) 
          console.log(err); 
        else 
          console.log('inserted data was success'); 
      }); 
      db.close(); 
    }); 
  } else {
    // database open error
  }
});
