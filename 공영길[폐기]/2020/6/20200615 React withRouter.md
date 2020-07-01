# React withRouter

```react
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> // 라우터 안에 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


```

```react
// App.js

import React from 'react';
import {withRouter} from 'react-router-dom';

const App = (props) => {
  console.log(props);
  return (
    <div>
      
    </div>
  );
}

export default withRouter(App);

```

## Route를 쓰지 않아도 history, match, location객체를 쓸수 있게 해준다. 단 Router 자식으로 있어야댐 index.js 참고

