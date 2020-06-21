## React - Redux (ToDoList)

### yarn

* `yarn add redux react-redux redux-devtools-extension redux-actions`

### components

* 기본적인 형태의 component 생성.
* props로 state, action을 받아 할당.
* `todos, todoItem`을 구현. 



### modules

* `import { createAction, handleActions } from 'redux-actions';`

* 액션과 액션 생성 함수 정의
* `const A = filename/A;`
* `export const a = createAction(A, 생성함수)`
* 초깃값 생성
* 액션 핸들 함수 생성
* `const a = handleActions({~~}, 초깃값)`
* `index.js` 모듈 생성
* `import { combineReducers} from 'redux'`
* `rootReducer` 변수에 `combineReducers`함수의 값에 reducer 함수를 넣기
* `src/index.js`에 `store`를 `createStore()`로 생성하여, `rootReducer`와 `composeWithDevTools()`를 넣음.

* `Provider store={store}`



### containers

* `import  {useSelector, useDispatch} from 'react-redux';`
* 모듈에서 액션들은 따로 불러옴.
* `state`는 `useSelector(({비구조화할당}) =>({})`
* `const dispatch = useDispatch();`
* `useCallback`을 이용하여 `dispatch()`내부의 모듈에서 불러온 액션들을 넣음.