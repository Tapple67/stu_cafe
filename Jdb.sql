DROP DATABASE IF EXISTS Jdb;

CREATE DATABASE jdb;

USE jdb;

-- 카테고리 테이블 
CREATE Table categories(
    categoryCode INT AUTO_INCREMENT,
    Constraint PRIMARY key (categoryCode),
    categoryName varchar(100)
) 
