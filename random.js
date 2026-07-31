/* 
    음식 추천 점수 산출
    음식 사진, 이름 가져오기
    리뷰 별점 산출, 개수 가져오기
    음식 가격, 칼로리, 단백질 가져오기
    최근 리뷰 랜덤 가져오기

*/

// 추천 음식 선택 함수
function 추천음식(){
    // 현재 초
    let second = new Date().getSeconds();
    // 음식 번호 계산
    let index = second % foods.length;
    // 음식 반환
    return foods[index];
    // 0번 ~ 11번 음식 : 3번씩 추천됨
    // 12번 ~ 23번 음식 : 2번씩 추천됨
}
// 추천 음식 저장
let food = 추천음식();

// 음식 정보 출력 함수
function 음식정보(){
    // 음식 사진 출력
    document.querySelector("#foodImg").src = "음식사진/" + food.image;
    // 음식 이름 출력
    document.querySelector("#foodName").innerHTML = food.foodName;
}
// 함수 실행
음식정보();
// 별점 정보 출력 함수
function 별점정보(){
    // 별점 합계 시작
    let total = 0;
    // 리뷰 개수 세기
    let count = 0;
    // 리뷰 조회
    for(let i = 0; i <= reviews.length -1; i++){
        // 추천된 음식의 리뷰만 찾기 (예: 왕돈까스면 foodCode로 왕돈까스 리뷰만 추출)
        if(reviews[i].foodCode == food.foodCode){
            // 리뷰 별점 합계
            total += reviews[i].rating;
            // 리뷰 개수 증가
            count++;
        }
    }
    // 평균 별점 계산
    let avg = total / count;
    // 별점과 리뷰 개수 출력
    document.querySelector("#rating").innerHTML = avg + " (" + count + ")";
}
// 함수 실행
별점정보();

// 영양 정보 출력 함수
function 영양정보(){
    // 1. 어디에
    let price = document.querySelector("#price");
    let calorie = document.querySelector("#calorie");
    let protein = document.querySelector("#protein");
    // 2. foodDetails 조회
    for(let i = 0; i <= foodDetails.length -1; i++){
        // 추천 음식과 같은 음식 찾기
        if(foodDetails[i].foodCode == food.foodCode){
            // 3. 출력
            price.innerHTML = foodDetails[i].price + "원";
            calorie.innerHTML = foodDetails[i].calories + " kcal";
            protein.innerHTML = foodDetails[i].protein + " g";
            break;
        }
    }
}
// 함수 실행
영양정보();

// 추천 점수 출력 함수
function 추천점수(){ // 최고 판매량 찾기
    let maxSales = 0;
    for(let i = 0; i <= foods.length -1 ; i++){
        if(foods[i].sales > maxSales){
            maxSales = foods[i].sales;}}
    
            // 판매량 점수 (30점)
    let salesScore = (food.sales / maxSales) * 30;
    // 평균 별점 계산
    let total = 0;
    let count = 0;
    for(let i = 0; i <= reviews.length -1 ; i++){
        if(reviews[i].foodCode == food.foodCode){
            total += reviews[i].rating;
            count++;
        }
    }
    let avg = total / count;
    // 별점 점수 (30점)
    let ratingScore = (avg / 5) * 30;
    // 즐겨찾기 점수 (30점)
    let favoriteScore = 30;
    // 신메뉴 점수 (10점)
    let newMenuScore = 0;
    if(food.categoryCode == 4){
        newMenuScore = 10;
    }
    // 총점
    let score = salesScore + ratingScore + favoriteScore + newMenuScore;
    // 출력
    document.querySelector("#score").innerHTML = parseInt(score); // 정수타입변환
}
// 함수 실행
추천점수();

function 리뷰목록(){
    let reviewList = document.querySelector("#reviewList");
    let contents = "";
    for( let i = 0 ; i <= reviews.length -1 ; i++ ){
        if(reviews[i].foodCode == food.foodCode) 
         contents += `
                <div class="card">
                    <img src="학생식당_아이콘/07_리뷰쓰기.png">
                    <div class="text">
                        <h3>학생${ reviews[i].reviewCode }</h3>
                        <div> ⭐ ${ reviews[i].rating } </div>
                        <p>${ reviews[i].content }</p>
                    </div>
                </div>
            `;
        }
        reviewList.innerHTML = contents
    }
리뷰목록();

document.querySelector("#writeBtn").href = "write.html?foodCode=" + food.foodCode;