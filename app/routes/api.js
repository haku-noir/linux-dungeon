var express = require('express');
var router = express.Router();
var ud = require('../my_modules/userdata');

router.get('/userdata', function(req, res, next) {
  ud.getData(parseInt(req.query.uid) || req.query.user)
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

module.exports = router;
