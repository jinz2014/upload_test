var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello Express page. */
router.get('/hello', function(reg, res, next) {
  res.render('hello', { message: 'Hello Express' });
});

/* GET all users from the database page . */
router.get('/userlist', function(req, res, next) {
  var db = req.db;
  db.my_collection.find({}, {}, function (err, records) {
  res.render('userlist', { userlist : records});
  });
});

/* GET add new user page . */
router.get('/newuser', function(req, res, next) {
  res.render('newuser', { title : 'Add New User'});
});

/* POST to add new user service . 
   TODO
     email format checking
     duplicate username and emails
 */
router.post('/adduser', function(req, res) {
  var db = req.db;

  // 

  var userName = req.body.username;
  var email = req.body.email;

  // Specify AND condition
  db.my_collection.find({"username" : userName, "email" : email}, function(err, records) {
    if (err) {
      res.send("Error updating the database");
    } else if (records.length != 0) {
      //res.render('duplicate', { message: '' });
      res.location("newuser");
      res.redirect("newuser");
    } else {
      var collection = db.collection('my_collection');
      collection.insert({
        "username" : userName,
        "email" : email
      }, function (err, records) {
        if (err) {
          res.send("Error updating the database");
        } else {
          // address bar doesn't show /adduser
          res.location("userlist");
          res.redirect("userlist");
        }
      });
    }
  });


});

module.exports = router;
