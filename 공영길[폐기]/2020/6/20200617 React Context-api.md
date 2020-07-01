# React Context-api

```react
import {createContext} from 'react';

const Color = createContext({color:"black"}); // 컨텍스트 생성

export default Color;
```

```react
import React from 'react';
import Color from './Context/Color';

const App = () => {
    return (
        <Color.Consumer> // Color.Consumer context접근 가능
            {value => (
                <div style={{
                    width:"64px",
                    height:"64px",
                    backgroundColor:value.color
                }}/>
            )}
        </Color.Consumer>        
    )
}

export default App;
```

