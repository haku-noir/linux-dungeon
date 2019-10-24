USE linuxdungeon;

CREATE TABLE dungeon_treasures(
  did CHAR(6) NOT NULL PRIMARY KEY,
  tid INT NOT NULL
);

LOAD DATA LOCAL INFILE "/db/dungeon_treasures.csv"
  INTO TABLE dungeon_treasures
  FIELDS TERMINATED BY ',' ENCLOSED BY '"'
  LINES TERMINATED BY '\r\n'
  IGNORE 1 LINES
  (did, tid);
