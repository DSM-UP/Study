## index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DDaMamIn</title>
    <link rel="stylesheet" href="../css/index.css"/>
</head>
<body>

    <div id="header">
        <p id="title">DDaMamIn</p>
    </div>
    <div id="main">
        <input type="button" class="login_join" value="L O G I N">
        <input type="button" class="login_join" value="J O I N">
    </div>
    <div id="footer">
        <p id="help">아이디/비밀번호 찾기</p>
    </div>
    
    <div class="modal">
        <div id="modal_login-content">
            <p class="close"> X </p>
            <form method="GET" action="login2.jsp">
                <p class="login_name">아이디</p>
                <input type="text" name="id" class="login_text" placeholder=" 아아디를 입력해주세요."/>
                <p class="login_name">비밀번호</p>
                <input type="password" name="pw" class="login_text" placeholder=" 비밀번호를 입력해주세요."/>
                <button class="login_submit">L O G I N</button>
            </form>
        </div>
    </div>
    
    <div class="modal">
        <div id="modal_join-content">
            <p class="close"> X </p>
            <p class="join_name">아이디</p>
            <div id="non-check_id">
                <form method="GET" action=".../checkId2.jsp">
                    <input type="text" name="id" id="join_text_id" placeholder=" 최소 4자이상 최대 16자이하"/>
                    <button id="join_text_id_check">Check</button>
                </form>
            </div>
            <form method="POST" action="join2.jsp">
                <div id="check_id">
                    <input type="text" name="id" class="join_text" placeholder=" 최소 4자이상 최대 16자이하" readonly/>
                </div>
                <p class="join_name">비밀번호</p>
                <input type="password" name="pw" class="join_text" placeholder=" 숫자, 문자, 특수기호 반드시 포함"/>
                <p class="join_name">비밀번호 확인</p>
                <input type="text" name="id" class="join_text" placeholder=" 최소 4자이상 최대 16자이상"/>
                <p class="join_name">닉네임</p>
                <input type="text" name="name" class="join_text" placeholder=" 한글 5자, 영어 10자 (특수기호 제외)"/>
                <p class="join_name">이메일</p>
                <div id="check_email">
                        <input type="email" name="email" class="join_text" placeholder=" ex) example@exam.com" readonly/>
                    </div>
                <div id="non-check_email">
                    <form method="GET" action="checkEmail.jsp">
                        <input type="email" name="email" id="join_text_email" placeholder=" ex) example@exam.com"/>
                        <button id="join_text_email_check">Check</button>
                    </form>
                </div>
                <button class="join_submit">J O I N</button>
            </form>
        </div>
    </div>
    
    <script src="../js/index.js"></script>
</body>
</html>



- index.html은 웹 페이지에서 가장 먼저 뜨는 페이지이다.
- DDaMamIn Project를 완정하기 위한 준비 과정으로 실제로는 jsp로 변환되어서 사용되지 않을 예정이다.
- 본 index.html은 로그인 및 회원가입 페이지로써 먼저 제목인 DDaMamIn이 있고 그 아래에 로그인 버튼과 회원가입 버튼 그리고 비밀번호를 계정을 잊어버렸을 때를 위해서 아아디/비밀번호 찾기가 존재한다.
- 로그인 버튼을 클릭하게 되면 modal 창을 띄어서 아이디 및 비밀번호를 입력할 수 있게 하고 밑의 submit 버튼을 클릭하게 되면 form 태그를 통해 login2.jsp 파일로 이동되도록 설계하였다.
- 회원가입 버튼을 클릭하게 되면 로그인과 같이 modal 창을 띄어서 아이디, 비밀번호, 비밀번호 확인, 닉네임, 이메일 등을 입력 받을 수 있도록 준비하였고 아이디와 이메일은 확인을 통해 검증을 할 수 있도록 설계하였다. 그렇게 아래의 submit 버튼을 클릭하면 내용이 join2.jsp 파일로 넘어가도록 제작하였다.
- 아직 아이디/비밀번호 찾기는 구현하지 않았다.