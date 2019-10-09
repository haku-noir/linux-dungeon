var db = require('./db');

getScores = () => new Promise((resolve) => {
  db.query("SELECT d.uid, user, score FROM users_scores AS s , users_datas AS d WHERE s.uid=d.uid;", (err, rows) => {
    resolve(rows);
  });
});

module.exports = {
  getScores
};
