var express = require('express');
var router = express.Router();
var ud = require('../my_modules/userdata');

router.post('/', function(req, res, next) {
  ud.getData(req.body.user)
    .then((data) => {
      console.log(data);
      res.render('dungeon', data);
    });
});

module.exports = router;
