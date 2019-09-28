const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST || 'localhost',
  user: 'root',
  password: 'password',
  database: 'linuxdungeon'
});

db.connect(error => {
  if (error) {
      console.error('error connecting: ' + error.stack);
      return;
  }
  console.log('connected as id ' + db.threadId);
});

module.exports = db;
