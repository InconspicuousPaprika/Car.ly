var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-04.cleardb.net',
  user: 'b6684b5c440935',
  password: 'e18bc25d',
  database: 'heroku_de74eb90197ead9'
});


connection.connect();

module.exports = connection;
