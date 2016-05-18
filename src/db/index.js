var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'carly'
});

connection.connect();

module.exports = connection;
