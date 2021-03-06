var db = require('./db');
var ud = require('./userdata');

getScores = () => new Promise((resolve) => {
  db.query("SELECT d.uid, user, score FROM users_scores AS s , users_datas AS d WHERE s.uid=d.uid;", (err, rows) => {
    resolve(rows);
  });
});

getAscScores = () => new Promise((resolve) => {
  db.query("SELECT d.uid, user, score FROM users_scores AS s , users_datas AS d WHERE s.uid=d.uid ORDER BY score ASC;", (err, rows) => {
    resolve(rows);
  });
});

getDescScores = () => new Promise((resolve) => {
  db.query("SELECT d.uid, user, score FROM users_scores AS s , users_datas AS d WHERE s.uid=d.uid ORDER BY score DESC;", (err, rows) => {
    resolve(rows);
  });
});

getQuestion = (did) => new Promise((resolve) => {
  db.query("SELECT d.did, q.stage, q.que FROM dungeon_rooms AS d, questions_datas AS q WHERE d.qid=q.qid AND d.did = ?;", did, (err, rows) => {
    resolve(rows[0]);
  });
});

checkAnswer = (did, ans) => new Promise((resolve) => {
  db.query("SELECT q.ans, d.score FROM dungeon_rooms AS d, questions_datas AS q WHERE d.qid=q.qid AND d.did = ?;", did, (err, rows) => {
    if(rows[0].ans === ans){
      resolve(rows[0].score);
    }else{
      resolve(0);
    }
  });
});

addAchiever = (req, did) => new Promise((resolve) => {
  ud.getUid(req)
    .then((uid) => {
      db.query("INSERT INTO achievers_events (uid, did) VALUES( ? , ? );", [uid, did], (err, rows) => {
        resolve();
      });
    });
});

getAchievedEvents = (req) => new Promise((resolve) => {
  if(typeof req == "string"){
    db.query("SELECT a.did FROM users_datas AS d, achievers_events AS a WHERE d.uid=a.uid AND d.user=?;", req, (err, rows) => {
      resolve(rows);
    });
  }else{
    db.query("SELECT did FROM achievers_events WHERE uid=?;", req, (err, rows) => {
      resolve(rows);
    });
  }
});

checkAchievedEvent = (req, did) => new Promise((resolve) => {
  if(typeof req == "string"){
    db.query("SELECT * FROM users_datas AS d, achievers_events AS a WHERE d.uid=a.uid AND d.user=? AND a.did=?;", [req, did], (err, rows) => {
      if(rows && rows.length){
        resolve(true);
      }else{
        resolve(false);
      }
    });
  }else{
    db.query("SELECT * FROM achievers_events WHERE uid=? AND did=?;", [req, did], (err, rows) => {
      if(rows && rows.length){
        resolve(true);
      }else{
        resolve(false);
      }
    });
  }
});

getTreasure = (did) => new Promise((resolve) => {
  db.query("SELECT * FROM dungeon_treasures AS d, treasures_datas AS t WHERE d.tid=t.tid AND d.did=?;", did, (err, rows) => {
    resolve(rows[0]);
  });
});

getTreasureList = (req) => new Promise((resolve) => {
  if(typeof req == "string"){
    db.query("SELECT * FROM dungeon_treasures AS d JOIN achievers_events AS a JOIN treasures_datas AS t JOIN users_datas AS u ON d.did=a.did AND d.tid=t.tid AND a.uid=u.uid AND user=?;", req, (err, rows) => {
      resolve(rows);
    });
  }else{
    db.query("SELECT * FROM dungeon_treasures AS d JOIN achievers_events AS a JOIN treasures_datas AS t ON d.did=a.did AND d.tid=t.tid AND uid=?;", req, (err, rows) => {
      resolve(rows);
    });
  }
});

module.exports = {
  getScores,
  getAscScores,
  getDescScores,
  getQuestion,
  checkAnswer,
  addAchiever,
  getAchievedEvents,
  checkAchievedEvent,
  getTreasure,
  getTreasureList
};
