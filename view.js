/*
    넣어야 할 기능
추천점수를 보여드릴게요 부분에 추천점수 출력
list에서 고른 목록의 사진을 출력 
 선택한 메뉴 이름 출력

 별점을 보고 몇점 이상(조건)이면 "별점수가 높아요" 출력
 판매량을 보고 상위권이면 '판매량 상위권이예요' 출력
 
실습 13-1 페이지 참조 
local storge 에 데이터가 있다는 가정
*/

// list -> 선택한 메뉴 -> 조회 ( 사진 이름 추천도점수 별점 판매량순위)

// 전역변수로 현재 URL 상 foodCode 확인
let url = new URLSearchParams(location.search) // 현재 URL 
let foodcode = url.get('foodCode') // URL foodCode 호출
// 스토리지에 저장된 메뉴 목록들 확인
let foods = JSON.parse(localStorage.getItem('foods'))
if(foods==null){foods=[];} // 빈배열일 경우 

//조회
view_print() // 페이지 넘어올시 바로 실행
function view_print(){
    for(let i=0; i<=foods.length-1; i++){  // 추천점수 출력이랑 메뉴이름 출력
        let obj = foods[i] // 배열에서 인데스 순서별 객체
        if(obj.foodCode == foodcode){
            document.querySelector(".view_menu_name").innerHTML = obj.foodName
            document.querySelector(".view_sco").innerHTML = "추천 점수를 보여드릴게요!" +getScore(foodcode)// 추천도 점수 계산하는 식 
        }
    }



}
// 추천도 점수 계산하는 식
function getScore(foodCode){
    let maxSales = 0  // 최고 판매량 찾기
    for(let i=0; i<foods.length;i++){
        if(foods[i].sales > maxSales){
            maxSales = foods[i].sales;}}

    let food;
    for (let i = 0; i < foods.length; i++) {
    if (foods[i].foodCode == foodCode) {
        food = foods[i];
        break;}}

    // 정규화 포함 식
    // 판매량 점수 (30점)
    let salesScore = (food.sales / maxSales) * 30;
    // 별점 점수 (30점)
    let ratingScore = (avgRating(foods.foodCode)/5)  *30;
    // 즐겨찾기 (현재는 모두 만점)
    let favoriteScore = 30;
    // 신메뉴 점수 (10%)
    let newMenuScore =  0;  

    // 총점
    let totalScore = salesScore + ratingScore + favoriteScore + newMenuScore;
    return totalScore;
}

//평균 별점 계산
function avgrating(foodCode){
    let reviews = JSON.parse(location.search('reviews'))
    if(reviews==null){reviews=[]}   // 스토리지에서 reviews 호출

    let count = 0
    let ratingSum = 0 
    for(let i=0; i<=reviews.length-1;i++){
        if(reviews[i].foodCode == foodCode){ // 리뷰배열 foodCode 랑 URL foodcode 비교
            count += 1
            ratingSum += reviews[i].rating
        }
    }
    let avg = ratingSum / count // 평균 별점을 구하고 변수에 저장
    return avg; // 평균 별점 값 반환
}