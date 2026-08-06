DROP DATABASE IF EXISTS Jdb;

CREATE DATABASE jdb;

USE jdb;

CREATE Table reviews(
    reviewCode int AUTO_INCREMENT PRIMARY KEY,
    content CHAR(100),
    rating int NOT NULL,
    foodCode int, constraint FOREIGN KEY(foodCode) REFERENCES foods(foodCode)
);


