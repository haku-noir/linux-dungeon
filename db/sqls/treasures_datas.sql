USE linuxdungeon;

CREATE TABLE treasures_datas(
  tid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name  VARCHAR(5),
  val  TEXT
);

LOAD DATA LOCAL INFILE "/db/treasures_datas.csv"
  INTO TABLE treasures_datas
  FIELDS TERMINATED BY ',' ENCLOSED BY '"'
  LINES TERMINATED BY '\r\n'
  IGNORE 1 LINES
  (name, val);
