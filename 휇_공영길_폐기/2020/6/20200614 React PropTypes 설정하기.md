# React PropTypes 설정하기

```react
import React from 'react';
import PropTypes from 'prop-types';

const App = ({name}) => {
    return <div>Hello {name}</div>
}

App.propTypes = {
    name:PropTypes.string
    // name:PropTypes.number.isRequired 필수지정
};

export default App;


```



