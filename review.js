reviewpage()
function reviewpage(){

    // 쿼리스트링에서 음식 코드 추출
    const url = new URLSearchParams(location.search)
    let select = url.get('foodCode')


    // 로컬스토리지에서 음식이랑 저장할 리뷰 정보 가져오기 
    let foods = localStorage.getItem('foods')
    if(foods == null){ foods=[]}
    else{foods = JSON.parse(foods)}

    let reviews = localStorage.getItem('reviews')
    if(reviews == null){ reviews=[]}
    else{reviews = JSON.parse(reviews)}

    let foodDetails = localStorage.getItem('foodDetails')
    if(foodDetails == null){ foodDetails=[]}
    else{foodDetails = JSON.parse(foodDetails)}

    let html = ''

    for ( i = 0 ; i < foods.length ; i++){
        let obj = foods[i]
        if (select == obj.foodCode){
            html += `<div class="review-food-info">
            <img class="review-food-image" src="음식사진/${foods[i].image}" alt="음식사진">

            <div class="review-food-content">
                <h2 class="review-food-name">${foods[i].foodName}</h2>
                <p class="review-food-price">${foodDetails[i].price}</p>
            </div>
        </div>
        `
        }
    }


    document.querySelector('.review-food-info').innerHTML = html

}

// 별점 저장하는 전역 변수
let rating = 0;

function selectStar(number){
    rating = number;
    const starstar = document.querySelectorAll('.review-star-box > .review-button');
    for(i=0; i<starstar.length ;i++){
        if(i<number){
            starstar[i].innerHTML = '★'
        }else{
            starstar[i].innerHTML = '☆'
        }
    }
    console.log(number)
}


function reviewupload(){

    // 선택한 푸드 코드
    const url = new URLSearchParams(location.search)
    let foodCode = url.get('foodCode')


    let categories = localStorage.getItem('categories')
    if(categories == null){ categories=[]}
    else{categories = JSON.parse(categories)}

    let foods = localStorage.getItem('foods')
    if(foods == null){ foods=[]}
    else{foods = JSON.parse(foods)}

    let foodDetails = localStorage.getItem('foodDetails')
    if(foodDetails == null){ foodDetails=[]}
    else{foodDetails = JSON.parse(foodDetails)}

    let reviews = localStorage.getItem('reviews')
    if(reviews == null){ reviews=[]}
    else{reviews = JSON.parse(reviews)}

    // html 에서 가져오기 
    
    const content = document.querySelector('#reviewContent').value
    
    
    
    //리뷰목록에 푸쉬
    
    let reviewCode = reviews.length == 0 ? 1 : reviews.length + 1
    let obj = { reviewCode , content , rating , foodCode }
    
    reviews.push(obj)
    localStorage.setItem('reviews' , JSON.stringify(reviews))
    alert('리뷰가 등록되었습니다.')

    location.href="write.html"

}
