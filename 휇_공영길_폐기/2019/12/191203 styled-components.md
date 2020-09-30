# Styled-Components

## 설치

* npm intall styled-components

## 예시

``` javascript
import React from 'react';
import styled,{css} from 'styled-components';


const App = ()=> {
  return (
    <StyledComponent/>
  )
}

const StyledComponent = () => {
  const Box = styled.div`
    height:50vh;
    background:${({color}) => color || "white"};
  `;
  return (
    <>
      <Box/>
      <Box color="black"/>
    </>
  );
}

export default App;
```

