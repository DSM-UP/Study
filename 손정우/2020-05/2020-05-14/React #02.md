# React #02

컴포넌트에서 상황에 따라 내용이 바뀌는 경우 속성을 사용할 수 있습니다.

이 속성들을 props라고 합니다. 

함수 컴포넌트

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
```
클래스 컴포넌트
```jsx
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}
```
렌더링
```jsx
ReactDOM.render(
  <Welcome name='jungwoo' />,
  document.getElementById('root')
);
```



이러한 props는 기본적으로 immutable합니다. 즉 렌더링 될 때의 값으로 고정되며 이외에는 바꿀 수 없습니다.

따라서 사용자의 행동, 네트워크 응답 등의 상황에 따라 반응적으로 동작할 수 없습니다.

이에 사용하는 것이 state입니다.
state는 클래스 컴포넌트에서 사용할 수 있고 값을 바꿀 수 있으며 setState를 통해서 값을 변경하는 동시에 UI를 업데이트 할 수 있습니다.

아래는 시간을 보여주는 컴포넌트입니다.

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }

}
```

위에서 보듯이 생명주기 또한 가집니다.

