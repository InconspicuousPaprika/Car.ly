CREATE DATABASE carly;

USE carly;

CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  password varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Cars (
  id int NOT NULL AUTO_INCREMENT,
  image varchar(255) NOT NULL,
  purchase_url varchar(255) NOT NULL,
  specs_id int NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (specs_id)
      REFERENCES Specs(id)
);

CREATE TABLE Specs (
  id int NOT NULL AUTO_INCREMENT,
  make varchar(30) NOT NULL,
  model varchar(30) NOT NULL,
  year int,
  price varchar(10),
  engine varchar(20),
  vin varchar(50),
  PRIMARY KEY (ID)
);

CREATE TABLE Favorites (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  car_id int NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (user_id)
      REFERENCES Users(id),
  FOREIGN KEY (car_id)
      REFERENCES Cars(id)
);