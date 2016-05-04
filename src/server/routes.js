var userController = require('./controllers/userController.js');

module.exports = function(app) {
  app.post('/api/users/signup', userController.signup);
}