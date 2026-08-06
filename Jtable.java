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




