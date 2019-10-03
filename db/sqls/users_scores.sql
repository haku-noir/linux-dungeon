USE linuxdungeon;

CREATE TABLE users_scores(
    uid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    score INT NOT NULL
);

CREATE TRIGGER score_trigger
    AFTER INSERT
    ON users_datas FOR EACH ROW
    INSERT INTO users_scores (score) VALUE (0);

INSERT INTO users_datas (user, pass) values('test', 'test');
