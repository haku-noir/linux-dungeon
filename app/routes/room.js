var express = require('express');
var router = express.Router();
var db = require('../my_modules/db');

router.post('/', function(req, res, next) {
  const did = req.body.did;

  db.query("SELECT d.did, q.path, q.que FROM dungeon_rooms AS d, questions_datas AS q WHERE d.qid=q.qid AND d.did = ?;", did, (err, rows) => {
    console.log(rows[0]);
    res.render('question', {did: rows[0].did, path: rows[0].path, que: rows[0].que});
  });
});

router.post('/answer', function(req, res, next) {
  const did = req.body.did;
  const ans = req.body.ans;

  db.query("SELECT d.did, q.ans FROM dungeon_rooms AS d, questions_datas AS q WHERE d.qid=q.qid AND d.did = ?;", did, (err, rows) => {
    console.log(rows[0]);
    if(rows[0].ans === ans){
      res.render('answer-correct', {did: rows[0].did});
    }else{
      res.render('answer-incorrect', {did: rows[0].did});
    }
  });
});

module.exports = router;
