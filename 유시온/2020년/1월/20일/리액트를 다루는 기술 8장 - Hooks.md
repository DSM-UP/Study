## CutyApple's React Study 

> ### '*실무에서 알아야 할 기술은 따로 있다! 리액트를 다루는 기술* '책을              이용하여 공부하였습니다.



> ## 8 Hooks

Hooks는 리액트 v16.8에 새로 도입된 기능으로 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해 줍니다.



### 8.1 useState

useState는 가장 기본적인 Hooks 이며, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해 줍니다. 

```react
import React, { useState } from 'react';

const Counter = () => {
    const [value, setValue] = setState(0);
    
    return(
    	<div>
        	<p>
            	현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    );
};

export default Counter;
```



```react
import React from 'react';
import Counter from './Counter';

const App = () => {
    return <Counter/>;
};

export default App;
```



하나의 useState 함수는 하나의 상태 값만 관리할 수 있습니다. 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러 번 사용하면 됩니다.

```react
import React, { useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    
    const onChangeName = e => {
        setName(e.target.value);
    };
    
    const onChangeNickname = e => {
        setNickname(e.target.value);
    };
    
    return(
    	<div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
            	<div>
                	<b>이름:</b> {name}
                </div>
                <div>
                	<b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
```



```react
import React from 'react';
import Info from './Info';

const App = () => {
    return <Info/>;
};

export default App;
```



### 8.2 useEffect

useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hooks 입니다. 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 보아도 무방합니다.

```react
import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        console.log({
            name, 
            nickname
        });
    });
    
    const onChangeName = e => {
        setName(e.target.value);
    };
    
    const onChangeNickname = e => {
        setNickname(e.target.value);
    };
    
    return(
    	<div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
            	<div>
                	<b>이름:</b> {name}
                </div>
                <div>
                	<b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
```



useEffect에서 설정한 함수를 컴포넌트가 화면에 처음 랜더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어 주면 됩니다.

```react
useEffet(() => {
    console.log('마운트될 때만 실행됩니다.');
}, []);
```



useEffect를 사용할 때, 특정 값이 변경될 때만 호출하고 싶은 경우, 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어 주면 됩니다.

```react
useEffect(() => {
    console.log(name);
}, [name]);
```



useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라집니다. 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리함수를 반환해 주어야 합니다.

```react
useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
        console.log('cleanup');
        console.log(name);
    };
});
```



```react
import React, { useState } from 'react';
import Info from './Info';

const App = () => {
    const [visible, setVisible] = useState(false);
    return(
    	<div>
        	<button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr/>
            {visible  && </Info/>}
        </div>
    );
};

export default App;
```



### 8.3 useReducer

useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook 입니다. 리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수입니다. 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 합니다.

```react
function reducer(state, action) {
    return { ... }; 
}
```

액션 값은 주로 다음과 같은 형태입니다.

```react
{
    type: 'INCREMENT',
}
```



```react
import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type){
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    const [state, setState] = useReducer(reducer, { value: 0});
    
    return(
    	<div>
        	<p>
            	현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );
};

export default Counter;
```



```react
import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action, name]: action.value
    };
}

const Info = () => {
    const [state, setState] = useReducer(reducer, {
        name: '',
        nickname: '',
    });
    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    };
    
    return (
    	<div>
            <div>
                <input name="name" value={name} onChange={onChangeName}/>
                <input name="nickname" value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
            	<div>
                	<b>이름:</b> {name}
                </div>
                <div>
                	<b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;
```



### 8.4 useMemo

useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있습니다. 

```react
import React, { useState } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    
    const onChange = e => {
        setNumber(e.target.value);
    };
    
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };
    
    return (
    	<div>
        	<input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
            	{list.map((value, index) => (
                	<li key={index}>{value}</li>
                ))}
            </ul>
            <div>
            	<b>평균값:</b> {getAverage(list)}
            </div>
        </div>
    );
};

export default Average;
```



```react
import React from 'react';
import Average from './Average';

const App = () => {
    return <Average/>;
};

export default App;
```



