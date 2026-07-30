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
            html += `<div class="food-info">
            <img class="food-image" src="음식사진/${foods[i].image}" alt="음식사진">

            <div class="food-content">
                <h2 class="food-name">${foods[i].foodName}</h2>
                <p class="food-price">${foodDetails[i].price}</p>
            </div>
        </div>
        `
        }
    }


    document.querySelector('.food-info').innerHTML = html

}

function reviewupload(){
    
}