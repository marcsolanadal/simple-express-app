var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Parsers
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var login = require('./routes/login');
var scores = require('./routes/scores');
var decisions = require('./routes/decisions');

// Check valid user for all requests
app.use(function (req, res, next) {
  console.log('checking if the user is correct');
  next();
});

// Routes
app.use('/login', login);
app.use('/scores', scores);
app.use('/decisions', decisions);


// Server configuration
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
