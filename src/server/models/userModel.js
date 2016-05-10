var db = require('../../db/index.js');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

module.exports = {

  post: function(user, callback) {
    var password = user.password;
    bcrypt.genSalt(10, function(err, salt) {
      if(err) {
        return console.error(err);
      }
      bcrypt.hash(password, salt, function(err, hash) {
        if(err) {
          return console.error(err)
        }
        user.password = hash;
        var checkIfUserExists = 'Insert into Users (email, password) select * from (select "' + user.email +'", "' + user.password + '") AS temp where not exists(select id from Users where email = "' + user.email +'") LIMIT 1';
        db.query(checkIfUserExists, function(err, person) {
          callback(err, person);
        })
      });
    });
    
    // db.query(checkIfUserExists, function(err, person) {
    //  callback(err, person);
    // });
    // var queryUser = 'intonsert into Users (email, password) values ("'+ user.email +'", "'+ user.password +'")';
    // db.query(queryUser, function(err, person) {
    //   if (err) {
    //     return callback(err)
    //   }
    //   callback(null, person);
    // });
  },
  get: function (user,callback) {
    var query = 'Select email from Users where email = "'+ user.email +'" and password = "'+user.password+'"';
    db.query(query, function(err, results) {
      if (err) {
        // do a bunch of other stuff if theres an error
        // send an email to devops using nodemailer...
        return callback(err);
      }
      callback(null, results);
    });
  }
}

// Insert into Users (email, password) select * from (select "test3@ts.com", "password1") AS temp where not exists(select id from Users where email = "test3@ts.com") LIMIT 1;