var User = require ('../models/userModel.js');
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

module.exports = {
  createOne: function(req, res) {
    var user = req.body;
    var email = user.email;
    var password = user.password;
    User.post(user, function(err, person) {
      if (person.affectedRows === 0) {
        return res.status(409).send('That email already exists');
      } 
      res.status(201).send('Welcome!'); 
    });
  },

  verifyFBLogin: function(req, res) {
    var userCredentials = req.body;
    console.log('BODY', userCredentials);
    User.FBLogin(userCredentials, function(err, user) {
      if (user.affectedRows === 0) {
        return res.status(201).send({message: 'You already have an account'})
      }
      res.status(201).send({message: 'Thanks for signing up!'})
    })
  },

  verifyLogin: function(req, res, next) {
    var user = req.body;
    var password = user.password;

    User.login(user, function(err, foundUser) {
      if(err) {
        return res.json(err);
      }
      
      if(!foundUser) {
        return res.status(403).send({success: foundUser, message: 'Invalid email or password'});
      }
      var token = jwt.encode(user, 'secret');
      res.status(201).json({token: token, success: foundUser});
    });

    //   res.json();
    //   if (!err) {
    //     if (foundUser.length === 0) {
    //       res.sendStatus(404);
    //     } else {
    //       var token = jwt.encode(user, 'secret');
    //       res.json({token: token, user: foundUser});
    //     }
    //   } else {
    //     res.json(err);
    //   }
    // });
  },

  getUserID: function(req, res, next) {
    var user = req.body;
    var email = user.email;
    console.log("in getUserID, email: ", email);

    User.getID(user, function(err, foundUser) {
      if(err) {
        return res.json(err);
      }
      
      if(!foundUser) {
        return res.status(403).send('Invalid email or password');
      }
      console.log("foundUser", foundUser.id);
      res.status(201).json({id: foundUser.id});
    });
  },
}









