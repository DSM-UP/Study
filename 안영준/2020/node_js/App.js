import React from 'react';
import './App.css'; 

function App(){
  const name = '리엑트';
  return <div className="react">{name}</div>;
}
  /*return(
    <div
    style = {{
      backgroundColor: 'black',
      color: 'white',
      fontSize:'50px',
      fontWeight:'bold',
      padding:16
    }}>
  
  {name}
      </div>
  );
}
//리엑트 파일에서  fontWeight:'bold', 가 아닌 fontWeight: bold;

/*function App(){
  const name = 'a'
return <div>{name === 'a'&&<h1>123</h1>}</div>
}*/
// falsy한 값인 0은 예외적으로 화면에 나타남. , undefined일 수있다면 OR연산자로 값을 지정할수있음. return name || '지정할값'  내부에서 렌더링은괜찮음.
/*function App(){
  const name = 'ㅁ'
  return <div>{name === 'ㅁ'?<h1>1</h1>:null}</div>;
}
/*
function App(){
  const name = 'a'
  return(
    //Fragment를 저기에 넣어도되고 안넣어됨<Fragment>
    <> 
    {name === '리엑트'?( 
      <h1>리엑트</h1>
    ):(<h2>ㄴ리엑트</h2>)}
    </>
  );
}
/*
function App(){
  const name = 'a'
  return(
    //Fragment를 저기에 넣어도되고 안넣어됨<Fragment>
    <> 
    <h1>{name}안녕</h1>
    <h2>그래</h2></>
  );
}
//let const는 scape가 함수단위가아닌 블록단위임, 하지만 중복선언불가능, const는 재정의불가능
//Fragment도 div 대신 가능함 
/*import React from 'react';

function App(){
  return(
    <div>
    <h1>안녕</h1>
    <h2>그래</h2></div>
  );
}*/
//요소 여러개를 하나의 요소로 감싸야하는이유 = virtual dom 에서 컴포넌트 변화를 감지할때 효율적으로 비교할수 있도록 컴포넌트 내부의 하나의 dom트리구조로 이루어져야한다는 규칙이 있기때문
/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
//src/index.js 필요한 파일 다 불러와 번들링하게됨. 웹팩을 사용하면 svg파일과 css파일도 불러와서 사용할수있음. 이런코드를 jsx코드라고함.
//규칙 1. 감싸인 요소 반드시 부모 요소 하나로 감싸야함