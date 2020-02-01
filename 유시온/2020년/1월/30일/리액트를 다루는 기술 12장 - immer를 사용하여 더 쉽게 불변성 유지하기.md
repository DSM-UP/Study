## CutyApple's React Study 

> ### '*실무에서 알아야 할 기술은 따로 있다! 리액트를 다루는 기술* '책을              이용하여 공부하였습니다.



> ## 12 immer를 사용하여 더 쉽게 불변성 유지하기



### 12.1 immer를 설치하고 사용법 알아보기

`yarn add immer` 를 이용하여 immer를 설치합니다.

`App.js`

```react
import React , { useRef, useCallback, useState } from 'react';

const App = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({ name: '', username: '' });
    const [data, setData] = useState({
        array: [],
        uselessValue: null,
    });
    
    const onChange = useCallback(
    	e => {
            const { name, value } = e.target;
            setForm({
                ...form,
                [name]: [value]
            });
        },
        [form]
    );
    
    const onSubmit = useCallback(
    	e => {
            e.preventDefault();
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.usename,
            };
            
            setData({
                ...data,
                array: data.array.concat(info)
            });
            
            setForm({
                name: '',
                username: '',
            });
            nextId.current += 1;
        },
        [data, form.name, form.username]
    );
    
    const onRemove = useCallback(
    	id => {
            setData({
                ...data,
                array: data.array.filter(info => info.id !== id)
            });
        },
        [data]
    );
    
    return (
    	<div>
        	<form onSubmit={onSubmit}>
            	<input
                    name="username"
                    placeholder="아이디"
                    value={form.username}
                    onChange={onChange}
                />
                <input
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <div>
            	<ul>
                	{data.array.map(info => (
                    	<li key={info.id} onClick={() => onRemove(info.id)}>
                        	{info.username} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
```



immer를 사용하면 불변성을 유지하는 작업을 매우 간단하게 처리할 수 있스빈다. 

```react
import produce from 'immer';
const nextState = produce(originalState, draft => {
    draft.somewhere.deep.inside = 5;
})
```

produce라는 함수는 두 가지 파라미터를 받습니다. 첫 번째 파라미터는 수정하고 싶은 상태이고, 두 번째 파라미터는 상태를 어떻게 업데이트할지 정의하는 함수입니다. 

두 번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면, produce 함수가 불변성을 대신해 주면서 새로운 상태를 생성해 줍니다. 

이 라이브러리의 핵심은 **'불변성에 신경 쓰지 않는 것처럼 코드를 작성하되 불병성 관리는 제대로 해 주는 것'** dlqslek.

```react
import produce from 'immer';

const originalState = {
    {
    	id: 1,
    	todo: '전개 연산자와 배열 내장 함수로 불변성 유지하기',
    	checked: true,
	},
    {
        id: 2,
        todo: 'immer로 불변성 유지하기',
        checked: false,
    },
}

const nextState = produce(originalState, draft => {
    const todo => draft.find(t => t.id === 2);
    todo.checked = true;
    
    draft.push({
        id: 3,
        todo: '일정 관리 앱에 immer 적용하기',
        checked: false,
    });
    
    draft.splice(draft.findIndex(t => t.id === 1), 1);
});
```



`App.js`

```react
import React , { useRef, useCallback, useState } from 'react';
import produce from 'immer';

const App = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({ name: '', username: '' });
    const [data, setData] = useState({
        array: [],
        uselessValue: null,
    });
    
    const onChange = useCallback(
    	e => {
            const { name, value } = e.target;
            setForm(
                produce(form, draft => {
                	draft[name] = value;         
                })
            );
        },
        [form]
    );
    
    const onSubmit = useCallback(
    	e => {
            e.preventDefault();
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.usename,
            };
            
            setData(
                produce(data, draft => {
                	draft.array.push(info);         
                })
            );
            
            setForm({
                name: '',
                username: '',
            });
            nextId.current += 1;
        },
        [data, form.name, form.username]
    );
    
    const onRemove = useCallback(
    	id => {
            setData(
                produce(data, draft => {
                	draft.array.splice(draft.array.findIndex(info => info.id === id), 1);                 })
            );
        },
        [data]
    );
    
    return (
    	<div>
        	<form onSubmit={onSubmit}>
            	<input
                    name="username"
                    placeholder="아이디"
                    value={form.username}
                    onChange={onChange}
                />
                <input
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <div>
            	<ul>
                	{data.array.map(info => (
                    	<li key={info.id} onClick={() => onRemove(info.id)}>
                        	{info.username} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
```



immer에서 제공하느 produce 함수를 호출할 때, 첫 번째 파라미터가 함수 형태라면 업데이트 함수를 반환합니다. 

```react
const update = (draft => {
    draft.value = 2;
});
const originalState = {
    foo: 'bar',
    value: 1,
};
const nextState = update(originalState);
console.log(nextState); // { foo: 'bar', value: 2 }
```



이러한 immer의 소것ㅇ과 useState의 함수형 업데이트를 활용해 코드를 더욱 깔끔히 짤 수 있습닏.ㅏ

```react
import React , { useRef, useCallback, useState } from 'react';
import produce from 'immer';

const App = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({ name: '', username: '' });
    const [data, setData] = useState({
        array: [],
        uselessValue: null,
    });
    
    const onChange = useCallback(
    	e => {
            const { name, value } = e.target;
            setForm(
                produce(draft => {
                	draft[name] = value;         
                })
            );
        },
        []
    );
    
    const onSubmit = useCallback(
    	e => {
            e.preventDefault();
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.usename,
            };
            
            setData(
                produce(draft => {
                	draft.array.push(info);         
                })
            );
            
            setForm({
                name: '',
                username: '',
            });
            nextId.current += 1;
        },
        [form.name, form.username]
    );
    
    const onRemove = useCallback(
    	id => {
            setData(
                produce(draft => {
                	draft.array.splice(draft.array.findIndex(info => info.id === id), 1);                 })
            );
        },
        []
    );
    
    return (
    	<div>
        	<form onSubmit={onSubmit}>
            	<input
                    name="username"
                    placeholder="아이디"
                    value={form.username}
                    onChange={onChange}
                />
                <input
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <div>
            	<ul>
                	{data.array.map(info => (
                    	<li key={info.id} onClick={() => onRemove(info.id)}>
                        	{info.username} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
```

