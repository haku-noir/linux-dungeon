CREATE DATABASE userdata;
USE userdata;
CREATE TABLE user_pass (
  user  VARCHAR(20),
  pass  VARCHAR(20)
);

INSERT INTO user_pass (user,pass) values('test','test');