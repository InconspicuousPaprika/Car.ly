var express = require('express');
var routes = require('./routes.js')
var port = process.env.PORT || 3000;
var db = require('../db/index.js');

var app = express();

var carRouter = require('./routes.js');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/carly', carRouter);

app.listen(port, function() {
  console.log("Listening on port " + port);
})

module.exports = app;