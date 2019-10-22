var express = require('express');
var router = express.Router();
var db = require('../my_modules/db');
var ud = require('../my_modules/userdata');
var od = require('../my_modules/overalldata');

router.post('/', function(req, res, next) {
  const user = req.body.user;
  const did = req.body.did;

  db.query("SELECT d.did, q.path, q.que FROM dungeon_rooms AS d, questions_datas AS q WHERE d.qid=q.qid AND d.did = ?;", did, (err, rows) => {
    Promise.resolve()
      .then(() => ud.setDid(user, did))
      .then(() => ud.getData(user))
      .then((data) => {
        od.checkAchievedEvent(user, did)
          .then((achieved) => {
            if(achieved){
              res.render('achieved-event', data);
            }else{
              res.render('question', {...data, path: rows[0].path, que: rows[0].que});
            }
          });
      });
  });
});

router.post('/answer', function(req, res, next) {
  const user = req.body.user;
  const did = req.body.did;
  const ans = req.body.ans;

  db.query("SELECT q.ans, d.score FROM dungeon_rooms AS d, questions_datas AS q WHERE d.qid=q.qid AND d.did = ?;", did, (err, rows) => {
    console.log(rows[0]);
    if(rows[0].ans === ans){
      Promise.resolve()
        .then(() => od.addAchiever(user, did))
        .then(() => ud.addScore(user, rows[0].score))
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
