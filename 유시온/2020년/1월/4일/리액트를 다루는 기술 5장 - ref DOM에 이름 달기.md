## CutyApple's React Study 

> ### '*실무에서 알아야 할 기술은 따로 있다! 리액트를 다루는 기술* '책을              이용하여 공부하였습니다.



> ## 5 ref: DOM에 이름 달기



일반 HTML에서 DOM 요소에 이름을 달 때는 id를 사용합니다.

`<div id="my-element"></div>`

특정 DOM 요소에 어떤 작업을 해야 할 때 이렇게 요소에 id를 달면 CSs에서 특정 id에 특정 스타일을 적용하거나 자바스크립트에서 해당 id를 가진 요소를 찾아서 작업할 수 있습니다. 

HTML에서 id를 사용해 DOM에 이름을 다는 것처럼 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법이 있습니다. 바로 ref(reference의 줄임말) 개념입니다.

### 5.1 ref는 어떤 상황에서 사용해야 할까?

DOM을 직접 건드려야 할 때 사용해야 합니다. 예를 들어 일반 JS 및 jQuery 웹 사이트에서 input을 검증할 때는 특정 id를 가진 input에 클래스를 설정해 줍니다.

하지만 리액트에서는 DOM에 접근하지 않아도 state로 구현할 수 있습니다. 

```react
import React, { Component } from 'react';
import './Validation.css'

class Validation extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false    
    };

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />               
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default Validation;
```

```react
.success {
    background: lightgreen;
}

.failure{
    background: lightcoral;
}
```

input에서 onChange 이벤트가 발생하면 handleChange를 호출하여 state의 password 값을 업데이트하게 했습니다. button에서는 onClick 이벤트가 발생하면 handleButtonClick을 호출하여 clicked 값을 참으로 설정하고, validated 값을 검증 결과로 설정했습니다.

input의 className 값은 버튼을 누르기 전에는 비어 있는 문자열을 전달하며, 버튼을 누른 후에는 검증 결과에 따라 success 값 또는 failure 값을 설정합니다. 그리고 이 값에 따라 input 색상이 초록색 또는 빨간색으로 나타납니다.



* 특정 input에 포커스 주기
* 스크롤 박스 조적하기
* Canvas 요소에 그림 그리기 등

이러한 상황에서는 COM에 직접 접근해야 하는데, 이때 ref를 사용합니다.



### 5.2  ref 사용

ref를 만드는 가장 기본적인 방법은 콜백 함수를 사용하는 것입니다. ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해 주면 됩니다. 이 콜백 함수는 ref 값을 파라미터로 전달받습니다. 그리고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정해 줍니다. 

`<input ref={(ref) => {this.input=ref}}/>`

이렇게 하면 앞으로 this.input은 input 요소의 DOM을 가리킵니다. ref의 이름은 원하는 것으로 자유롭게 지정할 수 있습니다. 

ref를 만드는 또 다른 방법은 리액트에 내장되어 있는 createRef라는 함수를 사용하는 것입니다. 이 함수를 사용해서 만들면 더 적은 코드로 쉽게 사용할 수 있습니다. 이 기능은 리액트 v16.3 부터 도입되었습니다. 



### 5.3 컴포넌트에 ref 달기

리액트에서는 컴포넌트에도 ref를 달 수 있습니다. 이 방법은 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씁니다. 컴포넌트에 ref를 다는 방법은 DOM에 ref를 다는 방법과 같습니다.

```react
<MyComponent
	ref={(ref) => {this.myComponent=ref}}    
/>
```

이렇게 하면 MyComponent 내부의 메소드 및 멤버 변수에도 접근할 수 있습니다. 