var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.render('question');
});

router.post('/answer', function(req, res, next) {
  res.render('answer-correct');
});

module.exports = router;
