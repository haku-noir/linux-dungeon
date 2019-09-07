var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  user = req.body.user;
  pass = req.body.pass;

  if(req.body.registration){
    console.log(`REGISTRATION user: ${user}, pass:${pass}`);
  }else{
    console.log(`LOGIN user: ${user}, pass:${pass}`);
  }
  res.render('start', {user});
});

module.exports = router;
