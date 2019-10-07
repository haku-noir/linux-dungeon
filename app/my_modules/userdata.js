var db = require('./db');

getUid = (req) => new Promise((resolve) => {
  if(typeof req == "string"){
    db.query("SELECT uid FROM users_datas where user=?;", req, (err, rows) => {
      resolve(rows[0].uid);
    });
  }else{
    resolve(req);
  }
});

getUser = (req) => new Promise((resolve) => {
  if(typeof req == "string"){
    resolve(req);
  }else{
    db.query("SELECT user FROM users_datas where uid=?;", req, (err, rows) => {
      resolve(rows[0].user);
    });
  }
});

getScore = (req) => new Promise((resolve) => {
  if(typeof req == "string"){
    db.query("SELECT s.score FROM users_datas AS d, users_scores AS s where d.uid=s.uid AND d.user=?;", req, (err, rows) => {
      resolve(rows[0].score);
    });
  }else{
    db.query("SELECT score FROM users_scores where uid=?;", req, (err, rows) => {
      resolve(rows[0].score);
    });
  }
});

addScore = (req, score) => new Promise((resolve) => {
  if(typeof req == "string"){
    db.query("UPDATE users_scores As s, (SELECT d.uid, d.user FROM users_datas AS d , users_scores AS s where d.uid=s.uid) AS ds set s.score=s.score+? where s.uid=ds.uid AND ds.user=?;", [score, req], (err, rows) => {
      resolve();
    });
  }else{
    db.query("UPDATE users_scores set score=score+? where uid=?;", [score, req], (err, rows) => {
      resolve();
    });
  }
});

getDid = (req) => new Promise((resolve) => {
  if(typeof req == "string"){
    db.query("SELECT l.did FROM users_datas AS d, users_locations AS l where d.uid=l.uid AND d.user=?;", req, (err, rows) => {
      console.log("DID" + rows[0].did)
      resolve(rows[0].did);
    });
  }else{
    db.query("SELECT did FROM users_locations where uid=?;", req, (err, rows) => {
      resolve(rows[0].did);
    });
  }
});

setDid = (req, did) => new Promise((resolve) => {
  if(typeof req == "string"){
    db.query("UPDATE users_locations As l, (SELECT d.uid, d.user FROM users_datas AS d , users_locations AS l where d.uid=l.uid) AS dl set l.did=? where l.uid=dl.uid AND dl.user=?;", [did, req], (err, rows) => {
      resolve();
    });
  }else{
    db.query("UPDATE users_locations set did=? where uid=?;", [did, req], (err, rows) => {
      resolve();
    });
  }
});

getData = (req) => new Promise((resolve) => {
  let data = {};

  Promise.resolve()
    .then(() => getUid(req))
    .then((uid) => {
      data.uid = uid;
      return getUser(uid);
    })
    .then((user) => {
      data.user = user;
      return getScore(data.uid);
    })
    .then((score) => {
      data.score = score;
      return getDid(data.uid);
    })
    .then((did) => {
      data.did = did;
      resolve(data);
    });
});


module.exports = {
  getUid,
  getUser,
  getScore,
  addScore,
  getDid,
  setDid,
  getData
};
