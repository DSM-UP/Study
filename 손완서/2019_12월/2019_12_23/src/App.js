import React from 'react';
import TodosContainer from './containers/TodosContainer';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
