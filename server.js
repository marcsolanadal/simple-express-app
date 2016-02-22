var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Check valid user for all requests
app.use(function (req, res, next) {
  console.log('checking if the user is correct');
  next();
});

// Routes
app.use('/login', require('./routes/login'));
app.use('/scores', require('./routes/scores'));
app.use('/decisions', require('./routes/decisions'));

// Server configuration
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
