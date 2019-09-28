var express = require('express');
var router = express.Router();
var db = require('../my_modules/db');

router.post('/', function(req, res, next) {
  const did = req.body.did;
  db.query("SELECT q.qid, q.path, q.que FROM dungeon_rooms AS d, questions_datas AS q WHERE d.qid=q.qid AND d.did = ?;", [did], (err, rows) => {
    console.log(rows[0]);
    res.render('question', {qid: rows[0].qid, path: rows[0].path, que: rows[0].que});
  });
});

router.post('/answer', function(req, res, next) {
  res.render('answer-correct');
});

module.exports = router;