```react
import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    
    const onChange = e => {
        setNumber(e.target.value);
    };
    
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };
    
    const avg = useMemo(() => getAverage(list), [list]);
    
    return (
    	<div>
        	<input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
            	{list.map((value, index) => (
                	<li key={index}>{value}</li>
                ))}
            </ul>
            <div>
            	<b>평균값 : </b>{avg}
            </div>
        </div>
    );
};

export default Average;
```



### 8.5 useCallback

useCallback은 useMemo와 상당히 비슷한 함수입니다. 주로 렌더링 성능을 최적화해야 하는 상황에서 사용하는데요. 이 Hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 

```react
import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 주..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);
    
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseIng(number));
        setList(nextList);
        setNumber('');
    }, [number, list]);
    
    const avg = useMemo(() => getAverage(list), [list]);
    
    return (
    	<div>
        	<input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
            	{list.map(value.index) => (
                	<li key={index}>value</li>
                )}
            </ul>
            <div>
            	<b>평균값 : </b>{avg}
            </div>
        </div>
    );
};

export default Average;
```

useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣으면 됩니다. 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 합니다.

onChange 처럼 비어 있는 배열을 넣게 되면 컴포넌트가 렌더링될 때 단 한 번만 함수가 생성되며, onInsert처럼 배열 안에 number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가될 때마다 함수가 생성됩니다.

함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두 번째 파라미터 안에 포함시켜 주어야 합니다. 예를 들어 onChange의 경우 기존의 값을 조회하지 않고 바로 설정만 하기 때문에 배열이 비어 있어도 상관없지만, onInsert는 기존의 number와 list를 조회해서 nextList를 생성하기 때문에 배열 안에 number와 list를 꼭 넣어 주야하 합니다.



다음의 두 코드는 똑같은 코드입니다. useCallback은 결국 Usememo로 함수를 반환하는 상황에서 더 편하게 사용할 수 있는 Hook입니다.  숫자, 문자열, 객체처럼 일반 값을 재사용하려면 useMemo를 사용하고, 함수를 재사용하려면 useCallback을 사용하면됩니다.

```react
useCallback(() => {
    console.log('hello world!');
}, []);

useMemo(() => {
    const fn = () => {
        console.log('hello world!');
    };
    
    return fn;
}, []);
```



### 8.6 useRef

useRef Hook은 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해 줍니다.

```react
import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if ( numbers.length === 0 ) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);
    
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);
    
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);
    
    const avg = useMemo(() => getAverage(list), [list]);
    
    return (
    	<div>
        	<input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
            	{list.map((value, index) => (
                	<li key={index}>{value}</li>
                ))}
            </ul>
            <div>
            	<b>평균값 : </b>{avg}
            </div>
        </div>
    );
};

export default Average;
```



useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킵니다.



추가로 컴포넌트 로컬 변수를 사용해야 할 때도 useRef를 활용할 수 있습니다. 여기서 로컬 변수란 렌더링과 상관없이 바뀔 수 있는 값을 의미합니다. 

```react
import React, { Component } from 'react';

class MyComponent extends Component{
    id = 1
	setId = (n) => {
        this.id = n;
    }
    printId = () => {
        console.log(this.id);
    }
    render() {
        return (
        	<div>
            	MyComponent
            </div>
        );
    }
}

export default MyComponent;
```

이러한 코드를 함수형 컴포넌트로 작성한다면?

```react
import React, { useRef } from 'react';

const RefSample = () => {
    const id = useRef(1);
    const setId = (n) => {
        id.current = n;
    }
    const printId = () => {
        console.log(id.current);
    }
    return (
    	<div>
        	refSample
        </div>
    );
};

export default RefSample;
```

이렇게 ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다는 점에는 주의해야 합니다. 렌더링과 관련되지 않은 값을 관리할 때만 이렇나 방식으로 코드를 작성하세요.



### 8.7 커스텀 Hooks 만들기

여러 컴포넌트에서 비슷한 기능을 공유할 경우,  이를 자신만의 Hooks로 작성하여 로직을 재사용할 수 있습니다.



```react
import { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action, name]: action.value
    };
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state, onChange];
}
```

