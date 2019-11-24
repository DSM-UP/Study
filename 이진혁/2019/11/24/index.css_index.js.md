## index.css_index.js

##### index.css

@font-face {

  font-family: "BRBA_B";

  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/BRBA_B.woff")

  format("woff");

  font-weight: normal;

  font-style: normal;

}



\* {

  padding : 0px;

  margin : 0px;

  font-family: "BRBA_B";

  font-size : 50px;

}



body, html {

  width : 100%;

  height : 100%;

  background-color : #7F00FFFF;

}



\#header {

  width : 100%;

  height : 35%;

}



\#main {

  width : 100%;

  height : 30%;

}



\#footer {

  width : 100%;

  height : 35%;

}





  font-size : 120px;

  text-align: center;

  position : relative;

  top : 450px;

  color : white;

}



.login_join {

  width : 75%;

  height : 150px;

  background-color : white;

  border : 10px solid #ffc0cb;

  border-radius : 70px 70px 70px 70px;

  font-size : 50px;

  color : #ffc0cb;

  position : relative;

  left : 12%;

  margin-top : 8%;

}



\#help {

  float : right;

  margin-right : 15%;

  margin-top : 2%;

  color : white;

}



.modal {

  display : none;

  position : fixed;

  z-index : 1;

  width : 100%;

  height : 100%;

  left : 0%;

  top : 0%;

  background-color : #000000af;

}



\#modal_login-content {

  background-color : #fefefe;

  margin : 50% auto;

  width : 70%;

  height : 40%;

  border : 10px solid #ffc0cb;

}



.login_name {

  color : #ffc0cb;

  position : relative;

  left : 10%;

  margin-top : 10%;

}



.login_text {

  width : 80%;

  height : 70px;

  border : 5px solid #ffc0cb;

  position : relative;

  left : 10%;

  margin-top : 1%;



  font-size : 40px;

}



.login_submit {

  width : 60%;

  height : 80px;

  background-color : #ffc0cb;

  border : 5px solid #ffc0cb;

  border-radius : 70px 70px 70px 70px;

  position : relative;

  left : 20%;

  margin-top : 15%;

  

  color : white;

}





  background-color : #fefefe;

  margin : 20% auto;

  width : 80%;

  height : 80%;

  border : 10px solid #ffc0cb;

}



.join_name {

  color : #ffc0cb;

  position : relative;

  left : 10%;

  margin-top : 5%;

}



.join_text {

  width : 80%;

  height : 70px;

  border : 5px solid #ffc0cb;

  position : relative;

  left : 10%;

  margin-top : 1%;



  font-size : 40px;

}



\#join_text_id {

  width : 65%;

  height : 70px;

  border : 5px solid #ffc0cb;

  position : relative;

  left : 10%;

  margin-top : 1%;



  font-size : 40px;

}



\#join_text_id_check {

  width : 14%;

  height : 75px;

  background-color : #ffc0cb;

  border : 5px solid #ffc0cb;

  position : relative;

  left : 9%;

  font-size : 35px;

  color : white

}



\#join_text_email {

  width : 65%;

  height : 70px;

  border : 5px solid #ffc0cb;

  position : relative;

  left : 10%;

  margin-top : 1%;



  font-size : 40px;

}



\#join_text_email_check {

  width : 14%;

  height : 75px;

  background-color : #ffc0cb;

  border : 5px solid #ffc0cb;

  position : relative;

  left : 9%;

  font-size : 35px;

  color : white

}





  width : 60%;

  height : 80px;

  background-color : #ffc0cb;

  border : 5px solid #ffc0cb;

  border-radius : 70px 70px 70px 70px;

  position : relative;

  left : 20%;

  margin-top : 15%;

  

  color : white;

}





  font-size : 60px;

  float : right;

  position : relative;

  right : 2%;

  color : #ffc0cb;

}


- index.css는 index.html의 css적용을 시켜놓은 것이다.
- 사실 css는 특별할 게 별로 없기 때문에 특이한 것만 정리해보겠다.
- 먼저 @font-face가 있다. 이것은 내가 베스킨라빈스체를 사이트에서 받아왔기 때문에 적어놓은 것으로 없으면 제대로된 css가 적용되지 않는다.


##### index.js

var login_btn = document.getElementsByClassName("login_join")[0];
var join_btn = document.getElementsByClassName("login_join")[1];

var login_modal = document.getElementsByClassName("modal")[0];
var join_modal = document.getElementsByClassName("modal")[1];

var close_login_btn = document.getElementsByClassName("close")[0];
var close_join_btn = document.getElementsByClassName("close")[1];

login_btn.onclick = function() {
    login_modal.style.display = "block";
}

join_btn.onclick = function() {
    join_modal.style.display = "block";
}

function close_modal() {
    login_modal.style.display = "none";
    join_modal.style.display = "none";
}

close_login_btn.onclick = close_modal;
close_join_btn.onclick = close_modal;



var non_check_id = document.getElementById("non-check_id");
var check_id = document.getElementById("check_id");
var join_text_id_check = document.getElementById("join_text_id_check");

join_text_id_check.onclick = function() {
    non_check_id.style.display = "none";
    check_id.style.display = "block";
}

var non_check_email = document.getElementById("non_check_email");
var check_email = document.getElementById("check_email");
var join_text_email_check = document.getElementById("join_text_email_check");

join_text_email_check.onclick = function() {
    non_check_email.style.display = "none";
    check_email.style.display = "block";
}


- index.js는 index.html에 동적인 요소를 적용해주기 위해서 만들어졌다.
- 이번 index.js에서는 총 두 가지의 요소가 존재한다.
- 첫 번째로는 로그인과 회원가입의 모달창을 만드는 것이다.
- 모달창은 만드는 과정이 옛날에는 정말 어렵다고 생각했었는데 지금 보니까 별로 어렵다고 생각할 수가 없었다.
- 모달창은 반투명 검은색 배경의 modal에 본체가 존재하는 modal-content로 이루어져 있다.
- 따라서 modal-content에 아이디 입력창, 비밀번호 입력창 등을 만들면 된다.
- 두 번째로는 아이디 확인을 했는지 안했는지를 체크하는 것과 이메일 체크를 했는지 안했는지를 확인하는 것이다.
- 아이디, 비밀번호 등을 적는 칸의 weight는 정해져 있는데 아이디 확인 버튼이 이와 같이 존재하여야 하므로 weight를 줄이고 버튼을 넣는 형식을 채택하게 되었다. 따라서 버튼을 눌러서 체크가 되었는지 안 되었는지 확인해서 크기를 조절해주어야 하기 때문에 js를 통해 동적으로 생성 및 삭제를 한다.
- 하지만 이 기능은 jsp로 넘어가게 되면서 java 코드로 대체 가능하다는 것을 쉽게 알 수 있어서 없애도록 하였다.