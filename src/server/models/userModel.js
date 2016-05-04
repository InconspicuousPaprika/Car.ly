var db = require('../../db/index.js');

module.exports = {
  users: {
    post: function(user, callback) {
      var queryUser = 'insert into Users (email, password) values ("'+ user.email +'", "'+ user.password +'")';
      db.query(queryUser, function(err, results) {
        callback(err, results);
      });
    }
  }
}