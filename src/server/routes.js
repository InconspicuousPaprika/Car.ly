var userController = require('./controllers/userController.js');

module.exports = function(app) {
  app.post('/api/users', userController.signup);
  app.post('/api/users/login', userController.login);
}