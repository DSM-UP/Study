# React-Icons 사용하기

## How to use? 

* npm i react-icons
*  http://react-icons.netlify.com/#/icons/md 접속후 원하는 아이콘 찾기
* 찾았다면 import 구문을 사용하여 컴포넌트 형식으로 불러온다 

## Ex

``` javascript
import React from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss'

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input type="text" placeholder="할 일을 입력하세요"/>
            <button><MdAdd/></button>
        </form>
    );
}

export default TodoInsert;
```





