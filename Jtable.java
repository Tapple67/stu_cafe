

public class Jtable {
    public static void main(String[] args) {
        
    }
}


class Categories{
    int categoryCode;
    String categoryName;
    public Categories(int categoryCode, String categoryName) {
            this.categoryCode = categoryCode;
            this.categoryName = categoryName;
        }
}

class Review{
    int reviewCode;
    String content; 
    int rating; 
    int foodCode;
    
    public Review(int reviewCode, String content, int rating, int foodCode) {
        this.reviewCode = reviewCode;
        this.content = content;
        this.rating = rating;
        this.foodCode = foodCode;
    }
}

class Food{
    int foodCode;
    String foodName;
    int sale;
    String image;
    int categoryCode;
    
    public Food(int foodCode, String foodName, int sale, String image, int categoryCode) {
        this.foodCode = foodCode;
        this.foodName = foodName;
        this.sale = sale;
        this.image = image;
        this.categoryCode = categoryCode;
    }
    
}


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
} // class end
