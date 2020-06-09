```javascript
import { createStore} from 'redux';  // store를 생성하는 createStore를 불러옴

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const ADD = "ADD";
const MINUS = "MINUS"; // 문자열을 변수화 시킴

const countModifier = (state = 0,action) => { 
    //modifier 선언 첫번째 매개변수는 state, 두번째 변수는 dispatch를 호출할때 같이옴
    switch(action.type) {
        case "ADD" : return ++state;
        case "MINUS" : return --state;
        default : return state;
    }
    return state;
}

const countStore = createStore(countModifier); // store를 생성하고 modifier를 넣어줌

const onChange = () => {  // store가 변화할때마다 실행할 함수
    number.innerText = countStore.getState(); 
} 
countStore.subscribe(onChange); // store가 변화될때마다 onChange함수를 실행하게 함


add.onclick=() => countStore.dispatch({type:ADD}); 
minus.onclick=() => countStore.dispatch({type:MINUS}); // 버튼을 클릭시 dispatch가 발생하게함
```

