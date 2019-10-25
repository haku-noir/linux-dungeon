var express = require('express');
var router = express.Router();
var ud = require('../my_modules/userdata');
var od = require('../my_modules/overalldata');

router.get('/userdata', function(req, res, next) {
  ud.getData(parseInt(req.query.uid) || req.query.user)
    .then((data) => {
      res.json(data);
    });
});

router.get('/score', function(req, res, next) {
  od.getDescScores()
    .then((datas) => {
      res.json(datas);
    });
});

router.get('/treasure', function(req, res, next) {
  od.getTreasure(req.query.did)
    .then((datas) => {
      res.json(datas);
    });
});

router.post('/treasure', function(req, res, next) {
  const user = req.body.user;
  const did = req.body.did;

  Promise.resolve()
    .then(() => ud.setDid(user, did))
    .then(() => od.checkAchievedEvent(user, did))
    .then((achieved) => {
      if(achieved){
        res.json({});
      }else{
        Promise.resolve()
          .then(() => od.addAchiever(user, did))
          .then(() => od.getTreasure(did))
          .then((datas) => {
            res.json(datas);
          });
      }
    });
});

router.get('/treasurelist', function(req, res, next) {
  od.getTreasureList(parseInt(req.query.uid) || req.query.user)
    .then((datas) => {
      res.json(datas);
    });
});

module.exports = router;
