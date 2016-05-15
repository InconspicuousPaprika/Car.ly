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
    Favorite.delete(car, function(err, favorite) {
      // if (favorite.affectedRows === 0) {
      //   return res.status(409).send('That favorite does not exist');
      // } 
      res.status(201).send('Removed from favorites'); 
    });
  },

  fetchFavorites: function(req, res, next) {
    var users_email = req.params.users_email;
    console.log("req.params in fetchFavorites", req.params.users_email);

    Favorite.retrieve(users_email, function(err, foundFavorites) {
      if(err) {
        return res.json(err);
      }
      
      if(!foundFavorites) {
        return res.status(403).send('Invalid ID');
      }

      res.status(201).json({favorites: foundFavorites});
    });
  }
}









