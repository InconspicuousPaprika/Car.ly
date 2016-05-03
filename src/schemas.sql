CREATE DATABASE carly;

USE carly;

CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  password varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);