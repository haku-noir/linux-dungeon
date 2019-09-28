USE linuxdungeon;

CREATE TABLE dungeon_rooms(
    did CHAR(6) NOT NULL PRIMARY KEY,
    qid INT NOT NULL,
    score INT NOT NULL
);

INSERT INTO dungeon_rooms (did, qid, score) values('010101', 1, 100);
