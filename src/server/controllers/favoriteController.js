var Favorite = require ('../models/favoriteModel.js');


module.exports = {
  createOne: function(req, res) {
    var car = req.body;
    Favorite.post(car, function(err, favorite) {
      if (favorite.affectedRows === 0) {
        return res.status(409).send('That favorite already exists');
      } 
      res.status(201).send('Saved to favorites'); 
    });
  },

  deleteOne: function(req, res) {
    var car = req.body;
    Favorite.remove(car, function(err, favorite) {
      if (favorite.affectedRows === 0) {
        return res.status(409).send('That favorite does not exist');
      } 
      res.status(201).send('Removed from favorites'); 
    });
  },

  verifyLogin: function(req, res, next) {
    var user = req.body;
    var password = user.password;
    var token = jwt.encode(user, 'secret');

    User.login(user, function(err, foundUser) {
      if(err) {
        return res.json(err);
      }
      
      if(!foundUser) {
        return res.status(403).statusText('verifyLogin').send('Invalid email or password');
      }

      res.status(201).statusText('verifyLogin').json({token: token, success: foundUser});
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









