## REACT - redux



### 액션

* 상태 변화시 액션이 발생한다. 이는 하나의 객체로 표현된다.

* ```react
  {
      type: 'INSERT',
  }
  ```

* 액션 객체는 type 필드를 가지고 있어야 한다. 이 값이 액션의 이름이다. 

* 이 외의 값들은 상태 업데이트 시 필요한 값이다.



### 액션 생성 함수

* 액션 객체를 만들기 위해 액션 생성 함수를 사용한다.

* ```react
  function INSERT(todo) {
      return {
          type: 'INSERT',
          todo,
      };
  }
  
  const INSERT = todo => ({
      type: 'INSERT',
      todo,
  });
  ```

* 액션 객체를 직접 작성하는 것 보다. 생성 함수를 만드는 게 좋다.



### 리듀서

* 변화를 일으키는 함수다.

* 액션을 만들어 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받는다. 이 두 값을 참고하여 새로운 상태를 만들어 반환한다.

* ```react
  const initialState = {
      counter: 1,
  };
  function reducer(state = initialState, action) {
      switch (action.type) {
          case INCREMENT:
              return {
                  counnter: state.counter + 1
              };
          default:
              return state;
      }
  }
  ```



### 스토어

* 리덕스를 적용시키기 위해서는 스토어를 사용해야 한다. 
* 보통 하나의 스토어만 사용한다.



### 디스패치

* 디스패치는 스토어의 내장 함수다. 
* 디스패치는 액션을 발생시키는 것이다.
* 액션 객체를 파라미터로 넣어 호출한다. 이 함수가 호출되면, 스토어는 리듀서 함수를 실행시켜 새 상태를 만든다.



### 구독

* 구독도 스토어의 내장 함수 중 하나이다. subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출하면, 이 리스너 함수가 액션이 디스패치될 대마다 호출된다. 