CREATE DATABASE carly;

USE carly;

CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  password varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Favorites (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  image varchar(255) NOT NULL,
  purchase_url varchar(255) NOT NULL,
  make varchar(30) NOT NULL,
  model varchar(30) NOT NULL,
  year int,
  price varchar(10),
  vin varchar(50),
  PRIMARY KEY (ID),
  FOREIGN KEY (user_id)
    REFERENCES Users(id)
);