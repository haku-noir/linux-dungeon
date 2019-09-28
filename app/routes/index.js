var express = require('express');
var router = express.Router();
var db = require('../my_modules/db');

router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/', function(req, res, next) {
    user = req.body.user;
    pass = req.body.pass;

    if (req.body.registration) {
        db.query("INSERT INTO users_datas (user,pass) VALUES( ? , ? );", [user, pass], (error, result) => {
            console.log(result);　
            res.render('start', { user });
        })
    } else {
        db.query("SELECT user, pass FROM users_datas where user = ? AND pass = ?;", [user, pass], (error, result) => {
            console.log(result);　
            if (result[0]) {
                console.log('ログイン成功!!')
                console.log('成功したユーザ名 :' + user + '成功したパスワード :' + pass)
                res.render('start', { user });
            } else {
                res.redirect('login');
                console.log('ログイン失敗、、');
                console.log('失敗したユーザ名 :' + user + '失敗したパスワード :' + pass)
            }
        })
    }
});

module.exports = router;
