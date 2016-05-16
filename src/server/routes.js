var carRouter = require('express').Router();
var userController = require('./controllers/userController.js');
var favoriteController = require('./controllers/favoriteController.js');

// module.exports = function(app) {
//   app.post('/api/users', userController.createOne);
//   app.post('/api/users/login', userController.verifyLogin);
// }

carRouter.route('/users') 
  .post(userController.createOne)

carRouter.route('/users/login')
  .post(userController.verifyLogin)

carRouter.route('/users/getID')
  .post(userController.getUserID)

carRouter.route('/favorites')
  .post(favoriteController.createOne)

carRouter.route('/favorites')
  .delete(favoriteController.deleteOne)

carRouter.route('/favorites/:users_email')
  .get(favoriteController.fetchFavorites)

module.exports = carRouter;