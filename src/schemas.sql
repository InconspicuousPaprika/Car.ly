CREATE DATABASE carly;

USE carly;

CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  password varchar(100) NOT NULL,
  UNIQUE (email),
  PRIMARY KEY (ID)
);

CREATE TABLE FacebookUsers (
  id int NOT NULL AUTO_INCREMENT,
  userId varchar (20) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Favorites (
  id int NOT NULL AUTO_INCREMENT,
  users_email varchar(50) NOT NULL,
  image varchar(255) NOT NULL,
  purchase_url varchar(255),
  make varchar(30) NOT NULL,
  model varchar(30) NOT NULL,
  year int,
  price varchar(10),
  vin varchar(50),
  PRIMARY KEY (ID)
);
