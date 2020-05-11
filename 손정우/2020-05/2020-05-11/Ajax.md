# Ajax

Ajax는 Javascript와 XML을 이용해 비동기적인 정보 교환 기법이다.
이를 이용하면 서버와 클라이언트는 통신을 통해 동적으로 페이지를 렌더링이 가능해진다.

이를 구현하는 대표적인 것은 XMLHttpRequest 객체와 Fecth API가 있다.

```javascript
var request = new XMLHttpRequest();
request.open('Get', '//my.net/getId');
request.onreadystatechage = funciton() {
    if (request.readyState === 4 && request.status === 200) {
        document.getElementById('id').innerHTML = request.responseText;
    }
}
```



```javascript
fetch("//my.net/getId", {
    method: 'GET'
}).then((res) => {
    document.getElementById('id').innerHTML = res;
});
```



보면 알겠지만 굳이 XML이 아니여도 사용가능하다.



단 단점으로는 Ajax 스펙 자체가 매번 연결을 했다가 끊으므로 실시간 통신에 적합하지 않다. 따라서 웹소켓(TCP기반)과 WebRTC(UDP기반)을 사용한다.