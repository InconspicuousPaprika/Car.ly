var carRouter = require('express').Router();
var userController = require('./controllers/userController.js');

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

module.exports = carRouter;