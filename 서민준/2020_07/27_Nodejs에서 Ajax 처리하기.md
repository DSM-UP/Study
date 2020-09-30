## Node.js에서 Ajax 처리하기

### Ajax란?

Javascript의 라이브러리 중 하나이며 Asynchronnous Javascript and XML(비동기식 자바스크립트와 XML)의 약자이다.
브라우저가 가지고 있는 XMLHttpRequest 객체를 이용해서 전체 페이지를 새로 고치지 않고도 페이지의 일부만을 위한 데이터를 로드하는 기법이다.

한 마디로 요약하면, **JavaScript를 사용한 비동기 통신, 클라이언트와 서버간의 XML 데이터를 주고받는 기술**이라고 할 수 있다.

[출처] : <a href="https://coding-factory.tistory.com/143" target="_blank">Ajax란 무엇인가? - 코딩팩토리</a>

### Node.js에서 Ajax 처리하는 방법

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>email form</title>
  </head>
  <body>
    <form action="/email_post" method="POST">
      email : <input type="text" name="email"><br>
      <input type="submit">
    </form>

    <button class="ajaxSend">ajaxSend</button>

    <div class="result"></div>
  </body>
</html>
```

다음과 같은 html이 있었다고 가정해보자. 이 html 파일을 WEB 페이지 상에서 보면 다음과 같다.

![html exe res](https://user-images.githubusercontent.com/51042546/88450354-59c2c700-ce89-11ea-96b8-8a02ef2df730.png)

이때 ajaxSend라는 버튼을 누르면 Ajax 처리를 하고 싶다고 한다면 우선, 해당 버튼에 대한 이벤트 리스너를 구현해야 한다.

```html
<script>
    document.querySelector('.ajaxSend').addEventListener('click', function() {
       const inputData = document.forms[0].elements[0].value;
       sendAjax('http://localhost:3000/ajax_send_email', inputData);
    });
</script>
```

여기에 들어간 코드를 조금 해석해보자면,

- `forms` : 전체 DOM 중에 form을 배열로 만든 것이다. 해당 페이지 내에서는 form이 하나밖에 없기 때문에 0번에 해당 form에 대한 정보가 들어가 있다.
- `elements`는 선택된 form 내부의 elements를 배열로 만든 것이다. 해당 forms에 들어있는 요소 중 첫 번째는 email을 입력하는 form이다.

`sendAjax`라는 함수는 직접 만든 함수이다. Ajax 요청을 보낼 주소와 그 data를 인자로 받는 함수이다. 정의는 다음과 같다.

```html
<script>
    function sendAjax(url, data) {
        const sendData = JSON.stringify({ 'email': data });
        const xhr = new XMLHttpRequest();
        
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(sendData);
        
        xhr.addEventListener('load', function() {
            const result = JSON.parse(xhr.responseText);
            document.querySelector('.result').innnerHTML = result.email;
        });
    }
</script>
```

`sendAjax`라는 함수는 다음과 같이 정의된다.

email을 받아서 데이터 값을 json 형태로 만드는데 서버 상에 데이터가 이동할 때는 문자열로 처리되어서 이동하기 때문에 문자열로 변형해줘야 한다.

그리고 문자열로 보내지는 데이터가 json 형식의 데이터라는 것을 알리기 위해 setRequestHeader로 설정해준다.

이후, 서버에게 Ajax로 요청을 보내고 요청이 돌아오면 이벤트가 발생하게 된다. 이벤트 내부의 내용은 `.result` 안에 결과 값으로 받은 email을 출력하는 것이다.

```javascript
app.post('/ajax_send_email', function(req, res) {
    const resData = { 'result': 'ok', 'email': req.body.email };
    res.json(resData);
});
```

/ajax_send_email로 요청이 오면 json 형태의 데이터를 만들어 다시 반환하는 소스이다.

res.json 메소드를 사용하면 json 형식을 별도의 변환 없이 바로 보낼 수 있다.

![input on form](https://user-images.githubusercontent.com/51042546/88450710-f1c1b000-ce8b-11ea-8192-7480ad21443c.png)

다음과 같이 form에 데이터를 입력하고 `ajaxSend` 버튼을 클릭하면,

![result](https://user-images.githubusercontent.com/51042546/88450729-13bb3280-ce8c-11ea-8946-78e81519ba90.png)

다음과 같이 버튼 아래에 위치한 .result에 email 값이 들어가게 되어 화면에 출력된다.

[출처]

<a href="https://new93helloworld.tistory.com/44" target="_blank">[NodeJS]AJAX 처리 - DEV_NUNU</a>

<a href="[https://www.inflearn.com/course/node-js-%EC%9B%B9%EA%B0%9C%EB%B0%9C/dashboard](https://www.inflearn.com/course/node-js-웹개발/dashboard)" target="_blank">Node.js 웹개발로 알아보는 백엔드 자바스크립트의 이해 - 인프런</a>



**해당 파일은 자신의 전공 실력 강화를 위해 정리하는 목적으로만 작성되었으며 이외 다른 목적으로는 사용되지 않습니다. 만약 저작권 관련 문제가 있다면 바로 연락주세요. 바로 삭제 조치 취하도록 하겠습니다.**