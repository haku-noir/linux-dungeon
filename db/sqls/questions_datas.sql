USE linuxdungeon;

CREATE TABLE questions_datas(
    qid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    stage  VARCHAR(30),
    ans  VARCHAR(20),
    que  TEXT
);

LOAD DATA LOCAL INFILE "/db/questions_datas.csv"
    INTO TABLE questions_datas
    FIELDS TERMINATED BY ',' ENCLOSED BY '"'
    LINES TERMINATED BY '\r\n'
    IGNORE 1 LINES
    (stage, ans, que);
