var User = require ('../models/userModel.js');
var jwt = require('jwt-simple');

module.exports = {
  createOne: function(req, res) {
    var user = req.body;
    User.post(user, function(err, createdUser) {
      if(err) {
        return res.json(err);
      }
      res.status(201).json(createdUser);
    });
  },

  verifyLogin: function(req, res, next) {
    var user = req.body;
    console.log('BODY', user);
    User.post(user, function(err, foundUser) {
      // If err
      // If foundUser.length 0

      // default: send token and user

      if(err) {
        return res.json(err);
      } 
      if (foundUser.length === 0) {
        res.sendStatus(404);
      }
      var token = jwt.encode(user, 'secret');
      res.json({token: token, user: foundUser});
      // if (!err) {
      //   if (foundUser.length === 0) {
      //     res.sendStatus(404);
      //   } else {
      //     var token = jwt.encode(user, 'secret');
      //     res.json({token: token, user: foundUser});
      //   }
      // } else {
      //   res.json(err);
      // }
    });
  }
}