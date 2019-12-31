# 7. 컴포넌트의 라이프사이클 메소드

모든 리액트 컴포넌트에는 라이프사이클(수명주기)이 존재
컴포넌트의 수명은 페이지에서 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝

컴포넌트를 처음으로 렌더링할 때 어떤 작업을 처리해야 하거나 컴포넌트를 업데이트하기 전후로 어떤 작업을 처리해야 할 수도 있고, 또 불필요한 업데이트를 방지해야 할 수도 있음
이 때 컴포넌트의 라이프사이클 메소드를 사용

라이프사이클 메소드는 클래스형 컴포넌트에서만 사용 가능
함수형 컴포넌트에서는 Hooks 기능을 사용하여 비슷한 작업 처리 가능

## 1. 라이프사이클 메소드의 이해

종류는 9가지
Will 접두사가 붙은 메소드는 어떤 작업을 작동하기 전에 실행되는 메소드
Did 접두사가 붙은 메소드는 어떤 작업을 작동한 후에 실행되는 메소드

이 메소드들은 우리가 컴포넌트 클래스에서 덮어 써 선언함으로써 사용 가능

라이프사이클은 총 세 가지, 즉 마운트, 업데이트, 언마운트 카테고리로 분류

1. Mount(마운트)
   DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트라 함
   이때 호출하는 메소드

constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메소드
getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메소드
render: 우리가 준비한 UI를 렌더링하는 메소드
componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메소드

2. Update(업데이트)
   컴포넌트는 다음과 같은 총 네 가지 경우에 업데이트

   1. props가 바뀔 때
   2. state가 바뀔 때
   3. 부모 컴포넌트가 리렌더링될 때
   4. this.forceUpdate로 강제로 렌더링을 트리거할 때

컴포넌트는 다양한 이유로 업데이트
첫째, 부모 컴포넌트에서 넘겨주는 props가 바뀔 때
둘째, 컴포넌트 자신이 들고 있는 state가 setState를 통해 업데이트될 때
셋째, 부모 컴포넌트가 리렌더링될 때
자신에게 할당된 props가 바뀌지 않아도, 또는 자신이 들고 있는 state가 바뀌지 않아도, 부모 컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링

getDerivedStateFromProps: props의 변화에 따라 state 값에도 변화를 주고 싶을 때
shouldComponentUpdate: 컴포넌트가 리렌더링을 해야 할지 말아야 할지 결정하는 메소드 / 이 메소드는 true 혹은 false 값을 반환해야 함 / true를 반환하면 다음 라이프사이클 메소드를 계속 실행하고, false를 반환하면 작업을 중지 / 만약 특정 함수에서 this.forceUpdate() 함수를 호출한다면 이 과정을 생략하고 바로 render 함수 호출
render: 컴포넌트를 리렌더링
getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메소드
componentUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메소드

3. Unmount(언마운트)
   마운트의 반대 과정, 즉 컴포넌트를 DOM에 제거하는 것

   componentWillUnmount: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메소드

## 2. 라이프사이클 메소드 살펴보기

1. render() 함수
   this.props와 this.state에 접근 가능, 리액트 요소 반환
   이벤트 설정이 아닌 곳에서 setState를 사용 X, 브라우저의 DOM에 접근 X
   DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서 처리

2. constructor 메소드
   이것은 컴포넌트의 생성자 메소드로 컴포넌트를 만들 때 처음으로 실행
   초기 state를 설정 가능

3. getDerivedStateFromProps 메소드
   props로 받아 온 값을 state에 동기화시킴
   컴포넌트가 마운트될 때와 업데이트될 때 호출

   ex) static getDerivedStateFromProps(nextProps, prevState) {
   if(nextProps.value !== prevState.value) { // 조건에 따라 특정 값 동기화
   return { value: nextProps.value };
   }
   return null; // state를 변경할 필요가 없다면 null 반환
   }

4. componentDidMount 메소드
   컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행
   다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리

5. shouldComponenUpdate 메소드
   props 또는 state를 변경했을 때, 리렌더링을 시작할 지 여부를 지정하는 메소드
   반드시 true 값 또는 false 값 반환
   컴포넌트를 만들 때 이 메소드를 따로 생성하지 않으면 기본적으로 언제나 true 값을 반환
   이 메소드가 false값을 반환한다면 업데이트 과정은 여기서 중지

   이 메소드 안에서 현재 props와 state는 this.props와 this.state로 접근, 새로 설정된 props 또는 state는 nextProps와 nextState로 접근

   프로젝트 성능을 최적화 할 때, 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할 때는 false값을 반환하게 함

6. getSnapshotBeforeUpdate 메소드
   render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
   이 메소드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받음
   주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용(예: 스크롤바 위치 유지)

   ex) getSnapshotBeforeUpdate(prevProps, prevState) {
   if(prestate.array !== this.state.array) {
   const { scrollTop, scrollHeight } = this.list
   return { scrollTop, scrollHeight };
   }
   }

7. componentDidUpdate 메소드
   리렌더링을 완료한 후 실행
   DOM 관련 처리를 해도 무방
   여기서는 prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근 가능
   getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달받음

8. componentWillUnmount 메소드
   컴포넌트를 DOM에서 제거할 때 실행
   componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업

9. componentDidCatch 메소드
   컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여 줄 수 있게 함
   ex) componentDidCatch(error, info) {
   this.setState({
   error: true
   });
   console.log({ error, info });
   }
   여기서 error는 파라미터에 어떤 에러가 발생했는지 알려 주며, info 파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 줌
   실제로 사용할 때 오류가 발생하면 서버 API를 호출하여 따로 수집 가능
   컴포넌트 자신에게 발생하는 에러를 잡아낼 수 없고 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있음

## 3. 정리

라이프사이클 메소드는 컴포넌트 상태에 변화가 있을 때마다 실행하는 메소드
이 메소드들은 서드파티 라이브러리를 사용하거나 DOM을 직접 건드려야 하는 상황에서 유용
컴포넌트 업데이트의 성능을 개선할 때는 shouldComponentUpdate가 중요하게 사용됨
