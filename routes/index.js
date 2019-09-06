var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Linux Dungeon' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Linux Dungeon' });
});

module.exports = router;
