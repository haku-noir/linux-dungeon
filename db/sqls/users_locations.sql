USE linuxdungeon;

CREATE TABLE users_locations(
    uid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    did CHAR(6)
);

CREATE TRIGGER location_trigger
    AFTER INSERT
    ON users_datas FOR EACH ROW
    INSERT INTO users_locations (did) VALUE ('011208');
