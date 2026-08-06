DROP DATABASE IF EXISTS Jdb;

CREATE DATABASE jdb;

USE jdb;



CREATE Table foods(
    foodCode int,
    constraint PRIMARY KEY (foodCode),
    foodName VARCHAR(20) NOT NULL,
    sales INT UNSIGNED,
    image VARCHAR(20),
    categoryCode INT,
    constraint Foreign Key (categoryCode) REFERENCES categories(categoryCode)
)