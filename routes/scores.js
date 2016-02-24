var express = require('express');
var router = express.Router();

var rcli = require('../db.js');

// middleware that is specific to this router

// Checking if the user is logged in
router.use(function (req, res, next) {
  console.log('checking if user has permissions to use scores');
  next();
});

// middleware routes

router.get('/', function (req, res) {
  var score = rcli.get('score', function(err, data) {
    res.send('score: ' + data);
  });
});

// TODO: Get the username from the login
router.post('/', function (req, res) {
  rcli.zadd(['scores', req.body.score, req.body.name], function(err, data) {
    console.log('added ' + data + ' item');
    res.send('added ' + data + ' item');
  });
});

router.put('/', function (req, res) {
  res.send('PUT score');
});


module.exports = router;
