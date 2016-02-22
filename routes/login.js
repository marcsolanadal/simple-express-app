var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// POST /login gets urlencoded bodies
router.post('/login', function (req, res) {
//  if (!req.body) return res.sendStatus(400);
//  console.log(req.body);
  //if (req.body.pass === '1234') {
  //  console.log(req.body);
  //  res.send('welcome, ' + req.body.user);
  //} else {
  //  res.sendStatus(500);
  //}

});

module.exports = router;
