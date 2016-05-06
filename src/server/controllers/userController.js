var User = require ('../models/userModel.js');
var jwt = require('jwt-simple');

module.exports = {
  signup: function(req, res) {
    var user = req.body;
    User.post(user, function(err, createdUser) {
      if(err) {
        return res.json(err);
      }
      res.status(201).json(createdUser);
    });
  },

  login: function(req, res, next) {
    var user = req.body;
    console.log('BODY', user);
    User.get(user, function(err, results) {
      // If err
      // If results.length 0

      // default: send token and user

      if (!err) {
        console.log('Login results', results);
        if (results.length === 0) {
          res.sendStatus(404);
        } else {
          var token = jwt.encode(user, 'secret');
          res.json({token: token, user: results});
        }
      } else {
        res.json(err);
      }
    });
  }
}