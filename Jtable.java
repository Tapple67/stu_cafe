import java.util.Scanner;

public class Jtable {
    public static void main(String[] args) {
        
        for(;;){
            new Food().ch();
        }


       
        
    }
}


class Categories{
    int categoryCode;
    String categoryName;
    public Categories(int categoryCode, String categoryName) {
            this.categoryCode = categoryCode;
            this.categoryName = categoryName;}
   
}
class Food{
    int foodCode;
    String foodName;
    int sale;
    String image;
    int categoryCode;
    Food(){}
    // foodList
    public Food(int foodCode, String foodName, int sale, String image, int categoryCode) {
        this.foodCode = foodCode;
        this.foodName = foodName;
        this.sale = sale;
        this.image = image;
        this.categoryCode = categoryCode;
    }
    Food[] foodList = new Food[100];
    Scanner scan = new Scanner(System.in);
    // 등록 부분

    void ch(){
        System.out.println("===================================");
        System.out.println("1. 음식 추가,  2. 음식 목록 보기 ");
        System.out.println("====================================");
        System.out.print("선택>\n");
        int ch = scan.nextInt();
        if( ch == 1){
            foodadd();
        }
        else if( ch ==2 ){
            foodPrint();
        }}

    void foodadd(){
        System.out.print("음식 코드: "); int foodCode = scan.nextInt();
        System.out.print("음식 이름: ");  String foodName = scan.next();
        System.out.print("판매 가격: "); int sale = scan.nextInt();
        System.out.print("음식 이미지: "); String image = scan.next();
        System.out.print("카테고리 코드: "); int categoryCode = scan.nextInt();
        // 받은 값을 객체로
        Food foodWrite = new Food(foodCode, foodName, sale, image, categoryCode);
        for(int i=0; i<=foodList.length-1; i++){
            if(foodList == null){
                foodList[i] = foodWrite;
                System.out.println("저장 성공");
                break;
                }
            }
    }

    void foodPrint(){

    }

}

    




/* =============================================================================== */
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
