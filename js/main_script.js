$(function(){
// -----header start
class Header{
    constructor(header){
        this.header = header;
    }   
    make_header(){
        this.header.innerHTML += 
        "<div id='logo' class='logo'>"+
            "<img src='img/header/logo.png' alt='logo'>"+
        "</div>"+
        "<nav></nav>";/*로고 및 nav 틀 만듬*/ 
        
        let nav_title = ["제품", "기획전", "스토리", "멤버쉽", "서비스"];
        let nav_list = [
            ["제품","태블릿","QCY BOOK", "WATCH", "QCY-T1", "TV", "Lifestyle TV"],
            ["QCY LINE", "MUSIC LINE", "QCY 캠퍼스 스토어" ,"아울렛", "혜택존", "이벤트존", "홈 피트니스"],
            ["사진&영상", "엔터테인먼트", "건강", "QCY Within", "다양한 활용", "전시/행사", "커뮤니티"],
            ["QCY소개", "가입안내", "포인트 안내", "등급&혜택안내", "블루케어 <br> 서비스 안내"],
            ["무엇을 <br> 도와드릴까요?", "제품지원", "서비스센터", "QCY Care+"]
        ];
        const nav = document.querySelector("nav");
        let i = 0;
        while(i<nav_title.length){
            nav.innerHTML += "<ul><li><a href='#'>"+nav_title[i]+"</a><ul id='nav_list"+i+"' class = 'nav_list nav_list"+i+"'></ul></li></ul>";
            let ul_list = document.querySelectorAll(".nav_list");
            let j = 0;
                while(j<(nav_title.length)*2){
                    if(nav_list[i][j]==undefined){
                        nav_list[i][j] = " ";
                    };
                ul_list[i].innerHTML += "<li><a href='#'>"+nav_list[i][j]+"</a></li>";
                    j++;
                }
            i++;
        }/*nav 내용 삽입*/ 
        this.header.innerHTML += "<div id='header_info' class='header_info'></div>"
        const header_info = document.querySelector('#header_info');/*header오른쪽 아이콘 틀 만듬*/
        let k=0;
        while(k<3){
            header_info.innerHTML += "<div id='headerInfo_logo"+k+"' class='headerInfo_logo"+k+" headerInfo_logo' ></div>";
            const headerInfo_logos = document.querySelectorAll(".headerInfo_logo");
            headerInfo_logos[k].innerHTML = "<a href='#'><img src='img/header/info"+k+".png' alt='info1'></a>"
            k++;
        }/*header오른쪽 아이콘 아이콘 삽입*/
        this.header.innerHTML +=
        "<div id='notice' class='notice'>\n"+
            "<p>해당 사이트는 포트폴리용으로 제작 되었습니다.</p>\n"+
        "</div>"; /*notice 구역 삽입*/ 
        this.header.innerHTML += 
        "<div id='pop_login' class='pop_login'></div>"+
        "<div id='pop_cart' class='pop_cart'></div>"+
        "<div id='pop_search' class='pop_search'></div>"
        const pop_login = $("#pop_login")
        function login(){
            pop_login.append(
                "<div id='login_logo' class='login_logo'>"+
                    "<img src='img/header/logo.png' alt='logo'>"+
                "</div>"+

                "<form>"+
                    "<p>로그인<p>"+
                    `<p id="login_close" class="login_close">X</p>`+
                "</form>"
            )
            /*로그인창 아이디 비밀번호 */
            const form = $("#pop_login form");
            const login_type = ["text","password"];
            const login_id = ["input_id","input_password"];
            const placeholder = ["QCY 아이디","QCY 비밀번호"];
            let i=0;
            while(i<2){
                form.append(
                    "<p> "+
                        "<label>"+
                            "<input type="+login_type[i]+" name='"+login_id[i]+"' id='"+login_id[i]+"' placeholder='"+placeholder[i]+"' autocomplete='off'>"+
                        "</label>"+
                    "</p>"
                )
               i++;
            }
           /*로그인 선택창 */
           const div_id = ["div_submit", "div_kakao", "div_naver", "div_join"];
           const connet_id = ["submit", "kakao", "naver", "join"];
           const connet_value = ["로그인", "카카오 로그인", "네이버 로그인", "회원가입"];
           let j=0;
           while(j<4){
               form.append(
                   `<div id="${div_id[j]}" >`+
                       `<input type="submit"  id= "${connet_id[j]}" class= "${connet_id[j]}" value="${connet_value[j]}">`+
                   "</div>"
               )
               j++;
           }

            $("#submit").on("click",()=>{
                const id_value = $("#input_id").val();
                const pattern = /^([a-z0-9]{2,10})$/
                let check = pattern.test(id_value);
                if(check==false){
                    alert(" 아이디를 확인해 주세요\n 영문자(a-z) 및 숫자 2~10자로 입력해주세요. ")
                }else{
                    const input_password = $("#input_password").val();
                    const pattern = /^([!@#]){2,3}([a-z0-9]{2,10})$/
                    const check1 = pattern.test(input_password);
                    if(check1==false){
                        alert(" 비밀번호를 확인해 주세요. \n 특수문자 (!@#) 포함 2자 이상 및 \n 영문자(a-z) 및 숫자 2~10자로 입력해주세요. ");
                    }
                    if(check==true && check1==true){
                        alert("환영합니다.");
                    }
                }
            })
           
      

          
            
        }
        login();//로그인 팝업창 구현
        function cart(){
            const pop_cart = $("#pop_cart")
            pop_cart.append(
                `<div id="login_logo" class="login_logo">`+
                    `<img src="img/header/logo.png" alt="logo">`+
                `</div>`+
                `<div id="cart_center" class="cart_center">`+ 
                    `<img src="img/header/headerCart.png" alt="headerCart">`+
                    `<div id="cart_center_1" class="cart_center_1">`+
                        `<p>혜택가  19,900원</p>`+
                        `<div id="cart_count" class="cart_count">`+
                            `<span>수량  </span>`+
                            `<button id="cart_count_prev" class="cart_count_prev">-</button>\n`+
                            `<label for="cart_qcy_count">\n`+
                                `<input type="text" placeholder="0" id="cart_qcy_count" name="cart_qcy_count" class="cart_qcy_count" min="1" max="12" value="1">\n`+
                            `</label>\n`+
                            `<button id="cart_count_next" class="cart_count_next">+</button>`+
                        `</div>`+
                        `<div id="cartColorBox" class="cartColorBox">\n`+
                            `<label for="cartWhite">\n`+
                                `<input type="radio" id="cartWhite" name="cartColor" class="cartWhite">\n`+
                            `흰색 </label>`+
                            `<label for="cartBlack">\n`+
                                `<input type="radio" id="cartBlack" name="cartColor" class="cartBlack" checked>\n`+
                            `검은색 </label>\n`+
                        `</div>\n`+
                    `</div>`+
                `</div>`+

                `<div id="cart_bottom" class="cart_bottom">`+
                    `<p>구매가격  <span id="cart_price" class="cart_price">19,900원<span></p>`+
                    `<form action="#" method="POST">`+
                        `<input type="submit" name="total_order" id="total_order" class="total_order" value="주문하기">`+
                    `</form>`+
                `</div>`+

                `<div id="popCartClose" class="popCartClose">X</div>`
            )


        }
        cart();
        //header 효과들
        const nav_effect = $(".nav_list"); /*nav fadeIn 효과 준비*/

        function search(){
            const pop_search = $("#pop_search");
            pop_search.append(
                `<div id="closeSearch" class="closeSearch">X</div>`+
                `<form method="GET" action="serch.php">`+
                    `<div id="searchBox" class="searchBox">`+
                        `<input type="text" name="search_str" id="search_input" class="search_input" placeholder="검색어를 입력해주세요">`+
                        `<input type="submit" value="검색" id="cart_submit" class="cart_submit">`+
                    `</div>`+
                        `<ul id="searchRecommend" class="searchRecommend"></ul>`+
                `</form>`
            )
            const arr = ["#오늘의 추천", "#QCY-T1", "#무선이어폰", "#가성비", "#초소형 이어폰"]
            let i =0;
            while(i<5){
                $("#searchRecommend").append(
                    `<li><a href="#">${arr[i]}</a><l/i>`
                )
                i++;
            }
        }
        search();

        const nav_ul =$("nav>ul");
        const notice = $("#notice");
      
        $.each(nav_ul,function(i){
                nav_ul.eq(i).on('mouseover',function(){
                    let i =0;
                    while(i<nav_ul.length){
                    nav_effect.eq(i).stop().fadeIn();
                        i++;
                    }
                })
                nav_ul.eq(i).on('mouseout',function(){
                    let i =0;
                    while(i<nav_ul.length){
                    nav_effect.eq(i).stop().fadeOut(1000);
                        i++;
                    }
                })
        })/*nav fadeIn 효과 삽입 1번*/ 
        
        /*포트폴리오 notice 부분 사라지고 나타남 2번*/
        $("header").on("mouseover",()=>{
            notice.stop().slideUp();
        })
        $("header").on("mouseout",()=>{
            notice.stop().slideDown(1000);
        })/*포트폴리오 notice 부분 사라지고 나타남 2번*/

        $("#pop_login").hide();
        $("#login_close").on("click",()=>{
            $("#pop_login").slideToggle();
        })
        $("#headerInfo_logo0").on("click",()=>{
            $("#pop_login").slideToggle();
        })

        //#pop_cart 효과 시작
        $("#headerInfo_logo1").on("click",()=>{
            $("#pop_cart").toggleClass("cartEffect");
        })

        $("#popCartClose").on("click",()=>{
            $("#pop_cart").toggleClass("cartEffect");
        })
        //#pop_cart 효과 마지막


        //#pop_search 효과시작
        $("#pop_search").hide();
        $("#closeSearch").on("click",()=>{
            $("#pop_search").slideUp();
        })

        $("#headerInfo_logo2").on("click",()=>{
            $("#pop_search").slideDown();
        })


        //#pop_search 효과마지막



    }//make_header 마지막
}//Header class 마지막
const header = document.querySelector("header");
const header_home = new Header(header);


header_home.make_header();


class HeaderCart{
    constructor(cartCountPrev, cartCountNext, cartPrice, ){
        this.cartCountPrev = cartCountPrev;
        this.cartCountNext = cartCountNext;
        this.cartPrice = cartPrice;
    }
    headerCart_method(){
        const qcyCount = document.querySelector("#qcy_count");
        const cartQcyCount = document.querySelector("#cart_qcy_count");
        cartQcyCount.addEventListener("keyup",()=>{
            let cartValue = cartQcyCount.value
            qcy_count.value = cartQcyCount.value 
            let cart_price = cartQcyCount.value*19900;
            let cartTotal = cart_price.toLocaleString();
            cartPrice.innerHTML = cartTotal + '원';
            priceOutput.innerHTML = cartTotal + '원';
        })

        this.cartCountPrev.addEventListener("click",()=>{
            let cartValue = cartQcyCount.value
            if(cartValue<1){
                alert("1개이상 주문하세요.");
                cartQcyCount.value=0
                cart_price="0원";
            }
            qcy_count.value = cartQcyCount.value = --cartValue;
            let cart_price = cartQcyCount.value*19900;
            let cartTotal = cart_price.toLocaleString();
            cartPrice.innerHTML = cartTotal + '원';
        })

        this.cartCountNext.addEventListener("click",()=>{
            let cartValue = cartQcyCount.value
            if(cartValue>11){
                alert("12개이하로 주문하세요.");
                cartQcyCount.value=12
                cart_price="238,800원";
            }
            qcy_count.value = cartQcyCount.value = ++cartValue;
            let cart_price = cartQcyCount.value*19900;
            let cartTotal = cart_price.toLocaleString();
            cartPrice.innerHTML = cartTotal + '원';
        })
        
    }
}

const cartCountPrev = document.querySelector("#cart_count_prev");
const cartCountNext = document.querySelector("#cart_count_next");
const cartPrice = document.querySelector("#cart_price");
const cartPriceSpan = document.querySelector("#price_span span");
const headercart  =  new HeaderCart(cartCountPrev, cartCountNext, cartPrice)
headercart.headerCart_method();
// 




// *******************************header end |
// 헤더는 크게 2군데 함수로 나누어 작성 
// make_nav()는 전체적으로 삽입 
// popup()은 오른쪽 아이콘 팝업 구현



// -----.box1 start

class Box1obj{
    constructor(box,cart_middle){
        this.box = box;
        this.cart_middle = cart_middle;
        this.method = function(){
            let i = 0;
                while(i<5){
                    const div = "<div id=\"cart_img"+i+"\" class=\"cart_img cart_img"+i+"\"></div>";
                    this.box.innerHTML += div;//box1 왼쪽 box 만듬

                    const cartDiv = document.querySelectorAll("#cart_left div");
                    cartDiv[i].innerHTML =  "<img src='img/box1/"+i+".png' alt='1'>"//box1 왼쪽 이미지 삽입
                    this.cart_middle.innerHTML += "<img src='img/box1/"+i+".png' alt='1'>"//가운데 이미지 삽입
                    i++;
                }
            }
    }
}

const cart_left = document.querySelector("#cart_left");
const cart_middle = document.querySelector("#cart_middle");
const box1 = new Box1obj(cart_left,cart_middle); 

box1.method();

class Imagefect{
    constructor(cartLeft,cartDiv,cartImg){
        this.cartLeft = cartLeft;
        this.cartDiv = cartDiv;
        this.cartImg = cartImg;
    }
    chageImg(){
        const img_count = this.cartLeft.children.length;
        this.cartDiv.forEach((el,i) => {
            this.cartDiv[i].addEventListener("mouseover",()=>{
                let j=0;
                while(j<5){
                    this.cartImg[j].style.display = "none";
                    // this.cartImg[0].style.display = "block";
                    j++;
                }
                this.cartImg[i].style.display = "block";
            })
        })
    }
}
const leftDiv = document.querySelectorAll("#cart_left div");
const middle_img = document.querySelectorAll("#cart_middle img");
const box1img = new Imagefect(cart_left, leftDiv, middle_img);
box1img.chageImg();


class Box1Right{
    constructor(cartRight){
        this.cartRight = cartRight;
    }
    makeRight(){//기능들은 아래에 모아둠
        let i=0;
        while(i<4){
        this.cartRight.innerHTML+=
         "<div id='right_cart"+i+"' class='right_cart right_cart"+i+"'></div>";
            i++;
        }
            function right_cart0() {
                const right_cart0 = document.querySelector("#right_cart0");
                right_cart0.innerHTML = 
                "<h3>QCY-T1</h3>\n"+
                "<p>\n"+
                    "<span>(qcy_version_1)</span>\n"+
                    "<span>\n"+
                        "<img src='img/box1/star.png' alt='star'>\n"+
                        "<a href='#'>77건</a>"+
                    "</span>\n"+
                "</p>";
            }
            right_cart0();
            
            function right_cart1() {
                const right_cart1 = document.querySelector("#right_cart1");
                let i=0;
                while(i<2){
                    right_cart1.innerHTML += 
                    "<p>\n"+
                        "<span></span><span></span>\n"+
                    "</p>";
                    i++;
                }

                const arr = [
                    ["판매가","26,900원"],
                    ["혜택가","19,900원"]
                ]


                let j=0;
                while(j<2){
                    let k=0;
                    while(k<2){
                        const cart1_p = document.querySelectorAll("#right_cart1 p");
                        console.log(cart1_p[j].children[k]);
                        cart1_p[j].children[k].innerHTML+=arr[j][k];
                        k++;
                    }
                    j++;
                }

            
                
            }
            right_cart1();

            function right_cart2() {
                const right_cart2 = document.querySelector("#right_cart2");
                let i=0;
                while(i<2){
                    right_cart2.innerHTML += 
                    "<p>\n"+
                        "<span></span><span></span>\n"+
                    "</p>";
                    i++;
                }
                const form1 = 
                 "<form action='color.php' method='POST'>\n"+
                     "<label for='white'><input type='radio' id='white' name='color' value='흰색'>흰색 </label>\n"+
                     "<label for='black'><input type='radio' id='black' name='color' value='검은색' checked>검은색 </label>\n"+
                 "</form>";

                 const form2 = 
                 `<button id='count_prev' class='count_prev'>-</button>\n`+
                 `<label for="qcy_count">\n`+
                      `<input type="text" placeholder="0" id="qcy_count" name="qcy_count" class="qcy_count" min="0" max="12" value="1">\n`+
                  `</label>\n`+
                 `<button id='count_next' class='count_next'>+</button>`;

                const arr = [
                    ["색상",form1],
                    ["수량",form2]
                ]


                let j=0;
                while(j<2){
                    let k=0;
                    while(k<2){
                        const cart2_p = document.querySelectorAll("#right_cart2 p");
                        cart2_p[j].children[k].innerHTML+=arr[j][k];
                        k++;
                    }
                    j++;
                }
            }

            right_cart2();
            function right_cart3(){
                const right_cart3 = document.querySelector("#right_cart3");
                    right_cart3.innerHTML += "<p><button id='cart_button' class='cart_button'></button><button  id='cart_buy' class='cart_buy'></button></p>";
                    right_cart3.innerHTML += "<p><span></span><span id='price_span' class='price_span'></span></p>";
                const cart = "장바구니";
                const buy = "바로구매";
                const form1 = 
                "<span>19,900원</span>\n"+
                "<form action='price.php' method='POST'>\n"+
                    "<label for='price'><input type='text' id='price' name='price' value='1'></label>\n"+
                "</form>";
                const arr = [
                    [cart,buy],
                    ["혜택가",form1]
                ];
                const price_p = document.querySelectorAll("#right_cart3 p");
                console.log(price_p[0]);

                let j=0;
                while(j<2){
                    let k=0;
                    while(k<2){
                        price_p[j].children[k].innerHTML += arr[j][k];
                        k++;
                    }
                    j++;
                }
             
                //장바구니 클릭시 효과
                $("#cart_button").on("click",()=>{
                    $("#pop_cart").toggleClass("cartEffect");
                })
                //장바구니 클릭시 효과


                //장바구니 radio버튼 넘겨줌
                $("#white").on("click",()=>{
                    $("#cartWhite").attr("checked", true)
                    $("#cartBlack").attr("checked", false)
                })

                $("#black").on("click",()=>{
                    $("#cartBlack").attr("checked", true)
                    $("#cartWhite").attr("checked", false)
                })
                //장바구니 radio버튼 넘겨줌

                //
                $("#cart_buy").on("click",()=>{
                    alert("구매 기능은 추후 구현 예정 입니다.")
                })


                // $("#cartWhite").on("click",()=>{
                //     alert(1)
                // })
            }
            right_cart3();
    }
}
const cart_right = document.querySelector("#cart_right");
const box1_right = new Box1Right(cart_right);
box1_right.makeRight();

class Box1count{
    constructor(prev, next, count, index ,price_output, price_input, popCart, cartQcyCount){
        this.prev = prev;
        this.next = next;
        this.count = count;
        this.index = index;
        this.price_output = price_output;
        this.price_input = price_input;
        this.popCart = popCart;
        this.cartQcyCount = cartQcyCount;
    }
    makeCount(){
        this.count.addEventListener("keyup",()=>{
            const countValue = this.count.value
            this.cartQcyCount.value = countValue;
            let totalprice = (this.count.value * 19900)+' ';//문자열 만들기 천단위 만들기
            const finalPrice =  totalprice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            price_output.innerHTML= finalPrice+"원";
            price_input.setAttribute("value",totalprice);
            this.popCart.innerHTML = finalPrice+"원";
        })

        this.prev.addEventListener('click',()=>{
            this.count.value--;
                if(this.count.value < 1){
                    this.count.value = 12;
                }
            this.count.setAttribute('value',this.count.value);
            const countValue = this.count.value
            this.cartQcyCount.value = countValue;
            let totalprice = (this.count.value * 19900)+' '; //문자열 만들기 천단위 만들기
            const finalPrice =  totalprice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            price_output.innerHTML= finalPrice+"원";
            price_input.setAttribute("value",totalprice);
            this.popCart.innerHTML = finalPrice+"원";//장바구니 가격 넣음
        })

        this.next.addEventListener('click',()=>{
            this.count.value++;
                if(this.count.value>12){
                    this.count.value = 1;
                }
                this.count.setAttribute('value',this.count.value);
                const countValue = this.count.value
                this.cartQcyCount.value = countValue;
                let totalprice = (this.count.value * 19900)+' '; //문자열 만들기 천단위 만들기
                console.log(totalprice)
                console.log(totalprice.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                const finalPrice =  totalprice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                price_output.innerHTML= finalPrice+"원";
                price_input.setAttribute("value",totalprice);
                this.popCart.innerHTML = finalPrice+"원";//장바구니 가격 넣음
        })
    }//makeCount
}
const countPrev = document.querySelector("#count_prev");
const countNext = document.querySelector("#count_next");
const qcyCount = document.querySelector("#qcy_count");
const price_output = document.querySelector("#price_span span");
const price_input = document.querySelector("#right_cart3 input");
const popCart = document.querySelector("#cart_price")//장바구니 가격 넣음
const cartQcyCount = document.querySelector("#cart_qcy_count");

let box1Index = 1;
const box1value = new Box1count(countPrev, countNext, qcyCount, box1Index, price_output, price_input, popCart, cartQcyCount);
box1value.makeCount();



/*!! 장바구니 가격은 Box1count클래스에서 가져옴 */


// *******************************.box1 end


// -----.box2 start

class Box2Class{
    constructor(intro_bottom){
        this.intro_bottom = intro_bottom;
    }

    makeImg(){
        let i=0;
        while(i<3){
            this.intro_bottom.innerHTML += " <img src='img/box2/qcy_detail"+i+".png' alt= 'qcy_detail'"+i+">"
            i++;
        }
    }
}
const intro_bottom = document.querySelector("#intro_bottom");
const box2Output = new Box2Class(intro_bottom);
box2Output.makeImg();


// *******************************.box2 end

// -----.box3 start

class Box3class{
    constructor(box3, leftBox){
        this.box3 = box3;
        this.leftBox = leftBox;
    }
    makeConnet(){
            this.leftBox.innerHTML += "<img src='img/box3/size0.png' alt='size0'>"
            this.leftBox.innerHTML += "<img src='img/box3/size1.png' alt='size1'>"
          
            const img0 = $("#connet_left img").eq(0); 
            const img1 = $("#connet_left img").eq(1);
            this.box3.mouseover(function(){
                img0.stop().fadeIn(1000);
                img1.stop().fadeOut(1000);
            })
         
    }//Box1count
}

const box3 = $("#box3");

const connet_left = document.querySelector("#box3 #connet_left");
const box3Output = new Box3class(box3,connet_left);
box3Output.makeConnet();

// *******************************.box3 end


// -----.box4 start
    $('.slider').bxSlider();


// *******************************.box4 end

// -----.box5 start
    class Box5class{
        constructor(box5){
            this.box5 = box5;
        }
       
        makeBox5(){
            let i =0
                while(i<2){
                    this.box5.innerHTML += "<div id='box5info"+i+"' class='box5info"+i+"'></div>"
                i++;
            }
            function box5info0() {
                const box5info0 = document.querySelector("#box5info0");
                box5info0.innerHTML = "<img src='img/box5/1.png' alt='0'>";
            }   
            box5info0();
            function box5info1(){
                const box5info1 = document.querySelector("#box5info1");
                box5info1.innerHTML="<h1></h1><h4></h4><p></p>";
                const h1 = document.querySelector("#box5 h1");
                const h4 = document.querySelector("#box5 h4");
                const p = document.querySelector("#box5 p");
                
                const h1_text = "With Qcy-T1";
                const h4_text = "지금 만나보세요!!";
                const p_text =  "10초면 연결 가능한 QVY-T1 <br>\n" +
                                "지금껏 경험해보지 못했던 <br>\n"+
                                "자유로움과 편리함 <br>\n" +
                                "이제 누려보세요.";
                h1.innerHTML = h1_text;
                h4.innerHTML = h4_text;
                p.innerHTML = p_text;
            }
            box5info1();
            
           
        }
    }

const box5 = document.querySelector("#box5");
const box5info = new Box5class(box5);
box5info.makeBox5();

// *******************************.box5 end

// -----.box6 start
class Box6class{
    constructor(box6){
        this.box6 = box6;
    }
    makeBox6(){
        let i =0
            while(i<2){
                this.box6.innerHTML += "<div id='box6info"+i+"' class='box6info"+i+"'></div>"
            i++;
        }
        
        function box6info0(){
            const box6info0 = document.querySelector("#box6info0");
            box6info0.innerHTML="<h1></h1><h4></h4><p></p>";
            const h1 = document.querySelector("#box6 h1");
            const h4 = document.querySelector("#box6 h4");
            const p = document.querySelector("#box6 p");
            
            const h1_text = "Eesy Keeping";
            const h4_text = "쏙 들어가는 이어폰";
            const p_text =  "케이스에 자석처럼 들어가는 QVY-T1!! <br>\n" +
                            "기존에 항상 보관이 힘들던 이어폰 <br>\n"+
                            "케이스안에 자석기능으로 하나되는  <br>\n" +
                            "편리함을 제공합니다.";
            h1.innerHTML = h1_text;
            h4.innerHTML = h4_text;
            p.innerHTML = p_text;
        }
        box6info0();

        function box6info1() {
            const box6info1 = document.querySelector("#box6info1");
            box6info1.innerHTML = "<video controls src='img/box6/connet0.mp4'></video>";
        }   
        box6info1();

    }
}

const box6 = document.querySelector("#box6");
const box6info = new Box6class(box6);
box6info.makeBox6();


// *******************************.box6 end

// -----#manual start
class Manual{
    constructor(manual){
        this.manual = manual;
    }
    makeManual(){
        let i =0
            while(i<2){
                this.manual.innerHTML += "<div id='manual_info"+i+"' class='manual_info"+i+"'></div>";
            i++;
         }
        function manual_info0(){
            const manual_info0 = document.querySelector("#manual_info0");
            manual_info0.innerHTML = "<img src='img/manual/manual.png' alt='manual'>";
        }
        manual_info0();

        function manual_info1(){
            const manual_info1 = document.querySelector("#manual_info1");
            manual_info1.innerHTML="<h1></h1><h4></h4><p></p>";
            const h1 = document.querySelector("#manual_info1 h1");
            const h4 = document.querySelector("#manual_info1 h4");
            const p = document.querySelector("#manual_info1 p");
            
            const h1_text = "Auto Pair";
            const h4_text = "자동 연결 기능";
            const p_text =  "자동 연결 기능으로 더욱 편리해졌습니다 <br>\n" +
                            "과거 연결로 애먹었던 이어폰은 이젠 Good Bye <br>\n"+
                            "한번에 연결만으로 Auto Pair 기능 완료  <br>\n" +
                            "With Qcy.";
            h1.innerHTML = h1_text;
            h4.innerHTML = h4_text;
            p.innerHTML = p_text;
        }
        manual_info1();

            

    }
}
const manual = document.querySelector("#manual");
const manualBox = new Manual(manual);
manualBox.makeManual()

// *******************************manual end


// -----#detail start

class Detailclass{
    constructor(detailSection){
        this.detailSection = detailSection;
    }
    makeDetail(){
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        this.detailSection.append(table);
        const tables = document.querySelector("#detail_bottom table");
        table.append(tbody);
        let i = 0;
        while(i<11){
            tbody.innerHTML += "<tr id=tr"+i+"></tr>";//tr줄수
            let j = 0;
            while(j<4){
                let detail_info = [
                    ['상품정보','11235','상품상태','신상품'],//td들어갈 내용들
                    ['제조사','QCY','브랜드','QCY'],
                    ['모델명','T1C','원산지','중국'],
                    ['블루투스버전','블루투스 5.0','형태','커널형'],
                    ['용도','통화+음악(스테레오)','음질개선','노이즈캔슬링'],
                    ['마이크기능','마이크있음','조작기능','음량조절, 원터치버튼, 통화음량조절'],
                    ['방수기능','생활방수(IPX5)','부가기능','자동연결, 음성명령','상태표시LED'],
                    ['어플사용','가능','통화시간','3.5시간'],
                    ['무게','4.7g','구성품','충전케이스'],
                    ['사용범위','10m이내','품목','블루투스이어폰'],
                    ['배터리용량','43(이어폰), 3800Ah(충전케이스)mAh','A/S','전국매장']
                ];
                 document.querySelector("#tr"+i).innerHTML +="<td>"+detail_info[i][j]+"</td>"//td 입력값
                j++;
           }
           i++;
        }
   
    }
}

const detailBottom = document.querySelector("#detail #detail_bottom");
const detailOutput = new Detailclass(detailBottom);
detailOutput.makeDetail();

// *******************************#detail end

// -----footer start
class Footerobj{
    constructor(box){
        this.box = box;
    }
    //배열 변경 시 주석 처리 된 부분 변경 하면 적용 가능(1~4번)
    makeDiv(){
    const footTitle = ["제품", "제품", "고객서비스", "회사소개", "지속가능경영", "윤리&준법경영", "부가정보"];
        let i=0;
        while(i<footTitle.length){
            const div = "<div id=\"footerbox"+i+"\" class=\"footerbox footerbox"+i+"\"><h3>"+footTitle[i]+"</h3></div>";
            this.box.innerHTML += div;
            i++;
        }//1번. 전체 배열 박스 추가 시 변경
    }
}
const footer = document.querySelector("#footer");
const footerclass = new Footerobj(footer);
footerclass.makeDiv();

class FooterSondiv{
    constructor(footbox){
        this.footbox = footbox;
    }
    makeDiv(){
        let footDetail = [
            ["스마트폰", "테블릿", "QCY BOOK", "WATCH", "QCY-T1", "TV", "Lifestyle TV", "냉장고", "프린터"],
            ["김치냉장고", "식기세척기", "전자레인지", "세탁기", "건조기", "에어드레서", "에어컨", "공기청정기", "청소기"],
            ["QCY 닷컴", "이메일상담", "매장 찾기", "서비스센터 찾기", "QCY 프라자", "MD 비즈니스", "비즈니스 협럭제안", "QCY 커뮤니티" , "E-카탈로그"],
            ["환경", "사회공헌", "디지털 책임" ,"노동과 인권", "다양성과 포용", "지속가능한 공급망", "제품 접근성", "제품홍보관"  ],
            ["기업정보", "사업정보", "브랜드 아이덴티티", "채용", "투자자 정보", "뉴스룸", "윤리", "디자인 QCY", "배당조회", "공지사항"],
            ["경영원칙", "부정제보", "법위반제보"],
            ["데이코","협력회사 <br> 사이버 신문고", "폐카트리지  <br> 회수 신청"]
        ]
        let i=0;
        while(i<footDetail.length){
            let j=0;
            while(j<footDetail[i].length){
                const div = "<div class=\"product product"+j+"\"></div>";
                this.footbox[i].innerHTML += div;
                j++
            }
            i++;
        }
        let m=0;
        while(m<footDetail.length){
            let n=0;
            while(n<footDetail[m].length){
                    this.footbox[m].getElementsByTagName("div")[n].innerHTML = "<a href = '#'>"+ footDetail[m][n] + "</a>" ;
                n++;
            }
            m++;
        }
    }
}
const footer_foot = document.querySelectorAll(".footerbox");
const footerfirst_class = new FooterSondiv(footer_foot);
footerfirst_class.makeDiv();

// *******************************footer end

//마지막!!
});