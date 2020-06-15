## React - Redux (How To)

### 목록 (Ducks 패턴)

* **components** 
  * 컴포넌트를 만듦.
* **modules**
  * 액션함수, 리듀서를 관리함.
* **containers**
  * 컴포넌트와 모듈을 합침. `index/App`에서는 이 컨테이너를 렌더링함.



### npm add 목록

* `npm add redux react-redux redux-devtools-extension redux-action`



### UI 준비하기

* components 디렉토리 생성
* components 파일들 생성



### 모듈 작성하기

* modules 디렉토리 생성

* 모듈 파일들 생성

  * 액션 타입 정의 : `모듈 이름/액션 이름`

  * 액션 생성 함수 만들기 : `createAction()`함수를 사용하여 액션 생성 함수 만들기

    * 만일 액션 생성 함수에 파라미터가 필요하다면, `payload`라는 이름을 사용한다. 
    * `payload`를 변형하고 싶다면, `createAction`의 두 번째 함수에 `payload`를 정의하는 함수를 선언하여 넣으면 된다.

  * 초기 상태 및 리듀서 함수 만들기 : `initialState` 정의 및 현재 상태를 참조하여 새 객체를 생성하여 반환하는 리듀서 함수 작성.

  * ```react
    const 이름 = handleActions(
        {
    		[액션타입]: (state, action) => ({ 리듀서 함수 })
    	},
        초기값
    );
    ```

  * 내보내기

* 루트 리듀서 생성
  * `/modules/index.js` 파일 생성하기
  * `combineReducers({ reducers....})` 형식으로 정의



### 리덕스 적용하기

* 스토어 만들기 : `createStore`을 이용하여 `src/index.js`에 스토어 생성.
* 스토어 정의하기 : 만든 스토어에 루트 리듀서를 넣음.
* 리덕스 적용하기 : `Provider`를 이용하여 `render`함.
* 리덕스 데브툴 적용하기 : `createStore`의 두 번째 인자에 `composeWithDevTools()`를 넣음.



### 컨테이너 컴포넌트 만들기

* 컴포넌트와 리덕스 연동하기 : `useSelector()`와 `useDispatch()`를 사용함.
  * `const 결과 = useSelector(상태 선택 함수);`
  * `const dispatch = useDispatch();`
  * `<A onBB={() => dispatch(bb)} />`
* 