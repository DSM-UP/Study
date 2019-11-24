# React   react-virtualized 로 최적화 하기

## react-virtualized 설치

``` javascript
npm i react-virtualized
yarn add react-virtualized
```



## 사용 예시

### list 컴포넌트

``` javascript
const TodoList = ({todos,onRemove,onToggle,onEdit}) => {
    
    const virtualizedRender = useCallback(({index,style}) => {  // index,style 을 받아옴
        const todo = todos[index]; // todos의 배열중에서 현재랜더링해줄 todo를 가져옴 
        return (
            <TodoListItem
                todo={todo} // todo값을 넣어줌
                key={index}
                onRemove={onRemove} // 
                onToggle={onToggle} // 
                onEdit={onEdit} // 함수 삽입
                style={style} // 받아온 스타일을 적용한다
            />
        )
    });

    return (
        <List 
            className="TodoList" 
            width={512} // 전체크키
            height={513} // 전체 높이
            rowCount={todos.length} // 항목의 개수
            rowHeight={57} // 항목의 높이
            rowRenderer={virtualizedRender} // 항목이 렌더링할때 쓰일 함수
            list={todos} // todos배열을 넣어줌
            style={{outline:"none"}} // List에 기본으로 적용되는 스타일을 제거한다.
        />
    );
}

export default TodoList;
```

### item 컴포넌트

``` javascript
import React,{memo} from 'react';
import {MdCheckBoxOutlineBlank,MdCheckBox,MdRemoveCircleOutline,MdModeEdit} from 'react-icons/md';
import './TodoListItem.scss'; 

const TodoListItem = ({todo,onRemove,onToggle,onEdit,style}) => { // 함수들과 style을 받아옴

    const {id,checked,text} = todo;
    return (    
        <div className="TodoListItem-virtualized" style={style}> 
        //새로운 div태그로 감싸주고 style을 적용시켜줌 
            <div className="TodoListItem">
                <div className={"checkbox "+(checked?"true":"false")}  onClick={()=>onToggle(id)}>
                    {checked?<MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
                    <div className="text">{text}</div>
                </div>
                <div className="edit" onClick={()=>{onEdit(id)}}>
                    <MdModeEdit/>
                </div>
                <div className="remove" onClick={()=>{onRemove(id)}}>
                    <MdRemoveCircleOutline/>
                </div>
            </div>
        </div>
    );
};

export default memo(TodoListItem);
```

