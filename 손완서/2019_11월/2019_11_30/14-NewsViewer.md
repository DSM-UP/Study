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
