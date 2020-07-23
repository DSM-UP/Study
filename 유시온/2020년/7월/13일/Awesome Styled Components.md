## Awesome Styled Components



### 설치

* `npm install -S styled-components`
* `import styled from 'styled-components '`



### 기본

* 백틱(`)을 사용하여 스타일 구문을 표시함.
* scss처럼 &로 자신을 나타냄.
* props로 삼항연산자나 &&, || 문을 사용할 수 있음.
* 한 컴포넌트에서 문서 구조와 스타일을 동시에 확인이 가능하며, 컴포넌트를 분리할때도 코드를 빼면 됨.



### 문법 설명

#### 1. 스타일컴포넌트 만들기

* ```
  const 스타일컴포넌트이름 = styled.태그명`스타일`
  ```

* **render 메소드 밖에 선언해야 함**

* 변수선언 후, 스타일컴푸넌트 지정

* styled를 import 하여 사용

* 백틱(`)으로 스타일속성 묶음



#### 2. props 사용

* `스타일속성 : ${props => props.프롭스명 ? 참 : 거짓}`
* `color : ${props => pprops.color ? 'blue' : 'black'}` 



#### 3.  extends : 상속 & 확장

* ```
  const 스타일컴포넌트이름 = styled(상속받을스타일컴포넌트)`추가 or 수정 스타일 코드 작성`
  ```

* 스타일 속성을 상속받아 재정의 한다.



#### 4. as='a', 다형성 props

* `const 스타일컴포넌트이름 = styled.button` 일때 a 태그로 사용하려면 as를 사용하면 된다.
* `<ButtonComponent as="a" />`



#### 5. || 사용하기

* `조건(prop) && 참` 조건이 참이면 오른쪽 실행
* `조건(prop) ? 참 : 거짓` 조건에 따라 참/거짓 실행
* `조건(prop) || ...` prop이 없으면 기본 설정, prop이 있으면 지정 조건



#### 6. attrs 속성지정 

* input 태그의 속성들은 스타일컴포넌트를 선언하면서 속성을 선택할 수 있다.



#### 7. Animation

* 



#### 8. css props

* css 속성을 담는 변수

* ```
  const 변수이름 = css`css내용적기`
  ```



