writepage()
function writepage(){

    // 쿼리스트링으로 받은 음식 카테고리 번호추출
    const url = new URLSearchParams(location.search)
    let select = url.get('categoryCode')
    if(select == null){select = 1}

    // 로컬스토리지에서 저장된 배열 가져오기 
    // categories  foods  reviews  foodDetails
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


    //html 보여줄 부분 선언
    // let mainbody = document.querySelector('.list-list')

    let writepagecode = 0;
    let html = ''

    for(i=0 ; i < foods.length ; i++){
        let obj = foods[i]
        if(select == obj.categoryCode){
            html += `
            <div class="write-img-pr">
                        <div class="write-img">
                            <a href="review.html?foodCode=${foods[i].foodCode}"><img src="음식사진/${foods[i].image}" alt="음식사진"></a>
                        </div>
                        <div class="write-price">${foodDetails[i].price}원</div>
                    </div>

            `
        }

    }
    if(html === ''){
        html = `<p>카테고리를 선택해주세요</p> `
    }
    document.querySelector('.write-list').innerHTML = html;


}
