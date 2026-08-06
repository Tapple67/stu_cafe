public class Jtable {
    public static void main(String[] args) {
        


    }
}

class Categories{
    int categoryCode;
    String categoryName;

    Categories(){};

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

    Food(){};
    
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

class Repository{
 
    Categories[] posts = new Categories[10];

    boolean save(Categories categories){
        for(int i = 0 ; i < posts.length; i++){
            if(posts[i]== null){
                posts[i] = categories;
                return true;
            }
        }
        return false;
    } // save 함수 종료 


    add(){}

    Categories[] findAll(){
        return posts;
    }

}


/*
카테고리 등록 이랑 출력 이걸 물어봐

1. 카테고리 등록 or 출력을 사용자에게 입력받음 (숫자로 1이랑 2)
만약 1이면 
-> 카테고리 코드 + 이름 등록 
카테고리를 담을 클래스배열 10개만들고 null이면 등록 (처음부터 확인해서 )

만약 2이면 
카테고리 코드가 음식테이블에도 코드가 있잖아 그니까 이걸 넘겨주는건데?ㅇ
일단은 카테고리 목록만 반환하고 출력하는걸로하자 반환을 해야해 그래야 
음식쪽에 받아서 음식출력하니까 
배열에 처음부터 null확인하고 null아니면 출력 
*/