USE linuxdungeon;

CREATE TABLE users_datas(
    uid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user  VARCHAR(10),
    pass  TEXT
);
