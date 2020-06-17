# React useEffect Async Function Error

리액트에서 useEffect 안에 async 함수를 사용할 경우 오류가 난다  ex ) 

```react
import React from 'react'

const App = () => {
    useEffect(async() => {
		const rse = await fetch("URL");
	},[]); // 경고
    return <div></div>
}

export default App;
```

해결법 then을 쓰거나 익명함수 생성

ex ) then

```react
import React from 'react'

const App = () => {
    useEffect(() => {
		fetch("URL").then(res => {
            // 코드
        })
	},[]);
    return <div></div>
}

export default App;
```

ex ) 익명함수

```react
import React from 'react'

const App = () => {
    useEffect(() => {
		(async() => {
            const res = await fetch("URL");
        })();
	},[]);
    return <div></div>
}

export default App;
```

