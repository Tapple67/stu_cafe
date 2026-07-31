// 카테고리


const categories = [
  { categoryCode: 1, categoryName: "면류&찌개&김밥" },
  { categoryCode: 2, categoryName: "덮밥류&비빔밥" },
  { categoryCode: 3, categoryName: "볶음밥&오므라이스&돈까스" },
  { categoryCode: 4, categoryName: "☆☆신메뉴☆☆" },
];
//음식
const foods = [
  { foodCode: 11, foodName: "공기밥", sales: 94, image: "11_공기밥.jpg", categoryCode: 1 },
  { foodCode: 12, foodName: "계란라면세트", sales: 338, image: "12_계란라면세트.jpg", categoryCode: 1 },
  { foodCode: 13, foodName: "치즈계란라면세트", sales: 297, image: "13_치즈계란라면세트.jpg", categoryCode: 1 },
  { foodCode: 14, foodName: "돈까스쟁반국수", sales: 226, image: "14_돈까스쟁반국수.jpg", categoryCode: 1 },
  { foodCode: 15, foodName: "물냉면", sales: 181, image: "15_물냉면.jpg", categoryCode: 1 },
  { foodCode: 16, foodName: "비빔냉면", sales: 208, image: "16_비빔냉면.jpg", categoryCode: 1 },
  { foodCode: 17, foodName: "물냉면떡갈비세트", sales: 154, image: "17_물냉면떡갈비세트.jpg", categoryCode: 1 },
  { foodCode: 18, foodName: "돼지국밥", sales: 271, image: "18_돼지국밥.jpg", categoryCode: 1 },

  { foodCode: 21, foodName: "제육덮밥", sales: 486, image: "21_제육덮밥.jpg", categoryCode: 2 },
  { foodCode: 22, foodName: "치킨마요비빔밥", sales: 563, image: "22_치킨마요비빔밥.jpg", categoryCode: 2 },
  { foodCode: 23, foodName: "마그마치킨마요비빔밥", sales: 273, image: "23_마그마치킨마요비빔밥.jpg", categoryCode: 2 },
  { foodCode: 24, foodName: "목살고추장비빔밥", sales: 319, image: "24_목살고추장비빔밥.jpg", categoryCode: 2 },

  { foodCode: 31, foodName: "카레덮밥", sales: 263, image: "31_카레덮밥.jpg", categoryCode: 3 },
  { foodCode: 32, foodName: "치킨치즈카레동", sales: 341, image: "32_치킨치즈카레동.jpg", categoryCode: 3 },
  { foodCode: 33, foodName: "닭강정(홀)", sales: 192, image: "33_닭강정.jpg", categoryCode: 3 },
  { foodCode: 34, foodName: "왕돈까스", sales: 542, image: "34_왕돈까스.jpg", categoryCode: 3 },
  { foodCode: 35, foodName: "떡갈비카레동", sales: 236, image: "35_떡갈비카레동.jpg", categoryCode: 3 },
  { foodCode: 36, foodName: "치즈고구마돈까스", sales: 397, image: "36_치즈고구마돈까스.jpg", categoryCode: 3 },
  { foodCode: 37, foodName: "케네디소시지카레동", sales: 214, image: "37_케네디소시지카레동.jpg", categoryCode: 3 },
  { foodCode: 38, foodName: "케네디소시지", sales: 109, image: "38_케네디소시지.jpg", categoryCode: 3 },
  { foodCode: 39, foodName: "고추가라아게카레동", sales: 286, image: "39_고추가라아게카레동.jpg", categoryCode: 3 },

  { foodCode: 40, foodName: "크림닭강정", sales: 123, image: "40_크림닭강정.jpg", categoryCode: 4 },
  { foodCode: 41, foodName: "우삼겹매콤크림파스타", sales: 381, image: "41_우삼겹매콤크림파스타.jpg", categoryCode: 4 },
  { foodCode: 42, foodName: "쫀득바삭치즈볼", sales: 167, image: "42_쫀득바삭치즈볼.jpg", categoryCode: 4 },
];

