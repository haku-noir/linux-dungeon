var express = require('express');
var router = express.Router();

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
        console.log(`REGISTRATION user: ${user}, pass:${pass}`);
    } else {
        console.log(`LOGIN user: ${user}, pass:${pass}`);
    }
    res.render('start', { user });
});

module.exports = router;