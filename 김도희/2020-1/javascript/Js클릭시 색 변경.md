<!DOCTYPE html>
<html>
    <head>
        <title>somthing</title>
        <link rel="stylesheet" href = "test.css">
    </head>
    <body><h1 id = "title">Hello</h1>
    <script src="test.js"></script>
    </body>
</html>

========================================== < 위가 html 코드 , 아래가 JS 코드 >

const title = document.querySelector("#title");

const Base_color = "red";     // 기본 색상을 빨강
const Other_color = "blue";    //다른 색상을 파랑으로 설정

function hand()
{  
    const current = title.style.color;    //current 에 현재 색깔을 넣음

    if(current === Base_color)
    {
        title.style.color = Other_color;   //current 색과 기본 색이 같으면 다른 색으로 변경
    }
    else
    {
        title.style.color = Base_color;   //current 색과 다른 색이라면 같은색으로 변경
    }
}

function init()
{
    title.style.color = Base_color;   //현재 색상에 기본색 넣음
    title.addEventListener("click", hand);   //클릭시 이벤트 발생 ( hand 호출 )
}

init();