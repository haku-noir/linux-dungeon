var express = require('express');
var router = express.Router();
var db = require('../my_modules/db');
var ud = require('../my_modules/userdata');
var od = require('../my_modules/overalldata');

router.post('/', function(req, res, next) {
  const user = req.body.user;
  const did = req.body.did;
  var userdata;

  Promise.resolve()
    .then(() => ud.setDid(user, did))
    .then(() => ud.getData(user))
    .then((data) => {
      userdata = data;
      return od.checkAchievedEvent(user, did);
    })
    .then((achieved) => {
      if(achieved){
        res.render('achieved-event', userdata);
      }else{
        od.getQuestion(did)
          .then((question) => {
            res.render('question', {...userdata, stage: question.stage, que: question.que});
          });
      }
    });
});

router.post('/answer', function(req, res, next) {
  const user = req.body.user;
  const did = req.body.did;
  const ans = req.body.ans;

  od.checkAnswer(did, ans)
    .then((score) => {
      if(score){
        Promise.resolve()
          .then(() => od.addAchiever(user, did))
          .then(() => ud.addScore(user, score))
          .then(() => ud.getData(user))
          .then((data) => {
            res.render('answer-correct', data);
          });
      }else{
        ud.getData(user)
          .then((data) => {
            res.render('answer-incorrect', data);
          });
      }
    });
});

module.exports = router;
