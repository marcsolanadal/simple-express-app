var express = require('express');
var router = express.Router();

// middleware that is specific to this router

router.use(function (req, res, next) {
  console.log('checking if user has permissions to use scores');
  next();
});

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// middleware routes

router.get('/', function (req, res) {
  res.send('GET score');
});

router.post('/', function (req, res) {
  var score = req.body.score;
  console.log('score: ' + score);
  res.send('POST score ' + score);
});

router.put('/', function (req, res) {
  res.send('PUT score');
});


module.exports = router;
