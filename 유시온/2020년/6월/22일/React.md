## React

### 리덕스 핸들러

* ```react
  export const todos = handleActions(
  	{
  		[CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input: input }),
  		[INSERT]: (state, { payload: todos }) => ({
  			...state,
  			todos: state.todos.concat(todos),
  		}),
  		[TOGGLE]: (state, { payload: id }) => ({
  			...state,
  			todos: state.todos.map((todo) =>
  				todo.id === id ? { ...todo, done: !todo.done } : todo,
  			),
  		}),
  		[REMOVE]: (state, { payload: id }) => ({
  			...state,
  			todos: state.todos.filter((todo) => todo.id !== id),
  		}),
  	},
  	initialState,
  );
  ```

* `handleActions({ [ACTION]: (state, action) => ({ ... })}, initialState)`

* `handleActions({ [ACTION]: (state, {payload: props}) => ({ ... }) }, initialState)`