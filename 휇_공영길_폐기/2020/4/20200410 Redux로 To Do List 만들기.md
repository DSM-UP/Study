

# Redux로 To Do List 만들기

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form>
    <input>
  </form>
  <ul></ul>
</body>
</html>
```

## JavaScript

```javascript
import {createStore} from 'redux';

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('input');

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [],action) => {
  switch(action.type) {
    case ADD_TODO : return [{text:action.text,id:Date.now()},...state];
    case DELETE_TODO : return state.filter(({id}) => id !== Number(action.targetId));
    default : return state;
  }
}  

const deleteTodo = e => {
  store.dispatch({type:DELETE_TODO,targetId:e.target.parentElement.id});
}
const createTodo  = text => {
  store.dispatch({type:ADD_TODO,text});
}

const paintTodo = () => {
  const toDos = store.getState();
  ul.innerHTML = ""; 
  toDos.forEach(({id,text}) => {
    const li = document.createElement("li");
    const btn = document.createElement('button');
    
    btn.addEventListener('click',deleteTodo);

    btn.innerText = "DEL";
    li.id = id;
    li.innerText = text;
    li.appendChild(btn);
    ul.appendChild(li);
  })  
}

const SUBMIT = e => {
  e.preventDefault();
  const text = input.value;
  input.value = "";
  createTodo(text);
}

const store = createStore(reducer);
store.subscribe(paintTodo);
 
form.addEventListener('submit',SUBMIT)
```

