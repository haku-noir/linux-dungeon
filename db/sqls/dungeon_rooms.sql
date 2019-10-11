USE linuxdungeon;

CREATE TABLE dungeon_rooms(
    did CHAR(6) NOT NULL PRIMARY KEY,
    qid INT NOT NULL,
    score INT NOT NULL
);

LOAD DATA LOCAL INFILE "/db/dungeon_rooms.csv"
    INTO TABLE dungeon_rooms
    FIELDS TERMINATED BY ',' ENCLOSED BY '"'
    LINES TERMINATED BY '\r\n'
    IGNORE 1 LINES
    (did, qid, score);
