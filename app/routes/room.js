var express = require('express');
var router = express.Router();
var db = require('../my_modules/db');
var ud = require('../my_modules/userdata');

router.post('/', function(req, res, next) {
  const user = req.body.user;
  const did = req.body.did;

  db.query("SELECT d.did, q.path, q.que FROM dungeon_rooms AS d, questions_datas AS q WHERE d.qid=q.qid AND d.did = ?;", did, (err, rows) => {
    ud.getScore(user)
      .then((score) => {
        console.log(rows[0]);
        res.render('question', {user, score, did: rows[0].did, path: rows[0].path, que: rows[0].que});
      });
  });
});

router.post('/answer', function(req, res, next) {
  const user = req.body.user;
  const did = req.body.did;
  const ans = req.body.ans;

  db.query("SELECT d.did, q.ans, d.score FROM dungeon_rooms AS d, questions_datas AS q WHERE d.qid=q.qid AND d.did = ?;", did, (err, rows) => {
    console.log(rows[0]);
    if(rows[0].ans === ans){
      Promise.resolve()
        .then(() => ud.addScore(user, rows[0].score))
        .then(() => ud.getScore(user))
        .then((score) => {
          res.render('answer-correct', {user, score, did: rows[0].did});
        });
    }else{
      ud.getScore(user)
        .then((score) => {
          res.render('answer-incorrect', {user, score, did: rows[0].did});
        });
    }
  });
});

module.exports = router;
