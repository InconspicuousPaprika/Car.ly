var db = require('../../db/index.js');

module.exports = {
  post: function(user, callback) {
    var queryUser = 'insert into Users (email, password) values ("'+ user.email +'", "'+ user.password +'")';
    db.query(queryUser, callback);
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