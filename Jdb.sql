DROP DATABASE IF EXISTS Jdb;

CREATE DATABASE jdb;

USE jdb;

-- 카테고리 테이블 
CREATE Table categories(
    categoryCode INT AUTO_INCREMENT,
    Constraint PRIMARY key (categoryCode),
    categoryName varchar(100)
) 


CREATE Table foods(
    foodCode int,
    constraint PRIMARY KEY (foodCode),
    foodName VARCHAR(20) NOT NULL,
    sales INT UNSIGNED,
    image VARCHAR(20),
    categoryCode INT,
    constraint Foreign Key (categoryCode) REFERENCES categories(categoryCode)
)

CREATE Table reviews(
    reviewCode int AUTO_INCREMENT PRIMARY KEY,
    content CHAR(100),
    rating int NOT NULL,
    foodCode int, constraint FOREIGN KEY(foodCode) REFERENCES foods(foodCode)
);


CREATE TABLE FoodDetail (
    foodcode INT PRIMARY KEY , price INT NOT NULL ,
    calories INT NOT NULL , protein DOUBLE NOT NULL ,
    fat DOUBLE NOT NULL , carbs INT NOT NULL ,
    contraint FOREIGN KEY (foodcode) REFERENCES foods (foodCode)
);


