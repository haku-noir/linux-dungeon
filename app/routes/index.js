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
            db.query("INSERT INTO user_pass (user,pass) values( ? , ? );", [user, pass], (error, result) => {
                console.log(result);　
                res.render('start', { user });
            })
        } catch (e) {
            res.send('登録失敗');
        }
    } else {
        console.log(`LOGIN user: ${user}, pass:${pass}`);
        try {
            db.query("SELECT FROM user_pass where user=? AND pass=?;", [user, pass], (error, result) => {
                if (error) {
                    console.log(error);
                }
                console.log(result);　
                if (result[0]['user']) {
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