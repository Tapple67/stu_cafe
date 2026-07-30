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


