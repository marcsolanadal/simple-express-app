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

router.post('/', function (req, res) {
  //rcli.zadd(user, function(err, data) {
  var score = req.body.score;
  rcli.set('score', score);
  res.send('POST score ' + score);
});

router.put('/', function (req, res) {
  res.send('PUT score');
});


module.exports = router;
