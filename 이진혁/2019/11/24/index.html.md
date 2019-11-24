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

