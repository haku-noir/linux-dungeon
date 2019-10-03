var db = require('./db');

module.exports = {
  getUid: (user) => {
    db.query("SELECT uid FROM users_datas where user=?;", user, (err, rows) => {
      return rows[0].uid;
    });
  }
};
