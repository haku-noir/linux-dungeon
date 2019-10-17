var express = require('express');
var router = express.Router();
var ud = require('../my_modules/userdata');
var od = require('../my_modules/overalldata');

router.get('/userdata', function(req, res, next) {
  ud.getData(parseInt(req.query.uid) || req.query.user)
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

router.get('/score', function(req, res, next) {
  od.getDescScores()
    .then((datas) => {
      console.log(datas);
      res.json(datas);
    });
});

module.exports = router;
