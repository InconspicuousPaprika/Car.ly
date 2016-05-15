var db = require('../../db/index.js');

module.exports = {

  post: function(car, callback) {
    console.log("inside post, car: ", car);
    var checkIfFavoriteExists = 'Insert IGNORE into Favorites (users_email, image, make, model, year, price) VALUES ("' + car.users_email + '", "' + car.image + '", "' + car.make + '", "' + car.model + '", "' + car.year + '", "' + car.price + '")';
    db.query(checkIfFavoriteExists, function(err, favorite) {
      console.log("inside db.query, favorite check");
      console.log(favorite);
      console.log("err", err);
      callback(err, favorite);
    })
  },

  delete: function(car, callback) {
    console.log(car.id);
    var deleteFavorite = 'DELETE FROM Favorites WHERE id = ' + car.id;
    console.log(deleteFavorite);
    db.query(deleteFavorite, function(err, favorite) {
      callback(err, favorite);
    })
  },

  retrieve: function(users_email, callback) {
    console.log("inside retrieve, users_email: ", users_email);
    var findUserFavorites = 'Select id, users_email, image, make, model, year, price from Favorites where users_email = "'+ users_email + '"';
    db.query(findUserFavorites, function(err, favorites) {
      console.log("inside db.query, favorites retrieve");
      console.log(favorites);
      console.log("err", err);
      callback(err, favorites);
    })
  },


  login: function (user,callback) {

    var queryUser = 'Select email, password from Users where email= "' + user.email + '"';
  
    db.query(queryUser, function(err, userData) {
      console.log('USER', userData);
      if(userData.length === 0) {
        return callback(null, false);
      }
        bcrypt.compare(user.password, userData[0].password, function(err, isMatch) {
          if (err) {
            callback(err);
          } else if (isMatch) {
              console.log('MATCHED', isMatch);
              callback(null, isMatch);
          } else {
              console.log('password doesnt match');
              callback(null, isMatch);
            }
        });
    });
  },
  getID: function (user, callback) {
    var Queryid = 'Select id from Users where email = "' + user.email + '"';
    db.query(Queryid, function(err, id) {
      console.log('USERS ID', id);
      if (err) {
        callback(err);
      } else {
        console.log('USERS packet', id);
        console.log('USERS ID string', JSON.stringify(id));
        console.log('parsed USERS ID string', JSON.parse(JSON.stringify(id))[0]);
        callback(null, JSON.parse(JSON.stringify(id))[0]);
      }
    });
  }
}

// Insert into Users (email, password) select * from (select "test3@ts.com", "password1") AS temp where not exists(select id from Users where email = "test3@ts.com") LIMIT 1;