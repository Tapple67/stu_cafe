import java.util.Scanner;

public class Jtable {
    public static void main(String[] args) {
        Repository r1 = new Repository();

        Scanner scan1 = new Scanner(System.in);
        for(;;){
            int aaa = scan1.nextInt();

            System.out.println();
            if( aaa ==1){
                r1.menu();
            }
            

            else if( aaa == 0){
                break;
            }
        }

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

    void menu(){
    
        Scanner scan = new Scanner(System.in);
        
        System.out.println("============ 카테고리 등록하기 ============ ");
        System.out.println("1.카테고리등록 2.카테고리출력");
        System.out.println("====================================== ");
        System.out.print("선택 :");
        int num = scan.nextInt();
        if(num==1){
            add();
        }
        else if(num==2){
            Cprint(findAll());
        }

    }

    void add(){
        
        Scanner scan = new Scanner(System.in);


        
        System.out.print("카테고리코드 : ");
        int categoryCode = scan.nextInt();
        System.out.print("카테고리이름 : ");
        String categoryName = scan.next();

        Categories c1 = new Categories(categoryCode,categoryName);

        save(c1);
    }// add 함수 종료



    Categories[] findAll(){
        return posts;
    }

    void Cprint(Categories[] posts){
        for(Categories post:posts){
            if(post != null){
                System.out.printf("카테고리코드: %d 카테고리이름: %s\n",post.categoryCode,post.categoryName);
            }
        }
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