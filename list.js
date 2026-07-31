

list()
function list(){
    const categorycode = new URLSearchParams(location.search);
    // 카테고리코드 가져온상태

    let catecode = categorycode.get('categoryCode');
   
    //list html 부분 가져오기
    const list = document.querySelector('.list-a');
    let html ='';

    //카테고리가져오고
    let categories= localStorage.getItem('categories');
    if(categories==null){categories=[]}
    else{categories = JSON.parse(categories)}

    //음식
    let foods= localStorage.getItem('foods');
    if(foods==null){foods=[]}
    else{foods = JSON.parse(foods)}

    //리뷰
    let reviews= localStorage.getItem('reviews');
    if(reviews==null){reviews=[]}
    else{reviews = JSON.parse(reviews)}

    //세부사항
    let foodDetails= localStorage.getItem('foodDetails');
    if(foodDetails==null){foodDetails=[]}
    else{foodDetails = JSON.parse(foodDetails)}

    for(let i=0; i<foods.length; i++){
        if(catecode == foods[i].categoryCode){   // url page에 코드와 음식카테고리코드가 같은 것중에
            if(foods[i].foodCode == foodDetails[i].foodCode){
                let avgrating = 0;
                let reivewcount = 0;
                for(let j = 0; j<reviews.length; j++){
                    if(foods[i].foodCode == reviews[j].foodCode){
                        avgrating += Number(reviews[j].rating)
                        reivewcount++;
                    }
                }
                avgrating =  avgrating / reivewcount
                
                let reviewHTML=''

                for(let k = 0; k<reviews.length; k++){
                    if(foods[i].foodCode==reviews[k].foodCode){
                        reviewHTML += `<div>${reviews[k].content}</div>`;
                    }
                }

                html += 
                `
                <a href="view.html?foodCode=${foods[i].foodCode}">
                    <div class="list-list">
                        <div class="list-img-pr">
                            <div class="list-img">
                                <img src="음식사진/${foods[i].image}" alt="음식사진">
                            </div>
                            <div class="list-price">${foodDetails[i].price.toLocaleString()}원</div>
                        </div>
                        
                        <div class="list-content">
                            <div class="list-content-title">
                                <div>${foods[i].foodName}</div>
                                <div>⭐${avgrating}</div>
                            </div>
                            <div class="list-content-co1">
                                <div>탄수화물: ${foodDetails[i].carbs}g</div>
                                <div>kcal: ${foodDetails[i].calories}kcal</div>
                            </div>
                            <div class="list-content-co2">
                                <div>단백질: ${foodDetails[i].protein}g</div>
                            </div>
                            <div class="list-content-co3">
                                <div>지방: ${foodDetails[i].fat}g</div>
                            </div>

                            <div class="list-content-co4">
                                <div>${reviewHTML}</div>
                            </div>

                        </div>
                    </div> 
                </a> `
                
            }
                
            
        }

        
    }

    list.innerHTML = html;

}

    const params = new URLSearchParams(location.search);
    const categoryCode = params.get("categoryCode");

    const links = document.querySelectorAll(".list-header > div > a");

    for (let i = 0; i < links.length; i++) {
    if (links[i].dataset.code == categoryCode) {
        links[i].classList.add("active");
        }
    }


        function ordersell(){
            const categorycode = new URLSearchParams(location.search);
            // 카테고리코드 가져온상태

            let catecode = categorycode.get('categoryCode');
        
            //list html 부분 가져오기
            const list = document.querySelector('.list-a');
            let html ='';

            //카테고리가져오고
            let categories= localStorage.getItem('categories');
            if(categories==null){categories=[]}
            else{categories = JSON.parse(categories)}

            //음식
            let foods= localStorage.getItem('foods');
            if(foods==null){foods=[]}
            else{foods = JSON.parse(foods)}

            //리뷰
            let reviews= localStorage.getItem('reviews');
            if(reviews==null){reviews=[]}
            else{reviews = JSON.parse(reviews)}

            //세부사항
            let foodDetails= localStorage.getItem('foodDetails');
            if(foodDetails==null){foodDetails=[]}
            else{foodDetails = JSON.parse(foodDetails)}



            let copyfoods = [...foods];

            copyfoods.sort(function(a, b) {
                return b.sales - a.sales;
            });

        for (let i = 0; i < copyfoods.length; i++) {
        if (catecode == copyfoods[i].categoryCode) {
            let detail = foodDetails.find(function(item) {
            return item.foodCode == copyfoods[i].foodCode;
            });

            let avgrating = 0;
            let reviewcount = 0;

            for (let j = 0; j < reviews.length; j++) {
            if (copyfoods[i].foodCode == reviews[j].foodCode) {
                avgrating += Number(reviews[j].rating);
                reviewcount++;
            }
            }

            if (reviewcount > 0) {
            avgrating = avgrating / reviewcount;
            } else {
            avgrating = 0;
            }

            let reviewHTML = "";

            for (let k = 0; k < reviews.length; k++) {
            if (copyfoods[i].foodCode == reviews[k].foodCode) {
                reviewHTML += `<div>${reviews[k].content}</div>`;
            }
            }

            html += `
            <a href="view.html?foodCode=${copyfoods[i].foodCode}">
                <div class="list-list">
                <div class="list-img-pr">
                    <div class="list-img">
                    <img src="음식사진/${copyfoods[i].image}" alt="음식사진">
                    </div>
                    <div class="list-price">${detail.price.toLocaleString()}원</div>
                </div>

                <div class="list-content">
                    <div class="list-content-title">
                    <div>${copyfoods[i].foodName}</div>
                    <div>⭐${avgrating}</div>
                    </div>

                    <div class="list-content-co1">
                    <div>탄수화물: ${detail.carbs}g</div>
                    <div>kcal: ${detail.calories}kcal</div>
                    </div>

                    <div class="list-content-co2">
                    <div>단백질: ${detail.protein}g</div>
                    </div>

                    <div class="list-content-co3">
                    <div>지방: ${detail.fat}g</div>
                    </div>

                    <div class="list-content-co4">
                    ${reviewHTML}
                    </div>
                </div>
                </div>
            </a>
            `;
        }
        }

        list.innerHTML = html;

    }



    function orderprice(){
            const categorycode = new URLSearchParams(location.search);
            // 카테고리코드 가져온상태

            let catecode = categorycode.get('categoryCode');
        
            //list html 부분 가져오기
            const list = document.querySelector('.list-a');
            let html ='';

            //카테고리가져오고
            let categories= localStorage.getItem('categories');
            if(categories==null){categories=[]}
            else{categories = JSON.parse(categories)}

            //음식
            let foods= localStorage.getItem('foods');
            if(foods==null){foods=[]}
            else{foods = JSON.parse(foods)}

            //리뷰
            let reviews= localStorage.getItem('reviews');
            if(reviews==null){reviews=[]}
            else{reviews = JSON.parse(reviews)}

            //세부사항
            let foodDetails= localStorage.getItem('foodDetails');
            if(foodDetails==null){foodDetails=[]}
            else{foodDetails = JSON.parse(foodDetails)}

            let copyfoods = [...foods];


            copyfoods.sort(function(a, b) {
                let detailA = foodDetails.find(function(item) {
                    return item.foodCode == a.foodCode;
                });

                let detailB = foodDetails.find(function(item) {
                    return item.foodCode == b.foodCode;
                });

                return detailB.price - detailA.price;
            });

        for (let i = 0; i < copyfoods.length; i++) {
        if (catecode == copyfoods[i].categoryCode) {
            let detail = foodDetails.find(function(item) {
                return item.foodCode == copyfoods[i].foodCode;
            });

            let avgrating = 0;
            let reviewcount = 0;

            for (let j = 0; j < reviews.length; j++) {
            if (copyfoods[i].foodCode == reviews[j].foodCode) {
                avgrating += Number(reviews[j].rating);
                reviewcount++;
            }
            }

            if (reviewcount > 0) {
            avgrating = avgrating / reviewcount;
            } else {
            avgrating = 0;
            }

            let reviewHTML = "";

            for (let k = 0; k < reviews.length; k++) {
            if (copyfoods[i].foodCode == reviews[k].foodCode) {
                reviewHTML += `<div>${reviews[k].content}</div>`;
            }
            }

            html += `
            <a href="view.html?foodCode=${copyfoods[i].foodCode}">
                <div class="list-list">
                <div class="list-img-pr">
                    <div class="list-img">
                    <img src="음식사진/${copyfoods[i].image}" alt="음식사진">
                    </div>
                    <div class="list-price">${detail.price.toLocaleString()}원</div>
                </div>

                <div class="list-content">
                    <div class="list-content-title">
                    <div>${copyfoods[i].foodName}</div>
                    <div>⭐${avgrating}</div>
                    </div>

                    <div class="list-content-co1">
                    <div>탄수화물: ${detail.carbs}g</div>
                    <div>kcal: ${detail.calories}kcal</div>
                    </div>

                    <div class="list-content-co2">
                    <div>단백질: ${detail.protein}g</div>
                    </div>

                    <div class="list-content-co3">
                    <div>지방: ${detail.fat}g</div>
                    </div>

                    <div class="list-content-co4">
                    ${reviewHTML}
                    </div>
                </div>
                </div>
            </a>
            `;
        }
        }

        list.innerHTML = html;

    }

    function getAvgRating(foodCode){

         let reviews= localStorage.getItem('reviews');
            if(reviews==null){reviews=[]}
            else{reviews = JSON.parse(reviews)}

            let avgrating = 0;
            let reviewcount = 0;

            for (let j = 0; j < reviews.length; j++) {
            if (foodCode == reviews[j].foodCode) {
                avgrating += Number(reviews[j].rating);
                reviewcount++;
            }
            }

            if (reviewcount > 0) {
            avgrating = avgrating / reviewcount;
            return avgrating.toFixed(1);

            } else {
            return 0;
            }
        }



    function orderrating(){
            const categorycode = new URLSearchParams(location.search);
            // 카테고리코드 가져온상태

            let catecode = categorycode.get('categoryCode');
        
            //list html 부분 가져오기
            const list = document.querySelector('.list-a');
            let html ='';

            //카테고리가져오고
            let categories= localStorage.getItem('categories');
            if(categories==null){categories=[]}
            else{categories = JSON.parse(categories)}

            //음식
            let foods= localStorage.getItem('foods');
            if(foods==null){foods=[]}
            else{foods = JSON.parse(foods)}

            //리뷰
            let reviews= localStorage.getItem('reviews');
            if(reviews==null){reviews=[]}
            else{reviews = JSON.parse(reviews)}

            //세부사항
            let foodDetails= localStorage.getItem('foodDetails');
            if(foodDetails==null){foodDetails=[]}
            else{foodDetails = JSON.parse(foodDetails)}



            let copyfoods = [...foods];

            copyfoods.sort(function(a, b) {
                return getAvgRating(b.foodCode)-getAvgRating(a.foodCode)
            });

        for (let i = 0; i < copyfoods.length; i++) {
        if (catecode == copyfoods[i].categoryCode) {
            let detail = foodDetails.find(function(item) {
                return item.foodCode == copyfoods[i].foodCode;
            });


            let reviewHTML = "";

            for (let k = 0; k < reviews.length; k++) {
            if (copyfoods[i].foodCode == reviews[k].foodCode) {
                reviewHTML += `<div>${reviews[k].content}</div>`;
            }
            }

            html += `
            <a href="view.html?foodCode=${copyfoods[i].foodCode}">
                <div class="list-list">
                <div class="list-img-pr">
                    <div class="list-img">
                    <img src="음식사진/${copyfoods[i].image}" alt="음식사진">
                    </div>
                    <div class="list-price">${detail.price.toLocaleString()}원</div>
                </div>

                <div class="list-content">
                    <div class="list-content-title">
                    <div>${copyfoods[i].foodName}</div>
                    <div>⭐${getAvgRating(copyfoods[i].foodCode)}</div>
                    </div>

                    <div class="list-content-co1">
                    <div>탄수화물: ${detail.carbs}g</div>
                    <div>kcal: ${detail.calories}kcal</div>
                    </div>

                    <div class="list-content-co2">
                    <div>단백질: ${detail.protein}g</div>
                    </div>

                    <div class="list-content-co3">
                    <div>지방: ${detail.fat}g</div>
                    </div>

                    <div class="list-content-co4">
                    ${reviewHTML}
                    </div>
                </div>
                </div>
            </a>
            `;
        }
        }

        list.innerHTML = html;

    }
    

    function reivewcounter(foodCode){
        //음식 리뷰들의 각각의 리뷰수를 가져오는 함수

         let reviews= localStorage.getItem('reviews');
            if(reviews==null){reviews=[]}
            else{reviews = JSON.parse(reviews)}

        let reivewcount = 0;

        for(let i =0; i <reviews.length; i++){
            if(foodCode == reviews[i].foodCode){
                reivewcount++;
            }
        }
        return reivewcount;

    }

    function orderreivew(){
            const categorycode = new URLSearchParams(location.search);
            // 카테고리코드 가져온상태

            let catecode = categorycode.get('categoryCode');
        
            //list html 부분 가져오기
            const list = document.querySelector('.list-a');
            let html ='';

            //카테고리가져오고
            let categories= localStorage.getItem('categories');
            if(categories==null){categories=[]}
            else{categories = JSON.parse(categories)}

            //음식
            let foods= localStorage.getItem('foods');
            if(foods==null){foods=[]}
            else{foods = JSON.parse(foods)}

            //리뷰
            let reviews= localStorage.getItem('reviews');
            if(reviews==null){reviews=[]}
            else{reviews = JSON.parse(reviews)}

            //세부사항
            let foodDetails= localStorage.getItem('foodDetails');
            if(foodDetails==null){foodDetails=[]}
            else{foodDetails = JSON.parse(foodDetails)}



            let copyfoods = [...foods];

            copyfoods.sort(function(a, b) {
                return reivewcounter(b.foodCode)-reivewcounter(a.foodCode)
            });

        for (let i = 0; i < copyfoods.length; i++) {
        if (catecode == copyfoods[i].categoryCode) {
            let detail = foodDetails.find(function(item) {
                return item.foodCode == copyfoods[i].foodCode;
            });


            let reviewHTML = "";

            for (let k = 0; k < reviews.length; k++) {
            if (copyfoods[i].foodCode == reviews[k].foodCode) {
                reviewHTML += `<div>${reviews[k].content}</div>`;
            }
            }

            html += `
            <a href="view.html?foodCode=${copyfoods[i].foodCode}">
                <div class="list-list">
                <div class="list-img-pr">
                    <div class="list-img">
                    <img src="음식사진/${copyfoods[i].image}" alt="음식사진">
                    </div>
                    <div class="list-price">${detail.price.toLocaleString()}원</div>
                </div>

                <div class="list-content">
                    <div class="list-content-title">
                    <div>${copyfoods[i].foodName}</div>
                    <div>⭐${getAvgRating(copyfoods[i].foodCode)}</div>
                    </div>

                    <div class="list-content-co1">
                    <div>탄수화물: ${detail.carbs}g</div>
                    <div>kcal: ${detail.calories}kcal</div>
                    </div>

                    <div class="list-content-co2">
                    <div>단백질: ${detail.protein}g</div>
                    </div>

                    <div class="list-content-co3">
                    <div>지방: ${detail.fat}g</div>
                    </div>

                    <div class="list-content-co4">
                    ${reviewHTML}
                    </div>
                </div>
                </div>
            </a>
            `;
        }
        }

        list.innerHTML = html;

    }

