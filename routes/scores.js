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

router.get('/:id', function (req, res) {
  var id = req.params.id;
  res.send('getting score with id ' + id);
});

router.post('/', function (req, res) {
  res.send('POST score');
});

router.put('/', function (req, res) {
  res.send('PUT score');
});


module.exports = router;
