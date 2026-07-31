// list -> 선택한 메뉴 -> 조회 ( 사진 이름 추천도점수 별점 판매량순위)

// 전역변수로 현재 URL 상 foodCode 확인
const url = new URLSearchParams(location.search) // 현재 URL 
let foodcode = url.get('foodCode') // URL foodCode 호출
// 스토리지에 저장된 메뉴 목록들 확인
let foods = JSON.parse(localStorage.getItem('foods'))
if(foods==null){foods=[];} // 빈배열일 경우 

// 요일 선택시 값을 저장
let select_value = 0
function changeDay(select) {
    select_value = select.value
    view_print() }// 값이 바뀌면 다시 조회

//조회
view_print() // 페이지 넘어올시 바로 실행
function view_print(){
    for(let i=0; i<=foods.length-1; i++){  // 추천점수 출력이랑 메뉴이름 출력
        let obj = foods[i] // 배열에서 인데스 순서별 객체
        if(obj.foodCode == foodcode){
<<<<<<< HEAD
            document.querySelector(".view_menu_name").innerHTML = obj.foodName
            document.querySelector(".view_sco_num").innerHTML = ` <br /> ${getScore(foodcode)} 점`// 추천도 점수 계산하는 식 
=======
>>>>>>> e651f7248fe864cad667188208e51374623fff80
            // url에 foodcode 넘겨 주기
            document.querySelector('.view_write').innerHTML =`<img src="학생식당_아이콘/07_리뷰쓰기.png" />
                                                                <a href="write.html?foodCode=${obj.foodCode}">리뷰쓰기</a>`
            document.querySelector('.view_img > img').src = "음식사진/" + obj.image
<<<<<<< HEAD

>>>>>>> e651f7248fe864cad667188208e51374623fff80
            // 별점수에 따른 멘트 설정
            if(avgrating(foodcode) >= 3.2){
                document.querySelector(".view_menu_reson1").innerHTML = "별점수가 높아요!" + avgrating(foodcode)
            }else{document.querySelector(".view_menu_reson1").innerHTML = "별점수가 낮네요~" }

            // 판매량이 높은 메뉴
            // 판매량 높은 순으로 정렬 ** 이 부분은 AI의 힘을 빌렸습니다
            let sortedFoods = [...foods].sort((a, b) => b.sales - a.sales);
            // 상위 10% 기준 개수
            let top10Count = Math.ceil(sortedFoods.length * 0.1);
            // 현재 음식의 순위 찾기
            let rank = sortedFoods.findIndex(f => f.foodCode == foodcode) + 1;
            // 상위 10% 여부
            if(rank <= top10Count){
                document.querySelector(".view_menu_reson2").innerHTML = "판매량 상위 메뉴예요!"
            }else{document.querySelector(".view_menu_reson2").innerHTML = "맛있어 보일 겁니다."}}}}

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

<<<<<<< HEAD
    // 정규화 포함 식 // 월(10 40 30 20) 화(20 30 30 20) 수~목(30 30 30 10 )
    // 기초 비율 고정
    let salesWeight = 30; let ratingWeight = 30;
    let favoriteWeight = 30; let newMenuWeight = 10;

    if(select_value == 1){ //월요일 비율
        salesWeight = 10;
        ratingWeight = 40;
        favoriteWeight = 30;
        newMenuWeight = 20;
    }else if(select_value == 2){
        salesWeight = 20;
        ratingWeight = 30;
        favoriteWeight = 30;
        newMenuWeight = 20;
    }else{
        salesWeight = 30;
        ratingWeight = 30;
        favoriteWeight = 30;
        newMenuWeight = 10;}

    // 판매량 점수 
    let salesScore = (food.sales / maxSales) * salesWeight;
    // 별점 점수 
    let ratingScore = (avgrating(foodCode)/5)  * ratingWeight;
    // 즐겨찾기 
    let favoriteScore = favoriteWeight;
    // 신메뉴 점수 
    let newMenuScore =  0;
    for(let i=0; i<=foods.length-1;i++){
        if(foods[i].categoryCode == 4){
            newMenuScore = newMenuWeight;
            break; }} 
=======
    // 정규화 포함 식
    // 판매량 점수 (30점)
    let salesScore = (food.sales / maxSales) * 30;
    // 별점 점수 (30점)
    let ratingScore = (avgrating(foodCode)/5)  *30;
    // 즐겨찾기 (현재는 모두 만점)
    let favoriteScore = 30;
    // 신메뉴 점수 (10%)
    let newMenuScore =  0;  
>>>>>>> e651f7248fe864cad667188208e51374623fff80

    // 총점
    let totalScore = salesScore + ratingScore + favoriteScore + newMenuScore;
    return parseInt(totalScore);}

//평균 별점 계산
function avgrating(foodCode){
    let reviews = JSON.parse(localStorage.getItem('reviews'))
    if(reviews==null){reviews=[]}   // 스토리지에서 reviews 호출

    let count = 0
    let ratingSum = 0 
    for(let i=0; i<=reviews.length-1;i++){
        if(reviews[i].foodCode == foodCode){ // 리뷰배열 foodCode 랑 URL foodcode 비교
            count += 1
            ratingSum += reviews[i].rating}}

    let avg = ratingSum / count
    if(count == 0){return 0;} // 평균 별점을 구하고 변수에 저장
    return avg; } // 평균 별점 값 반환
