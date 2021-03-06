var express = require('express');
var router = express.Router();
var db = require('../my_modules/db');

router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/', function(req, res, next) {
    const user = req.body.user;
    const pass = req.body.pass;

    if (req.body.exit) {
        res.render('start', { user });
    } else if (req.body.registration) {
        if (user == 'root') {
            let em = "rootはつかえませんんんんん";
            res.render('registration', { em });
            console.log('rootを使う不届き者がいました');
        } else {
            db.query("SELECT user FROM users_datas where user=?; ", [user], (error, result) => {
                if (result[0]) {
                    let em = "既にユーザが存在します。";
                    res.render('registration', { em });
                    console.log('ユーザは既に存在します。存在するユーザ' + user);
                } else {
                    db.query("INSERT INTO users_datas (user,pass) VALUES( ? , ? );", [user, pass], (error, result) => {
                        console.log(result);
                        res.render('start', { user });
                    })
                }
            })
        }
    } else {
        db.query("SELECT user, pass FROM users_datas where user = ? AND pass = ?;", [user, pass], (error, result) => {
            console.log(result);　
            if (result[0]) {
                console.log('ログイン成功!!')
                console.log('成功したユーザ名 :' + user + '成功したパスワード :' + pass)
                res.render('start', { user });
            } else {
                let em1 = "ユーザ名またはパスワード間違っています。";
                res.render('login', { em1 });
                console.log('ログイン失敗、、');
                console.log('失敗したユーザ名 :' + user + '失敗したパスワード :' + pass)
            }
        })
    }
});

module.exports = router;
