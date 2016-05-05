var User = require ('../models/userModel.js');

module.exports = {
  signup: function(req, res, next) {
    var user = req.body;
    User.users.post(user, function(err, results) {
      if(!err) {
        res.json(201); 
      } else {
        res.json(err);
      }
    });
  },

  login: function(req, res, next) {
    var user = req.body;
    console.log('BODY', user);
    User.users.get(user, function(err, results) {
      if (!err) {
        console.log('Login results', results);
        if (results.length === 0) {
          res.json(404);
        } else {
          res.json(results);
        }
      } else {
        res.json(err);
      }
    });
  }
}