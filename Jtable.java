import java.util.Scanner;

public class Jtable {
    public static void main(String[] args) {

        Food food = new Food(0, null, 0, null, 0);
        for( ; ; ){
            food.foodadd();
        }



        
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
    Scanner scan = new Scanner( System.in );

    Food[] foodList = new Food[100];

    int ch(){
            System.out.println("===============================");
            System.out.println(" 1. 음식 추가 2. 음식 목록 보기 ");
            System.out.println("===============================");
            System.out.print("선택> ");
            int ch = scan.nextInt();
            if( ch == 1 ){
                foodadd();
            }else if( ch == 2){
                foodPrint();
            }
            
    }

    void foodadd(){
        if( ch() == 1 ){
        System.out.print("음식코드 : ");
        int code = scan.nextInt();
        scan.nextLine();

        System.out.print("음식이름 : ");
        String name = scan.nextLine();
        
        System.out.print("판매량 : ");
        int sale = scan.nextInt();
        scan.nextLine();

        System.out.print("사진 : ");
        String image = scan.nextLine();

        System.out.print("카테고리코드 : ");
        int category = scan.nextInt();
        Food foodwrite = new Food(code, name, sale, image, category);
        for( int i = 0 ; i <= foodList.length -1 ; i++ ){
            if(foodList[i] == null ){
                foodList[i] = foodwrite;

                System.out.println( "[안내] 음식 추가 성공");
                break;
                }
            }
        }else if( ch() == 2 ){
            System.out.println("========== 음식 목록 ==========");

    for (int i = 0; i <= foodList.length -1; i++) {
        if (foodList[i] != null) {
            System.out.println("음식코드 : " + foodList[i].foodCode);
            System.out.println("음식이름 : " + foodList[i].foodName);
            System.out.println("판매량 : " + foodList[i].sale);
            System.out.println("사진 : " + foodList[i].image);
            System.out.println("카테고리코드 : " + foodList[i].categoryCode);
            System.out.println("===============================");

        }
    }

}
    }
}
// ============================================================================================================

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
