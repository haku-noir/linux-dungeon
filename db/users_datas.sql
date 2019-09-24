USE linuxdungeon;

CREATE TABLE users_datas(
    uid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user  VARCHAR(20),
    pass  VARCHAR(20)
);

INSERT INTO users_datas (user, pass) values('test', 'test');
