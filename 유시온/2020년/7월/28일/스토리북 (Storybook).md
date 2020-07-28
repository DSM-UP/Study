## 스토리북 (Storybook)



### 배경

* 현재의 프론트엔드 개발은 컴포넌트 단위로 이루어진다.
* **컴포넌트 : 외부 상태에 영향을 받지 않는 독립적 객체, 고립적 환경에서 자신만의 스타일과 상태를 가진다.** 
* 개발은 컴포넌트 단위, 실제 개발환경은 페이지? 
  * 현재 개발하는 서비스에서 사용하는 수 많은 객체들을 일일이 변경하며 테스트를 해야 함.
  * 이런 상황이면 개발자는 뷰에 집중하기 어렵고, 커모넌트 의존성 파악이 어려워짐.
  * 즉, 컴포넌트의 의미가 퇴색되며 재사용성을 감소시킴.
* **Storybook**은 이런 문제를 해결하는 컴포넌트 단위의 개발 환경을 지원하는 도구이다.
  * 뷰를 고립된 환경을 제공해서 관심사를 의존성과 환경으로부터 분리시킴.



### 설치

* ```shell
  npm install -g @storybook/cli
  ```

* ```shell
  getstorybook
  ```

* ```shell
  npm run storybook
  ```



### Story 작성

* 위의 설치 작업을 거치면, `src` 폴더 내부에 `stories`라는 폴더가 새로 생긴다.
* 이 폴더가 바로 Storybook에 실제로 올라가는 컴포넌트들을 정의하는 파일들이 있는 폴더다.
* 이 속의 `index.js` 파일을 보면 컴포넌트를 정의하는 코드가 있다.





### 1) 설치

* ```shell
  npm install @storybook/react --save-dev
  ```

* ```shell
  npm install react react-dom --save
  npm install babel-loader @babel/core --save-dev
  ```





### 2) npm script 추가

* `package.json` 파일에 하단 코드 추가

* ```json
  {
      "scripts": {
          "storybook": "start-storybook"
      }
  }
  ```



### 3) main file 생성

* `.storybook/main.js`파일 변경하기

* ```js
  module.exports = {
      stories: ['../src/**/*.stories.[tj]s'],
  };
  ```

* src 폴더 내부에 어떤 폴더 내부에 `.stories.ts` 또는 `.stories.js`로 끝나는 파일을 규정



### 4) 스토리 작성

* `..src/index.stories.js` 파일 추가

* ```javascript
  import React from 'react';
  import { Button } from '@storybook/react/demo';
  
  export default { title: 'Button' };
  
  export const withText = () => <Button>Hello Button</Button>;
  
  export const withEmoji = () => (
  	<Button>
      	<span role="img" aria-label="so cool">
       		😀 😎 👍 💯
      	</span>
      </Button>
  )
  ```



### 5) 스토리북 실행

* ```shell
  npm run storybook
  ```