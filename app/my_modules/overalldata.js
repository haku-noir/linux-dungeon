var db = require('./db');

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

module.exports = {
  getScores,
  getAscScores,
  getDescScores
};
