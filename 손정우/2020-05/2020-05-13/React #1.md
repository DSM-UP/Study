# React #1

React의 주 기능은 html 엘레먼트를 객체화 시킨다는 것이다.
이는 엘레먼트의 재사용성을 높이고 코드의 가독성 또한 높인다.

엘리먼트를 React에서 객체화 시킨것을 React 엘리먼트라 한다. 이는 JSX라는 javascript의 확장 문법을 통해 `const element = <h1>hello, world!</h1>;`처럼 표현할 수 있따.

 UI를 재사용 가능한 여러 조각으로 나눈고 객체화 시킨 것을 컴포넌트라하고 이를 정의하는 크게 2가지가 있는데 바로 함수 컴포넌트와 클래스 컴포넌트다.

함수 컴포넌트는 단순히 엘레먼트를 반환하는 함수이다.

```jsx
function welcome() {
    return <h1>hello, world!</h1>;
}
```

클래스 컴포넌트는 ES6의 문법인 class를 사용하는 방법이다.

```jsx
class Welcome extends React.Component {
    render() {
        return <h1>hello</h1>;
    }
}
```



이들을 렌더링하는 방법은 ReactDOM.render()를 사용하는 것이다.

위의 함수의 첫번째 인자는 엘레먼트이고 두번째 인자로 해당 엘레먼트를 넣을 위치이다.

```jsx
function welcome() {
    return <h1>hello, world!</h1>;
}

ReactDOM.render(
  <welcom/>,
  document.getElementById('root')
);
```

위와 같이 표현할 수 있다.