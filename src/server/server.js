var express = require('express');
var port = process.env.PORT || 3000;
var db = require('../db/index.js');

var app = express();

app.listen(port, function() {
  console.log("Listening on port " + port);
})