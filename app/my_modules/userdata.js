var db = require('./db');

module.exports = {
  getUid: (user) => {
    db.query("SELECT uid FROM users_datas where user=?;", user, (err, rows) => {
      console.log(user + " " + rows[0].uid);
      return rows[0].uid;
    });
  },
  getUser: (uid) => {
    db.query("SELECT user FROM users_datas where uid=?;", uid, (err, rows) => {
      return rows[0].user;
    });
  }
};
