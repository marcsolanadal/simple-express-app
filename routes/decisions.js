var express = require('express');
var router = express.Router();

// middleware that is specific to this router

router.use(function (req, res, next) {
  console.log('Checking if the user has permissions to use decisions');
  next();
});

// middleware routes

router.get('/:id', function (req, res) {
  var id = req.params.id;
  res.send('getting decision with id ' + id);
});

router.post('/', function (req, res) {
  res.send('POST decision');
});

router.put('/', function (req, res) {
  res.send('PUT decision');
});


module.exports = router;
