# React 14. 외부 API를 연동하여 뉴스 뷰어 만들기

## 1. 비동기 작업의 이해

웹 애플리케이션에서 서버 쪽 데이터가 필요할 때는 Ajax 기법을 사용하여 서버의 API를 호출함으로써 데이터 수신
이렇게 서버의 API를 사용해야 할 대는 네트워크 송수신 과정에서 시간이 걸리기 때문에 작업이 즉시 처리되는 것이 아니라, 응답을 받을 때까지 기다렸다가 전달받은 응답 데이터를 처리

만약 작업을 동기적으로 처리한다면 요청이 끝날 때까지 기다리는 동안 중지 상태가 되기 때문에 다른 작업을 할 수 없음
비동기적으로 처리한다면 웹 애플리케이션이 멈추지 않기 때문에 동시에 여러 가지 요청을 처리할 수도 있고, 기다리는 과정에서 다른 함수도 호출 가능

비동기 작업을 할 때 가장 흔히 사용하는 방법은 콜백 함수 사용
함수 자체를 다른 함수의 인자로 전달해 주는 것을 콜백 함수라 함

콜백 함수가 여러 번 중첩되어 코드의 가독성이 떨어지는 것을 콜백 지옥이라 함

## 2. axios로 API 호출해서 데이터 받아 오기

axios는 현재 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트
이 라이브러리의 특징은 HTTP 요청을 Promise 기반으로 처리한다는 점

## 3. newsapi API 키 발급받기

key = "ccb62b421113417abaabf4e246834683"

사용할 API 주소는 두 가지 형태

1. 전체 뉴스 불러오기
2. 특정 카테고리

여기서 카테고리는 business, entertainment, health, science, sports, technology 중에 골라서 사용 가능
카테고리 생략 -> 모든 카테고리의 뉴스

## 4. 뉴스 뷰어 UI 만들기

NewsItem은 각 뉴스 정보를 보여 주는 컴포넌트이고, NewsList는 API를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링해 주는 컴포넌트

NewsItem
"source": {
"id": null,
"name": "Donga.com"
},
"author": null,
"title": "손흥민 본머스전 선제골 도움… 6경기 연속 공격포인트 작성 - 동아일보",
"description": "손흥민이 조제 모리뉴 감독 부임 후 3경기 연속이자 최근 6경기 연속 공격 포인트를 작성하며 상승세를 이어갔다. 토트넘의 손흥민이 1일 오전 0시 영국 런던의 토트넘 홋스퍼 …",
"url": "http://www.donga.com/news/article/all/20191201/98607729/1",
"urlToImage": "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2019/12/01/98503761.2.jpg",
"publishedAt": "2019-11-30T22:21:00Z",
"content": null
}

다음 필드를 리액트 컴포넌트에 출력

title: 제목
description: 내용
url: 링크
urlToImage: 뉴스 이미지

NewsItem 컴포넌트는 article이라는 객체를 props로 통째로 받아 와서 사용

## 5. 데이터 연동하기

주의할 점은 useEffect에 등록하는 함수에 async를 붙이면 안된다는 것
useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문
useEffect 내부에서 async/await를 사용하고 싶다면, 함수 내부에 async 키워드가 붙은 또 다른 함수를 만들어서 사용해 주어야 함

추가로 loading이라는 상태도 관리하여 API 요청이 대기 중인지 판별할 것
요청이 대기중일 때는 loading 값이 true가 되고, 요청이 끝나면 loading 값이 false가 되어야 함

데이터를 불러와서 뉴스 데이터 배열을 map 함수를 사용하여 컴포넌트 배열로 변활할 때 map 함수를 사용하기 전에 꼭 !articles를 조회하여 해당 값이 현재 null이 아닌지 검사해야 함
이 작업을 하지 않으면, 아직 데이터가 없을 때 null에는 map 함수가 없기 때문에 렌더링 과정에서 오류가 발생

## 6. 카테고리 기능 구현하기

뉴스 카테로기는 총 6개이며, 다음과 같이 영어로 구성

business
science
entertainment
sports
health
technology

현재 category 값이 무엇인지에 따라 요청할 주소가 동적으로 바뀜
category 값이 all 이라면 query 값을 공백으로 설정하고, all이 아니라면 "&category=카테고리" 형태의 문자열을 만들도록 함
그리고 이 query를 요청할 때 주소에 포함시켜 줌

추가로 category 값이 바뀔 때마다 주소를 새로 불러와야 하기 때문에 useEffect의 의존 배열(두 번째 파라미터로 설정하는 배열)에 category를 넣어 주어야 함

만약 이 컴포넌트를 클래스형 컴포넌트로 만들게 된다면 componentDidMount와 componentDidUpdate에서 요청을 시작하도록 설정해야 함
함수형 컴포넌트라면 useEffect 한 번으로 컴포넌트가 맨 처음 렌더링될 때, 그리고 category 값이 바뀔 때 요청하도록 설정 가능

## 7. 리액트 라우터 적용하기

현재 선택된 category 값을 URL 파라미터를 통해 사용할 것이므로 Categories 컴포넌트에서 현재 선택된 카테고리 값을 알려 줄 필요도 없고, onSelect 함수를 따로 전달해 줄 필요 X

/:category?와 같은 형태로 맨 뒤에 물음표 문자가 들어가 있는데, 이는 category 값이 선택적이라는 의미
즉, 있을 수도 있고 없을 수도 있다는 뜻
category URL 파라미터가 없다면 전체 카테고리를 선택한 것으로 간주

기존의 onSelect 함수를 호출하여 카테고리를 선택하고, 선택된 카테고리에 다른 스타일을 주는 기능을 NavLink로 대체
특정 컴포넌트에 styled-components를 사용할 대는 styled(컴포넌트이름)``과 같은 형식을 사용

## 8. usePromise 커스텀 Hook 만들기

usePromise Hook은 Promise의 대기 중, 완료 결과, 실패 결과에 대한 상태를 관리하며, usePromise의 의존 배열 deps를 파라미터로 받아 옴
파라미터로 받아 온 deps 배열은 usePromise 내부에서 사용한 useEffect의 의존 배열로 설정됨
이 배열을 설정하는 부분에서 ESLink 경고가 나타나게 됨

usePromise를 사용하면 NewsList에서 대기 중 상태 관리와 useEffect 설정을 직접 하지 않아도 되므로 코드가 훨씬 간결해짐

## 9. 정리

리액트 컴포넌트에서 API를 연동하여 개발할 때 절대 잊지 말아야 할 유의 사항은 useEffect에 등록하는 함수는 async로 작성하면 안 된다는 점
그 대신 함수 내부에 async 함수를 따로 만들어 주어야 함
