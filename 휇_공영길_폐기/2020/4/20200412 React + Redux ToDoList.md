# Redux + React

## 설치

yarn add react-redux 

yarn add redux

## 코드

### index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Routes/store';

ReactDOM.render(
    <Provider store={store}> //Provider 태그로 감싸주고 store속성을 주어야함
        <App/>
    </Provider> ,
    document.getElementById('root'));
```

### App.js

```javascript
import React from 'react';
import Home from './Routes/home';

const App = () => {
    return (
        <Home/>
    )
}

export default App;
```

### Home.js

```javascript
import React, { useState } from 'react';
import { connect } from 'react-redux'; // 리액트와 리덕스를 연결해주는 connect함수 불러오기
import { actions } from './store'; //store.dispatch 의 함수를들 가져옴
import ToDo from './Todo'; 

const Home = ({toDos,addToDo}) => { 
    // mapStateToProps,mapDispatchToProps 로 인해 추가된 toDos,addToDo props
    const [text,setText] = useState("");

    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={text} />
                <button type="submit">ADD</button>
            </form>
            <ul>
                {toDos.map(now => <ToDo text={now.text} id={now.id}/>)}
            </ul>
        </>
    )
}

const mapStateToProps = (state,ownProps) => {
 	// 첫번째 인자로 store의 state를 받아옴 두번째 인자로 컴포넌트의 props를 받아옴
    return {toDos:state}; // 현재 컴포넌트의 props에 추가를 해 넘겨줌
}
const mapDispatchToProps = (dispatch,ownProps) => {
    // 첫번쨰 인자로 dispatch함수를 받아오고 두번째 인자로 컴포넌트의 props를 받아옴
    return {
        addToDo:text => dispatch(actions.addToDo(text))
    }; // 현재 컴포넌트의 props에 추가를 해줌
}

export default connect(mapStateToProps,mapDispatchToProps)(Home); 
//connect함수에 첫번째 인자로 state를 관리하는 함수를, 두번째 인자로 dispatch를 관리하는 함수를 넣어줌
```

### Store.js

```javascript
import {createStore} from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
    return {
        type:ADD,
        text
    };
};
const deleteToDo = id => {
    return {
        type:DELETE,
        id
    }
}

const reducer = (state=[],action) => {
    switch(action.type) {
        case ADD:
            return [{text:action.text,id:Date.now()},...state]
        case DELETE:
            return state.filter(now => now.id !== action.id);
        default: 
            return state;
    }
};

const store = createStore(reducer);

export const actions = {addToDo,deleteToDo}; //dispatch함수들을 export
export default store; 
```

### Todo.js

```javascript
import React from 'react';
import { connect } from 'react-redux';
import { actions } from './store';

const ToDo = ({text,onClick}) => {
    return <li>{text}<button onClick={onClick}>DEL</button></li>
}

function mapDispatchToProps(dispatch,ownProps) {
    return {
        onClick:() => dispatch(actions.deleteToDo(ownProps.id)) 
        //해당 컴포넌트 props를 ownProps로 받아오고 그에 해당하는 id
    }
}
export default connect(null,mapDispatchToProps)(ToDo);
// state를 받아올 필요가 없기 때문에 첫번째 인자로 null, dispatch를 해야하기 때문에 두번쨰 인자로 관리 함수를 넣어줌
```

