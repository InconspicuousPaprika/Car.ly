var User = require ('../models/userModel.js');

module.exports = {
  signup: function(req, res, next) {
    var user = req.body;
    console.log(user, 'user');
    User.users.post(user, function(err, results) {
      if(!err) {
        res.json(201); 
      } else {
        res.json(err);
      }
    });
  }
}