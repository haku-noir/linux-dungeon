var express = require('express');
var router = express.Router();
var ud = require('../my_modules/userdata');

router.post('/', function(req, res, next) {
  const user = req.body.user;

  ud.getScore(user)
    .then((score) => {
      res.render('dungeon', {user, score});
    });
});

module.exports = router;