//리뷰
const reviews = [
  { reviewCode: 1, content: "국물이 진하고 맛있어요.", rating: 5, foodCode: 11 },
  { reviewCode: 2, content: "양이 조금 적지만 괜찮아요.", rating: 4, foodCode: 11 },
  { reviewCode: 3, content: "라면이 꼬들해서 맛있어요.", rating: 5, foodCode: 12 },
  { reviewCode: 4, content: "계란이 들어가 더 든든합니다.", rating: 4, foodCode: 12 },
  { reviewCode: 5, content: "치즈가 잘 녹아서 맛있어요.", rating: 5, foodCode: 13 },
  { reviewCode: 6, content: "조금 느끼하지만 맛있습니다.", rating: 4, foodCode: 13 },
  { reviewCode: 7, content: "돈까스가 바삭하고 국수가 시원해요.", rating: 5, foodCode: 14 },
  { reviewCode: 8, content: "양이 많아서 배부릅니다.", rating: 5, foodCode: 14 },
  { reviewCode: 9, content: "국물이 깔끔해요.", rating: 4, foodCode: 15 },
  { reviewCode: 10, content: "여름에 먹기 좋아요.", rating: 5, foodCode: 15 },
  { reviewCode: 11, content: "양념이 새콤달콤합니다.", rating: 5, foodCode: 16 },
  { reviewCode: 12, content: "조금 매웠지만 맛있어요.", rating: 4, foodCode: 16 },
  { reviewCode: 13, content: "떡갈비가 부드럽네요.", rating: 5, foodCode: 17 },
  { reviewCode: 14, content: "세트라 만족스럽습니다.", rating: 5, foodCode: 17 },
  { reviewCode: 15, content: "국물이 진하고 고기가 많아요.", rating: 5, foodCode: 18 },
  { reviewCode: 16, content: "든든한 한 끼입니다.", rating: 4, foodCode: 18 },
  { reviewCode: 17, content: "제육이 매콤해서 밥도둑이에요.", rating: 5, foodCode: 21 },
  { reviewCode: 18, content: "양도 푸짐합니다.", rating: 4, foodCode: 21 },
  { reviewCode: 19, content: "마요와 치킨 조합이 좋아요.", rating: 5, foodCode: 22 },
  { reviewCode: 20, content: "부담 없이 먹기 좋습니다.", rating: 4, foodCode: 22 },
  { reviewCode: 21, content: "매운맛 좋아하면 추천합니다.", rating: 5, foodCode: 23 },
  { reviewCode: 22, content: "생각보다 많이 맵네요.", rating: 4, foodCode: 23 },
  { reviewCode: 23, content: "목살이 부드럽고 맛있어요.", rating: 5, foodCode: 24 },
  { reviewCode: 24, content: "고추장 양념이 잘 어울립니다.", rating: 4, foodCode: 24 },
  { reviewCode: 25, content: "카레가 진해서 맛있어요.", rating: 4, foodCode: 31 },
  { reviewCode: 26, content: "무난하게 먹기 좋습니다.", rating: 4, foodCode: 31 },
  { reviewCode: 27, content: "치즈가 듬뿍 들어있어요.", rating: 5, foodCode: 32 },
  { reviewCode: 28, content: "카레와 치킨이 잘 어울립니다.", rating: 5, foodCode: 32 },
  { reviewCode: 29, content: "바삭하고 달달한 닭강정입니다.", rating: 5, foodCode: 33 },
  { reviewCode: 30, content: "간식으로도 좋아요.", rating: 4, foodCode: 33 },
  { reviewCode: 31, content: "돈까스 크기가 정말 큽니다.", rating: 5, foodCode: 34 },
  { reviewCode: 32, content: "바삭한 식감이 최고예요.", rating: 5, foodCode: 34 },
  { reviewCode: 33, content: "떡갈비와 카레 조합이 좋네요.", rating: 4, foodCode: 35 },
  { reviewCode: 34, content: "양이 많아 만족합니다.", rating: 5, foodCode: 35 },
  { reviewCode: 35, content: "치즈와 고구마가 잘 어울려요.", rating: 5, foodCode: 36 },
  { reviewCode: 36, content: "조금 느끼하지만 맛있어요.", rating: 4, foodCode: 36 },
  { reviewCode: 37, content: "소시지가 탱글탱글합니다.", rating: 4, foodCode: 37 },
  { reviewCode: 38, content: "아이들도 좋아할 맛이에요.", rating: 4, foodCode: 37 },
  { reviewCode: 39, content: "짭짤해서 간식으로 좋아요.", rating: 4, foodCode: 38 },
  { reviewCode: 40, content: "맥주가 생각나는 맛입니다.", rating: 5, foodCode: 38 },
  { reviewCode: 41, content: "가라아게가 바삭합니다.", rating: 5, foodCode: 39 },
  { reviewCode: 42, content: "카레와 잘 어울려요.", rating: 4, foodCode: 39 },
  { reviewCode: 43, content: "크림소스가 부드러워요.", rating: 5, foodCode: 40 },
  { reviewCode: 44, content: "달콤해서 맛있습니다.", rating: 4, foodCode: 40 },
  { reviewCode: 45, content: "우삼겹이 푸짐하게 들어있어요.", rating: 5, foodCode: 41 },
  { reviewCode: 46, content: "크림파스타인데 느끼하지 않아요.", rating: 5, foodCode: 41 },
  { reviewCode: 47, content: "겉은 바삭 속은 쫀득해요.", rating: 5, foodCode: 42 },
  { reviewCode: 48, content: "치즈가 정말 많이 들어있어요.", rating: 5, foodCode: 42 },
];

