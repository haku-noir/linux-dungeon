var db = require('./db');

module.exports = {
  getUid: (user) => new Promise((resolve) => {
    db.query("SELECT uid FROM users_datas where user=?;", user, (err, rows) => {
      resolve(rows[0].uid);
    });
  }),
  getUser: (uid) => new Promise((resolve) => {
    db.query("SELECT user FROM users_datas where uid=?;", uid, (err, rows) => {
      resolve(rows[0].user);
    });
  }),
  getScore: (req) => new Promise((resolve) => {
    if(typeof req == "string"){
      db.query("SELECT s.score FROM users_datas AS d, users_scores AS s where d.uid=s.uid AND d.user=?;", req, (err, rows) => {
        resolve(rows[0].score);
      });
    }else{
      db.query("SELECT score FROM users_scores where uid=?;", req, (err, rows) => {
        resolve(rows[0].score);
      });
    }
  })
};