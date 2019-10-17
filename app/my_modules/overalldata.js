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

addAchiever = (req, did) => new Promise((resolve) => {
  if(typeof req == "string"){
    ud.getUid(req)
      .then((uid) => {
        db.query("INSERT INTO achievers_events (uid, did) VALUES( ? , ? );", [uid, did], (err, rows) => {
          resolve();
        });
      });
  }else{
    db.query("INSERT INTO achievers_events (uid, did) VALUES( ? , ? );", [req, did], (err, rows) => {
      resolve();
    });
  }
});

module.exports = {
  getScores,
  getAscScores,
  getDescScores,
  addAchiever
};
