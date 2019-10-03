var express = require('express');
var router = express.Router();
var ud = require('../my_modules/userdata');

router.post('/', function(req, res, next) {
  res.render('dungeon', {user: req.body.user});
});

module.exports = router;
