USE linuxdungeon;

CREATE TABLE questions_datas(
    qid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    path  VARCHAR(30),
    ans  VARCHAR(20),
    que  VARCHAR(200)
);

INSERT INTO questions_datas (path, ans, que) values('/test', 'test', 'test');
