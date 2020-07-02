<<<<<<< HEAD
# Express에서 정적 파일 제공하기

이미지, CSS 파일, JavaScript 파일과 같은 정적 파일을 Express에서 제공하고 싶다면 기본 제공 미들웨어 함수인 `express.static`을 사용하면 된다.


정적 파일이 포함된 디렉토리의 이름을 `express.static` 미들웨어 함수에 인수로 전달하면 파일의 직접적인 제공을 시작할 수 있다.

```node.js
// public이라는 이름의 디렉토리에 포함된 정적파일을 제공할 수 있다.
app.use(express.static('public'));
```

암묵적인지는 잘 모르겠지만 정적 파일은 모두 public 디렉토리에 저장하는 것 같다.



만약 여러 개의 정적 파일이 각기 다른 디렉토리에 있다면 다음과 같이 `express_static` 미들웨어 함수를 여러 번 호출해야 한다.

```node.js
app.use(express.static('public'));
app.use(express.static('files'));
```

Express는 정적 디렉토리를 설정한 순서대로 파일을 검색한다.



## 정적 파일이란?

직접 값에 변화를 주지 않는 이상 변하지 않는 파일을 의미한다.

ex : image, css file, js file

서버의 자원 중 브라우저에 미리 다운로드하여 화면을 그리는 역할을 하는 파일을 말한다.

=======
# Express에서 정적 파일 제공하기

이미지, CSS 파일, JavaScript 파일과 같은 정적 파일을 Express에서 제공하고 싶다면 기본 제공 미들웨어 함수인 `express.static`을 사용하면 된다.


정적 파일이 포함된 디렉토리의 이름을 `express.static` 미들웨어 함수에 인수로 전달하면 파일의 직접적인 제공을 시작할 수 있다.

```node.js
// public이라는 이름의 디렉토리에 포함된 정적파일을 제공할 수 있다.
app.use(express.static('public'));
```

암묵적인지는 잘 모르겠지만 정적 파일은 모두 public 디렉토리에 저장하는 것 같다.



만약 여러 개의 정적 파일이 각기 다른 디렉토리에 있다면 다음과 같이 `express_static` 미들웨어 함수를 여러 번 호출해야 한다.

```node.js
app.use(express.static('public'));
app.use(express.static('files'));
```

Express는 정적 디렉토리를 설정한 순서대로 파일을 검색한다.



## 정적 파일이란?

직접 값에 변화를 주지 않는 이상 변하지 않는 파일을 의미한다.

ex : image, css file, js file

서버의 자원 중 브라우저에 미리 다운로드하여 화면을 그리는 역할을 하는 파일을 말한다.

>>>>>>> fcd0fbc7db4292ed39c085ae81536bb7026d8e8b
**그 내용이 고정되어 응답을 할 때 별도의 처리 없이 파일 내용을 그대로 보내주면 되는 파일**을 말한다.