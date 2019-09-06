var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/registration', function(req, res, next) {
  res.render('registration');
});

router.post('/registration', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
