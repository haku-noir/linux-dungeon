var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/', function(req, res, next) {
    user = req.body.user;
    pass = req.body.pass;

    const db = mysql.createConnection({
        host: process.env.DATABASE_HOST || 'localhost',
        user: 'root',
        password: 'password',
        database: 'userdata'
    });

    db.connect(error => {
        if (error) {
            console.error('error connecting: ' + error.stack);
            return;
        }
        console.log('connected as id ' + db.threadId);
    });


    if (req.body.registration) {
        try {
            db.query("INSERT INTO user_pass (user,pass) VALUES( ? , ? );", [user, pass], (error, result) => {
                console.log(result || error);　
                res.render('start', { user });
            })
        } catch (e) {
            res.send('登録失敗');
        }
    } else {
        try {
            db.query("SELECT user, pass FROM user_pass where user LIKE ? AND pass LIKE ?;", [user, pass], (error, result) => {
                if (error) {
                    console.log(error);
                }
                console.log(result);　
                if (result['user']) {
                    res.render('start', { user });
                }
            })
        } catch (e) {
            res.send('ログイン失敗');
            res.redirect('login');
        }
    }
    res.render('start', { user });
});

module.exports = router;