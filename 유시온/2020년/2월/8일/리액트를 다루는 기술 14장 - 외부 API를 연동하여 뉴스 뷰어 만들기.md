## CutyApple's React Study 

> ### '*실무에서 알아야 할 기술은 따로 있다! 리액트를 다루는 기술* '책을              이용하여 공부하였습니다.



> ## 14 외부 API를 연동하여 뉴스 뷰어 만들기

### 14.1 비동기 작업의 이해

웹 애플리케이션을 만들다 보면 처리할 때 시간이 걸리는 작업이 있습니다. 예를 들어 웹 애플리케이션에서 서버 쪽 데이터가 필요할 때는 Ajax 기법을 사용하여 서버의 API를 호출함으로써 데이터를 수신합니다. 이렇게 서버의 API를 사용해야 할 때는 네트워크 송수신 과정에서 시간이 걸리기 때문에 작업이 즉시 처리되는 것이 아니라, 응답을 받을 때까지 기다렸다가 전달받은 응답 데이터를 처리합니다. 이 과정에서 해당 작업을 비동기저긍로 처리하게 됩니다.

만약 작업을 동기적으로 처리한다면 요청이 끝날 때까지 기다리는 동안 중지 상태가 되기 때문에 다른 작업을 할 수 없습니다. 그리고 요청이 끝나야 비로소 그다음 예정된 작업을 할 수 있죠. 하지만 이를 비동기적으로 처리한다면 웹 애플리케이션이 멈추지 않기 때문에 동시에 여러 가지 요청을 처리할 수도 있고, 기다리는 과정에서 다른 함수도 호출할 수 있습니다.

이렇게 서버 API를 호출할 때 외에도 작업을 비동기적으로 처리할 때가 있는데, 바로 setTimeout함수를 사용하여 특정 작업을 예약할 때입니다. 예를 들어 다음 코드는 3초 후에 printMe 함수를 호출합니다.

```javascript
function printMe () {
    console.log('Hello, World!');
}

setTimeout(printMe, 3000);
console.log('대기 중...');
```



setTimeout이 사용되는 시점에서 코드는 3초간 멈추는 것이 아닌, 일단 코드가 위부터 아래로 다 호출되고 3초 뒤에 우리가 지정한 printMe가 호출되는 것입니다. 

자바스크립트에서 비동기 작업을 할 때 가장 흔히 사용하는 방법은 콜백 함수를 사용하는 것입니다. 위 코드에서는 printMe가 3초 뒤에 호출되도록 printMe 함수 자체를 setTimeout 함수의 인자로 전달해 주었는데, 이런 함수를 콜백 함수라고 부릅니다. 



#### 콜백 함수

파라미터 값이 주어지면 1초 뒤에 10을 더해서 반환하는 함수가 있다고 가정해 봅시다. 그리고 해당 함수가 처리된 직후 어떠한 작업을 하고 싶다면 다음과 같이 콜백 함수를 활용해서 작업합니다.

```javascript
function increase(number, callback) {
    setTimeout(() => {
        const result = number + 10;
        if (callback) {
            callback(result);
        }
    }, 1000)
}

increase(0, result => {
    console.log(result);
})
```

이를 여러 번 순차적으로 처리하고 싶다면 콜백 함수를 중첩하여 구현할 수 있습니다.

```javascript
function increase(number, callback) {
    setTimeout(() => {
        const result = number + 10;
        if (callback) {
            callback(result);
        }
    }, 1000)
}

console.log('작업 시작');
increase(0, result => {
    console.log(result);
    increase(result, result => {
        console.log(result);
        increase(result, result => {
            console.log(result);
            console.log('작업 완료');
        })
    })
})
```

이렇게 콜백 안에 또 콜백을 넣어서 구현할 수 있는데, 너무 여러 번  중첩되어 코드의 가독성이 떨어졌습니다. 이러한 형태를 '콜백 지옥'이라고 부릅니다. 



#### Promise

Promise는 콜백 지옥 같은 코드가 형성되지 않게 하는 방안으로 ES6에 도입된 기능입니다. 앞에서 본 코드를 Promise를 사용하여 구현해 봅시다.

```javascript
function increase(number) {
    const promise = new Promise((resolve, reject) => {
        //resolve는 성공, reject는 실패
        setTimeout(() => {
        	const result = number + 10;
            if (result > 50) {
                const e = new Error('NumberTooBig');
                return reject(e);
            }    
            resolve(result);
        }, 1000);
    });
    return promise;
}

increase(0)
	.then(number => {
    // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
    console.log(number);
    return(increase(number)); //Promise를 리턴하면
})
.then(number => {
    //또 .then으로 처리 가능
    console.log(number);
    return increase(number);
})
.then(number => {
    console.log(number);
    return increase(number);
})
.then(number => {
    console.log(number);
    return increase(number);
})
.then(number => {
    console.log(number);
    return increase(number);
})
.catch(e => {
    // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
    console.log(e);
})
```



여러 작업을 연달아 처리한다고 해서 함수를 여러 번 감싸는 것이 아닌 .then을 사용하여 그다음 작업을 설정하기 때문에 '콜백 지옥'이 생성되지 않습니다.



#### async/await

async/await는 Promise를 더욱 쉽세 사용할 수 있도록 해 주는 ES2017 문법입니다. 이 문법을 사용하려면 함수의 앞부분에 async 키워드를 추가하고, 해당 함수 내부에서 Promise 앞부분에 await 키워드를 사용합니다. 이렇게 하면 Promise가 끝날 때까지 기다리고, 결과 값을 특정 변수에 담을 수 있습니다.

```javascript
function increase(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number + 10;
            if (result > 50) {
                const e = new Error('NumberTooBig');
                return reject;
            }
            	resolve(result);
        }, 1000)
    });
    return promise;
}

async function runTasks() {
    try {
        let result = await increase(0);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
    } catch (e) {
        console.log(e);
    }
}
```



### 14.2 axios로 API 호출해서 데이터 받아 오기

axios는 현재 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트입니다. 이 라이브러리의 특징은 HTTP 요청을 Promise 기반으로 처리한다는 점입니다. 

`$ yarn add axios`

`App.js`

```react
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      setData(response.data);
    });
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
}

export default App;
```



onclick 함수에서는 aixos.get 함수를 사용했습니다. 이 함수는 파라미터로 전달된 주소에 GET 요청을 해 줍니다. 그리고 이에 대한 결과는 .then을 통해 비동기적으로 확인할 수 있습니다.



`App.js`

```react
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async() => {
      try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1',);
      setData(response.data);
    } catch (e) {
        console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
}

export default App;
```

async를 적용한 모습입니다.

화살표 함수에 async/await를 적용할 때는 async () => {} 와 같은 형식으로 적용합니다. 



### 14.3 newsapi API 키 발급받기

`App.js`

```react
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async() => {
      try {
          const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c42023585d4ec1bb-93be7e277b3c51f',);
      setData(response.data);
    } catch (e) {
        console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
}

export default App;
```

