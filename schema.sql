DROP DATABASE IF EXISTS dream1;

CREATE DATABASE dream1;

USE dream1;

CREATE TABLE comentarios (
  id int NOT NULL AUTO_INCREMENT,
  message1 varchar(50) NOT NULL,
  message2 varchar(500) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
