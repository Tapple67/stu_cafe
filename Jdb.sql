DROP DATABASE IF EXISTS Jdb;

CREATE DATABASE jdb;

USE jdb;

CREATE TABLE FoodDetail (
    foodcode INT PRIMARY KEY , price INT NOT NULL ,
    calories INT NOT NULL , protein DOUBLE NOT NULL ,
    fat DOUBLE NOT NULL , carbs INT NOT NULL ,
    contraint FOREIGN KEY (foodcode) REFERENCES foods (foodCode)
);




/*
class FoodDetail {
    int foodCode;      
    int price;     
    int calories;      
    double protein;    
    double fat;        
    int carbs;
    FoodDetail(){}

    FoodDetail(int foodCode, int price, int calories, double protein, double fat, int carbs) {
        this.foodCode = foodCode;
        this.price = price;
        this.calories = calories;
        this.protein = protein;
        this.fat = fat;
        this.carbs = carbs;         
    } // FoodDetail end
*/