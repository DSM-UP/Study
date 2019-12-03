# React 15. Context API

Context API는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 유용한 기능

## 1. Context API를 사용한 전역 상태 관리 흐름 이해하기

리액트 애플리케이션은 컴포넌트 간에 데이터를 props로 전달하기 때문에 컴포넌트 여기저기서 필요한 데이터가 있을 때는 주로 최상위 컴포넌트인 App의 state에 넣어서 관리

리덕스나 MobX 같은 상태 관리 라이브러리를 사용하여 전역 상태 관리 작업을 더 편하게 처리
리액트 v16.3 업데이트 이후에는 Context API가 많이 개선되었기 때문에 별도의 라이브러리를 사용하지 않아도 전역 상태를 손쉽게 관리
Context API를 사용하면 Context를 만들어 단 한 번에 원하는 값을 받아 와서 사용 가능

## 2. Context API 사용법 익히기

새 Context를 만들 때는 createContext 함수를 사용함
파라미터에는 해당 Context의 기본 상태를 지정

ColorBox라는 컴포넌트를 만들어서 ColorContext 안에 들어 있는 색상을 보여 주는데, 이때 색상을 props로 받아 오는 것이 아니라 ColorContext 안에 들어 있는 Consumer라는 컴포넌트를 통해 색상을 조회함

Consumer 사이에 중괄호를 열어서 그 안에 함수를 넣어 줌
이러한 패턴을 Function as a child, 혹은 Render Props라고 함
컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 문자열이 아닌 함수 전달

Provider를 사용하면 Context의 value를 변경 가능

기존에 createContext 함수를 사용할 때는 파라미터로 Context의 기본값을 전달
이 기본값은 Provider를 사용하지 않았을 때만 사용됨
만약 Provider는 사용했는데 value를 명시하지 않았다면, 이 기본값을 사용하지 않기 때문에 오류가 발생

## 3. 동적 Context 사용하기

Context의 value에는 무조건 상태 값만 있어야 하는 것 X
함수 전달 가능

e.preventDefault()를 호출하면 브라우저 메뉴를 뜨지 않게 설정 가능

## 4. Consumer 대신 Hook 또는 static contextType 사용하기

리액트에 내장되어 있는 Hooks 중에 useContext라는 Hook을 사용하면, 함수형 컴포넌트에서 Context를 아주 편하게 사용 가능

만약 children 함수를 전달하는 Render Props 패턴이 불편하다면, useContext Hook을 사용하여 훨씬 편하게 Context 값 조회 가능

클래스형 컴포넌트에서 Context를 좀 더 쉽게 사용하고 싶다면 static contextType을 정의하는 방법이 있음
이렇게 하면 this.context를 조회했을 때 현재 Context의 value를 가리키게 된다.

static contextType을 정의하면 클래스 메소드에서도 Context에 넣어 둔 함수를 호출할 수 있다는 장점
단점은, 한 클래스에서 하나의 Context밖에 사용 불가

## 5. 정리

Context API를 통해 더욱 쉽게 상태 교류 가능

프로젝트의 컴포넌트 구조가 꽤 간단하고 다루는 상태의 종류가 그다지 많지 않다면, 굳이 Context를 사용할 필요 X
하지만 전역적으로 여기저기서 사용되는 상태가 있고 컴포넌트의 개수가 많은 상황이라면, Context API를 사용
