# UseEffect

```javascript
useEffect(() => {
    
},[??]);
//컴포넌트 렌더링시 첫번째 인자로준 함수가 실행됨.
//첫번째 인자로 함수를, 두번째 인자를 주지 않거나 배열을 줄수있음
```

## 두번째 인자를 주지 않을경우	

```react
const [number,setNumber] = useState(0);

useEffect(() => {
 console.log(number);   
})

const add = () => setNumber(number+1);
const minus = () => setNumber(number-1);

return (
    <>
    	<button onClick={add}>ADD</button>
		<span>{number}</span>
    	<button onClick={minus}>MINUS</button>
    </>
)

// ADD,MINUS 버튼을 누를때마다 state(number)가 바뀌면서 console.log(number)가 실행됨
// 배열을 주지 않는다면 어떤 경우든 리렌더링시에 함수가 호출됨
```

```javascript
const [number,setNumber] = useState(0);

useEffect(() => {
 console.log(number);   
},[])

const add = () => setNumber(number+1);
const minus = () => setNumber(number-1);

return (
    <>
    	<button onClick={add}>ADD</button>
		<span>{number}</span>
    	<button onClick={minus}>MINUS</button>
    </>
)

// 처음 렌더링시 console.log(number)가 실행되고 ADD,MINUS버튼을 눌러도 함수가 호출되지 않음
//빈 배열을 준다면 컴포넌트가 처음 렌더링될시에만 함수가 호출됨
```

```javascript
const [number,setNumber] = useState(0);
const [showResult,setShowResult] = useState(false);

useEffect(() => {
 console.log(number);   
},[showResult])

const add = () => setNumber(number+1);
const minus = () => setNumber(number-1);
const changeShowResult = () => setchangeShowResult(!showResult);

return (
    <>
    	<button onClick={add}>ADD</button>
		<span>{number}</span>
    	<button onClick={minus}>MINUS</button>
		<button onClick={changeShowResult}>ShowResult</button>
    </>
)

// ADD,PLUS 버튼을 눌러도 함수가 호출되지 않고 ShowResult버튼을 누를때에만 함수가 호출됨
//배열에 state변수를 넣어준다면 배열안에 있는 state가 바뀌는 렌더링 때만 함수가 호출됨
```

