var db = require('../../db/index.js');
var bcrypt = require('bcrypt');

module.exports = {

  post: function(user, callback) {
    var password = user.password;
    // bcrypt.genSalt(10, function(err, salt) {
    //   if(err) {
    //     return console.error(err);
    //   }
      bcrypt.hash(password, 10, function(err, hash) {
        if(err) {
          return console.error(err)
        }
        user.password = hash;
        var checkIfUserExists = 'Insert into Users (email, password) select * from (select "' + user.email +'", "' + user.password + '") AS temp where not exists(select id from Users where email = "' + user.email +'") LIMIT 1';
        db.query(checkIfUserExists, function(err, person) {
          callback(err, person);
        })
      });
  },
  login: function (user,callback) {

    var queryUser = 'Select email, password from Users where email= "' + user.email + '"';
  
    db.query(queryUser, function(err, userData) {
      console.log('USER', userData);
      if(userData.length === 0) {
        return callback(null, false);
      }
        bcrypt.compare(user.password, userData[0].password, function(err, isMatch) {
          if (err) {
            callback(err);
          } else if (isMatch) {
              console.log('MATCHED', isMatch);
              callback(null, isMatch);
          } else {
              console.log('password doesnt match');
              callback(null, isMatch);
            }
        });
    });
  }
}

// Insert into Users (email, password) select * from (select "test3@ts.com", "password1") AS temp where not exists(select id from Users where email = "test3@ts.com") LIMIT 1;