# React Ref

## Why Use Ref?
왜 Ref를 사용하는가 ? => 직접 **DOM**을 건드려야할 상황이 발생하기 때문에

## How to use 
 * Class
 * Hooks

## EX

### Class
``` javascript
import React,{Component,createRef} from 'react';

class App extends Component {
  
  input = createRef();
  inputFocus = () => this.input.current.focus();
  
  render() {
    return (
      <div>
        <input type="text" ref={this.input} />
        <button onClick={this.inputFocus}>Focus</button>
      </div>
    );
  }
}

export default App;
```
### Hooks
``` javascript
import React,{useRef} from 'react';

const App = () => {
  const input = useRef();
  const inputFocus = () => input.current.focus();
  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={inputFocus}>Focus</button>
    </div>
  );
}

export default App;
```