/* 음식 정보  */
const foodDetails = [
  { foodCode: 11, price: 1000, calories: 300, protein: 6, fat: 0.5, carbs: 68 },
  { foodCode: 12, price: 4500, calories: 720, protein: 22, fat: 24, carbs: 102 },
  { foodCode: 13, price: 5000, calories: 830, protein: 30, fat: 34, carbs: 104 },
  { foodCode: 14, price: 5500, calories: 1050, protein: 36, fat: 36, carbs: 140 },
  { foodCode: 15, price: 4500, calories: 620, protein: 18, fat: 8, carbs: 120 },
  { foodCode: 16, price: 4500, calories: 620, protein: 19, fat: 9, carbs: 116 },
  { foodCode: 17, price: 6000, calories: 850, protein: 37, fat: 21, carbs: 115 },
  { foodCode: 18, price: 6500, calories: 760, protein: 40, fat: 28, carbs: 78 },

  { foodCode: 21, price: 5000, calories: 860, protein: 35, fat: 28, carbs: 108 },
  { foodCode: 22, price: 4800, calories: 930, protein: 36, fat: 39, carbs: 103 },
  { foodCode: 23, price: 5000, calories: 980, protein: 37, fat: 41, carbs: 108 },
  { foodCode: 24, price: 5500, calories: 810, protein: 36, fat: 24, carbs: 95 },

  { foodCode: 31, price: 3500, calories: 690, protein: 16, fat: 16, carbs: 118 },
  { foodCode: 32, price: 5500, calories: 960, protein: 38, fat: 36, carbs: 118 },
  { foodCode: 33, price: 4800, calories: 650, protein: 28, fat: 30, carbs: 64 },
  { foodCode: 34, price: 6500, calories: 1020, protein: 38, fat: 52, carbs: 94 },
  { foodCode: 35, price: 5200, calories: 890, protein: 32, fat: 30, carbs: 116 },
  { foodCode: 36, price: 5800, calories: 1120, protein: 41, fat: 60, carbs: 102 },
  { foodCode: 37, price: 6300, calories: 930, protein: 28, fat: 39, carbs: 116 },
  { foodCode: 38, price: 3000, calories: 340, protein: 13, fat: 30, carbs: 5 },
  { foodCode: 39, price: 5500, calories: 980, protein: 36, fat: 38, carbs: 120 },
  { foodCode: 40, price: 5300, calories: 780, protein: 30, fat: 42, carbs: 68 },
  { foodCode: 41, price: 6900, calories: 980, protein: 34, fat: 48, carbs: 96 },
  { foodCode: 42, price: 3000, calories: 270, protein: 6, fat: 15, carbs: 28 },
];

localStorage.setItem('categories',JSON.stringify(categories))
localStorage.setItem('foods',JSON.stringify(foods))
localStorage.setItem('reviews',JSON.stringify(reviews))
localStorage.setItem('foodDetails',JSON.stringify(foodDetails))


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
                                <div>탄수화물: ${foodDetails[i].carbs}</div>
                                <div>kcal: ${foodDetails[i].calories}kcal</div>
                            </div>
                            <div class="list-content-co2">
                                <div>단백질:${foodDetails[i].protein}</div>
                            </div>
                            <div class="list-content-co3">
                                <div>지방:${foodDetails[i].fat}</div>
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
                    <div>탄수화물: ${detail.carbs}</div>
                    <div>kcal: ${detail.calories}kcal</div>
                    </div>

                    <div class="list-content-co2">
                    <div>단백질: ${detail.protein}</div>
                    </div>

                    <div class="list-content-co3">
                    <div>지방: ${detail.fat}</div>
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

     
