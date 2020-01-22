# Promise

- Promise 용어
  - 대기중(pending) : 아직 비동기 작업이 완료되지 않은 상태
  - 이행됨(fulfilled) : 성공적으로 끝난 상태
  - 거부됨(rejected) : 작업 실패하여 종료된 상태
  - 처리됨(settled) : Promise가 이행되거나 거부된 상태

~~~
promise.then([onFulfilled], [onRejected])
~~~

위 코드에서 onFulfilled()는 Promise의 이행 값을 받는 함수이고, onRejected()는 거부 이유를 받는 함수이다.

onFulfilled, onRejected 모두 선택 사항.

- Promise로 바꾸기 전

~~~
asyncOperation(arg, (err, result) => {
	if(err) {
		// 에러 처리
	}
	// 결과 처리
})
~~~

- Promise로 바꾼 후

~~~
asyncOperation(arg)
	.then(result => {
		// 결과 처리
	}, err => {
		// 에러 처리
})
~~~

**then() 메소드의 중요한 특성** : 동기식으로 다른 프라미스를 반환함.



- onFulfilled() 혹은 onRejected() 함수 중 하나가 x라는 값을 반환할 경우, then() 메소드가 반환하는 프라미스
  - x가 값이면 이행 값 x를 가지고 핸들러가 호출됨.
  - x가 Promise거나 thenable(then() 메소드가 존재)인 경우, x를 가지고 이행된 값을 가지고 핸들러가 호출됨.
  - x가 Promise거나 thenable(then() 메소드가 존재)인 경우, x의 거부 이유로 에러 핸들러가 호출됨.