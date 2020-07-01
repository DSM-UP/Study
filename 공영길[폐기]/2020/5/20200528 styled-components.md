

# Styled Components

# 설치

```
yarn add styled-components
npm i styled-components
```

## 코드

### 기본 styled-components

```react
import React from 'react';
import styled from 'styled-components'; // styled-components를 불러옴

const Button = styled.button`  // styled-components의 기본문법 
  border-radius:50px;
  padding:5px;
  min-width:120px;
  color:white;
  font-weight:600;
  cursor: pointer;
  background-color:${props => props.background || "red"}; // props가 있을시 조건 적용
  &:active {
    outline:none;
  }
`;

const Container = styled.div`
  width:100vw;
  height:100vh;
`;

const App = () => {
  return (
    <Container>
      <Button>This is Button</Button>
    </Container>
  )
}

export default App;

```

### Global CSS

```react
import React from 'react';
import {createGlobalStyle} from 'styled-components'; // createGlobalStyle 을 불러옴

const GlobalStyle = createGlobalStyle` // createGlobalStyle 생성
  body {
    margin:0;
    padding:0;
    background-color:black;
  }
`;

const Global = () => {
  return (
    <>
      <GlobalStyle/> // 글로벌 스타일 컴포넌트를 추가해줘야함
    </>
  )
}
 
export default Global;
```

### Animation 

```react
import React from 'react';
import styled,{keyframes} from 'styled-components'; // styled와 keyframes를 불러옴

const rotation = keyframes` //불러온 keyframes로 애니메시연 생성
    0%{
        transform:rotate(0def);
    }
    100%{
        transform:rotate(360deg)
    }
`;

const Square = styled.div`
    width:100px;
    height:100px;
    background-color:black;
    position:absolute;
    top:50%;
    left:50%;
    animation:${rotation} 2s linear infinite; // animation-name에 변수를 넣어준다
`;

const Animation = () => {
    return (
        <Square/>
    )
}

export default Animation;
```