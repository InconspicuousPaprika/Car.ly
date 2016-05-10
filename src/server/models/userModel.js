var db = require('../../db/index.js');
var bcrypt = require('bcrypt');

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
  },
  login: function (user,callback) {
    var queryUser = 'Select email from Users where email = "'+ user.email +'" and password = "'+user.password+'"';
    var Querypassword = 'Select password from Users where email = "' + user.email + '"';
    
    bcrypt.compare(user.password, hash, function(err, res) {
      console.log(hash);
      if (err) {
        console.log(err)
      }
      console.log('res', res);
    });
      

        
        
        // bcrypt.hash(user.password, salt, function(err, hash) {
        //   console.log("US", user.password)
        //   user.password = hash;
        //   console.log('hashed', user.password);
        // })
    // db.query(query, function(err, results) {
    //   if (err) {
    //     // do a bunch of other stuff if theres an error
    //     // send an email to devops using nodemailer...
    //     return callback(err);
    //   }
    //   callback(null, results);
    // });
  }
}

// Insert into Users (email, password) select * from (select "test3@ts.com", "password1") AS temp where not exists(select id from Users where email = "test3@ts.com") LIMIT 1;