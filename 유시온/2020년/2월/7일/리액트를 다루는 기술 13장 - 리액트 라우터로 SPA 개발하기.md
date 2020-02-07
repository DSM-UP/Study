## CutyApple's React Study 

> ### '*실무에서 알아야 할 기술은 따로 있다! 리액트를 다루는 기술* '책을              이용하여 공부하였습니다.



> ## 13 리액트 라우터로 SPA 개발하기



### 13.1 SPA란?

SPA는 **Single Page Application** 의 약어입니다. 말 그대로 한 페이지로 이루어진 애플리케이션이라는 의미입니다. 전통적인 웹 페이지는 여러 페이지로 구성되어 있습니다. 

기존에는 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아 오고, 페이지를 로딩할 때마다 서버에서 리소스를 전달받아 해석한 뒤 화며에 보여 주었습니다. 이렇게 사용자에게 보이는 화면은 서버 측에서 준비했습니다. 사전에 html을 만들어 제공하거나, 데이터에 따라 유동적인 html을 생성해주는 엔진을 사용하기도 했습니다.

요즘은 웹에서 제공되는 정보가 정말 많기 때문에 새로운 화면을 보여 주어야 할 때마다 서버 측에서 모든 뷰를 준비한다면 성능상의 문제가 발생할 수 있습니다. 예를 들면 트래픽이 너무 많이 나올수 있고, 사용자가 몰려 서버에 높은 부하가 쉽게 걸릴 수도 있습니다. 속도와 트래픽 측면에서는 캐싱과 압축을 해서 서비스를 제공하면 어느 정도 최적화될 수  있겠지만, 사용자와의 인터랙션이 자주 발생하는 모던 웹 어플리케이션에는 적당하지 않을 수도 있습니다. 애플맄이션 내에서 화면 전환이 일어날 때마다 html을 계속 서버에 새로 요청하면 사용자의 인터페이스에서 사용하고 있던 상태를 유지하는 것도 번거롭고, 바뀌지 않는 부분까지 새로 불러와서 보여 주어야 하기 때문에 불필요한 로딩이 있어서 비효율적입니다.

그래서 리액트 같은 라이브러이 혹은 프레임워크를 사용하여 뷰 렌더링을 사용자의 브라우적 담당하도록 하고, 우선 애플리케이션을 브라우저에 불러와서 실행시킨 후에 사용자와의 인터랙션이 발생하면 필요한 부분만 자바스크립트를 사용하여 업데이트 해 줍니다. 만약 새로운 데이터가 필요하다면 서버 API를 호출하여 필요한 데이터만 새로 불러와 애플리케이션에서 사용할 수도 있습닏.

그런데, 싱글 페이지라고 해서 화면이 한 종류일까요? 꼭 그렇지만은 않습니다. 예를 들어 블로그를 개발 한다면 홈, 포스트 목록, 포스트, 글쓰기 등의 화면이 있겠지요. SPA의 경우 서버에서 사용자에게 제공하는 페이지는 한 종류 이지만, 해당 페이지에서 로딩된 자바스크립트와 현재 사용자 브러우저의 주소 상태에 따라 다양한 화면을 보여 줄 수 있습니다.

다른 주소에 다른 화면을 보여 주는 것을 라우팅이라고 합니다. 리액트 라이브러리 자체에 이 기능이 내장되어 있지는 않습니다. 그 대신 브라우저의 API를 직접 사용하여 이를 관리하거나, 라이브러리를 사용하여 이 작업을 더욱 쉽게 구현할 수 있습니다.

리액트 라우팅 라이브러리는 리액트 라우터, 리치 라우터, Next.js 등 여러 가지가 있습니다.



#### SPA의 단점

SPA의 단점은 앱의 규모가 커지면 자바스크립트 파일이 너무 커진다는 것입니다. 페이지 로딩 시 사용자가 실제로 방문하지 않을 수도 있는 페이지의 스크립트도 불러오기 때문이죠. 하지만 코드 스플리팅을 사용하면 라우트별로 파일들을 나누어서 트래픽과 로딩 속도를 개선할 수 있습니다.

리액트 라우터처럼 브라우저에서는 자바스크립트를 사용하여 라우팅을 관리하는 것은 자바스크립트를 실행하지 않는 일반 크롤러에서는 페이지의 정보를 제대로 수집해 가지 못한다는 잠재적인 단점이 따릅니다. 그렇기 때문에 구글, 네이버, 다음 같은 검색 엔진의 검색 결과에 페이지가 잘 나타나지 않을 수도 있습니다. 구글 검색 엔진에서 사용하는 크롤러의 경우 자바스크립트를 실행 해 주는 기능이 탑재되어 있기는 하지만, 크롤링하는 모든 페이지에서 자바스크리브를 실행하고 있지는 않습니다. 또한, 자바스크립트가 실행될 때까지 페이지가 비어 있기 때문에 자바스크립트 파일이 로딩되어 실행되는 짧은 시간 동안 흰 페이지가 나타날 수 있다는 단점도 있습니다. 이러한 문제점은 서버 사이드 렌더링을 통해 해결할 수 있습니다. 



### 13.2 프로젝트 준비 및 기본적인 사용법

​	`$ yarn add react-router-dom`



`src/index.js`

```react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<BrowserRouter>
    	<App/>
    </BrowserRouter>,
    document.getElementById('root');
);

serviceWorker.unregister();
```



이제 라우트로 사용할 페이지 컴포넌트를 만들 차례입니다. 사용자가 웹 사이트에 들어왔을 때 맨 처음 보여 줄 Home 컴포넌트와 웹 사이트를 소개하는 About 컴포넌트를 만들어 보겠습니다.



`Home.js`

```react
import React from 'react';

const Home = () => {
    return (
    	<div>
        	<h1>홈</h1>
            <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
        </div>
    );
};

export default Home;
```



`About.js`

```react
import React from 'react';

const About = () => {
    return (
    	<div>
        	<h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
        </div>
    );
};

export default About;
```



Route라는 컴포넌트를 사용하여 사요자의 현재 경로에 따라 다른 컴포넌트를 보여 주겠습니다. Route 컴포넌트를 사용하면 어떤 규칙을 가진 경로 에 어떤 컴포넌트를 보여 줄지 정의할 수 있습니다.

`<Route path="주소규칙" component={보여 줄 컴포넌트}/>`

App.js를 열어 기존 코드를 제거하고, Route 컴포넌트를 이용하여 방금 만든 Home 컴포넌트 혹은 About 컴포넌트를 보여 주도록 설정해 보세요.

`App.js`

```react
import React from 'react';
import {Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import './App.css';

const App = () => {
  return (
    <div>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  )
}

export default App;

```



홈페이지를 열었을 때 기본적으로는 Home 컴포넌트만 보이게 됩니다. 이때 /about 경로로 들어가면 About 컴포넌트만 나오는 것이 아닌 Home 컴포넌트도 같이 나오게 됩니다. /about 경로가 / 규칙에도 일치하기 때문에 발생한 현상입니다. 이를 수정하려면 Home을 위한 Route를 사용할 때 exact라는 props를 true로 설정하면 됩니다. 

`App.js`

```react
import React from 'react';
import {Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import './App.css';

const App = () => {
  return (
    <div>
      <Route path='/' component={Home} exact={true} />
      <Route path='/about' component={About} />
    </div>
  )
}

export default App;

```



Link 컴포넌트는 클릭하면 다른 주소로 이동시켜 주는 컴폰넌트입니다. 일반 웹 애플리케이션에서는 a 태그를 사용하여 페이지를 전환하는데요. 리액트 라우터를 사용할 때는 이 태그를 직접 사용하면 안 됩니다. 이 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 애플리케이션이 들고 있던 상태를 모두 날려 버리게 됩니다. 렌더링된 컴포넌트들도 모두 사라지고 다시 처음부터 렌더링하게 되죠.

Link 컴포넌트를 사용하여 페이지를 전환하면, 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경해 줍니다. Link 컴포넌트 자체는 a 태그로 이루어져 있지만, 페이지 전환을 방지하는 기능이 내장되어 있습니다.



`<Link to="주소">내용</Link>`

`App.js`

```react
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
    return (
    	<div>
        	<ul>
            	<li>
                	<Link to="/">홈</Link>
                </li>
                <li>
               		<Link to="/about">소개</Link> 
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
        </div>
    );
};

export default App;
```



### 13.3 Route 하나에 여러 개의 path 설정하기

Route 하나에 여러 개의 path를 지정하는 것은 최신 버전의 리액트 라우터 v5부터 적용된 기능입니다. 

`App.js`

```react
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
    return (
    	<div>
            <Route path="/" component={Home} exact={true} />
            <Route path=(['/about', '/info']) component={About} />
        </div>
    );
};

export default App;
```



### 13.4 URL 파라미터와 쿼리

페이지 주소를 정의할 때 가끔은 유동적인 값을 전달해야 할 때도 있습니다. 이는 파라미터와 쿼리로 나눌 수 있습니다.

* **파라미터 예시 : **/profiles/velopert
* **쿼리 예시 : **/about?details=true

유동적인 값을 사용해야 하는 상황에서 파라미터를 써야 할지 쿼리를 써야 할지 정할 때, 무조건 따라야 하는 규칙은 없습니다. 다만 일반적으로 파라미터는 특정 아이디 혹은 이름을 사용하여 조회할 때 사용하고, 쿼리는 우리가 어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때 사용합니다.



#### URL 파라미터

Profile 페이지에서 파라미터를 사용해 봅시다. /profile/velopert와 같은 형식으로 뒷부분에 유동적인 username 값을 넣어 줄 때 해당 값을 props로 받아 와서 조회하는 방법을 알아보겠습니다. 

`Profile.js`

```react
import React from 'react';

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
};

const Profile = ({ match }) => {
    const { username } = match, params;
    const profiles = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
    	<div>
        	<h3>
            	{username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;
```



URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는 match라는 객체 안의 params 값을 참조합니다. match 객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 들어있습니다.

이제 App 컴포넌트에서 Profile 컴포넌트를 위한 라우트를 정의해 보세요. 이번에 사용할 path 규칙에는 /profiles/:username이라고 넣어 주면 됩니다. 이렇게 설정하면 match.params.username 값을 통해 현재username 값을 조회할 수 있습니다.



`App.js`

```react
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
    return (
    	<div>
        	<ul>
            	<li>
                	<Link to="/">홈</Link>
                </li>
                <li>
               		<Link to="/about">소개</Link> 
                </li>
                <li>
                	<Link to="/profile/velopert">velopert 프로필</Link>
                </li>
                <li>
                	<Link to="/profile/gildong">gildong 프로필</Link>
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path=(['/about', '/info']) component={About} />
            <Route path="/profile/:username" component={Profile} />
        </div>
    );
};

export default App;
```



#### URL 쿼리

쿼리는 location 객체에 들어 있는 search값에서 조회할 수 있습니다. location 객체는 라우트로 사용된 컴포넌트에게 props로 전달되며, 웹 애플리케이션의 현재 주소에 대한 정보를 지니고 있습니다.

```react
{  
    "pathname": "/about" 
    "search": "?detail=true" 
    "hash": ""
}
```



위 location 객체는 http://localhost:3000/about?detail=true 주소로 들어갔을 때의 값입니다.

URL 쿼리를 읽을 때는 위 객체가 지닌 값 중에서 search 값을 확인해야 합니다. 이 값은 문자열 형태로 되어 있습니다. URL 쿼리는 ?detail=true&another=1과 같이 문자열에 여러 가지 값을 설정해 줄 수 있습니다. search 값에서 특정 값을 읽어 오기 위해서는 이 문자열을 객체 형태로 변환 해 주어야 합니다.

쿼리 문자열을 객체로 변환할 때는 qs라는 라이브러리를 사용합니다.

`& yarn add qs`

`About.js`

```react
import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === 'true';
    return (
    	<div>
        	<h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
            {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    );
};

export default About;
```



쿼리를 사용할 때는 쿼리 문자열을 객체로 파싱하는 과정에서 결과 값은 언제나 문자열이라는 점에 주의하세요. ?value=1 혹은 ?value=true와 같이 숫자나 논리 자료형을 사용한다고 해서 우리가 원하는 형태로 변환되는 것이 아니라. "1", "true"와 같이 문자열 형태로 받아집니다.



### 13.5 서브 라우트

서브 라우트는 라우트 내부에 또 라우트를 정의하는 것을 의미합니다. 

`Profiles.js`

```react
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
    	<div>
        	<h3>사용자 목록:</h3>
            <ul>
            	<li>
                	<Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                	<Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>
            
            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile}/>
        </div>
    );
};

export default Profiles;
```



JSX에서 props를 설정할 때 값을 생략하면 true로 설정됩니다. 



`App.js`

```react
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';

const App = () => {
    return (
    	<div>
        	<ul>
            	<li>
                	<Link to="/">홈</Link>
                </li>
                <li>
               		<Link to="/about">소개</Link> 
                </li>
                <li>
                	<Link to="/profiles">프로필</Link>
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path={['/about', '/info']} component={About} />
            <Route path="/profiles" component={Profiles} />
        </div>
    );
};

export default App;
```



### 13.6 리액트 라우터 부가 기능

#### history

history 객체는 라우트로 사용된 컴포넌트에 match,. location과 함께 전달되는 props 중 하나로 이 객체를 통해 컴포넌트 내에 구현하는 메서드에서 라우터 APU를 호출할 수 있습니다. 예를 들어 특정 버튼을 눌렀을 때 뒤로 가거나, 로그인 후 첫 화면을 전환하거나, 다른 페이지로 이탈하는 것을 방지해야 할 때 history를 활용합니다. 



`HistorySample.js`

```react
import React, { Component } from 'react';

class HistorySample extends Component {
    handleGoBack = () => {
        this.props.history.goBack();
    };

	handleGoHome = () => {
        this.props.history.push('/');
    }
    
    componentDidMount() {
        this.unblock = this.props.history.block('정말 떠나실 건가요?');
    }

	componentWillUnmount() {
        if (this.unblock) {
            this.unblock();
        }
    }

	render (
    	return (
    		<div>
        		<button onclick={this.handleGoBack}>뒤로</button>
            	<button onclick={this.handleGoHome}>홈으로</button>
        	</div>
    	);
    )
}

export default HistorySample;
```





#### withRouter

withRouter 함수는 Hoc(Higher-order Component ) 입니다. 라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체를 접근할 수 있게 해 줍니다.



`withRouterSample.js`

```react
import React from 'react';
import { withRouter } from 'react-router-dom';
const WithRouterSample = ({ location, match, history }) => {
    return (
    	<div>
        	<h4>location</h4>
            <textarea
                value={JSON.stringfy(location, null, 2)}
                row={7}
                readOnly={true}
            />
            <h4>match</h4>
            <textarea
                value={JSON.stringfy(location, null, 2)}
                row={7}
                readOnly={true}
            />
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    );
};

export default WithRouter(WithRouterSample);
```



`Profiles.js`

```react
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';
import withRouterSample '/withRouterSample';

const Profiles = () => {
    return (
    	<div>
        	<h3>사용자 목록:</h3>
            <ul>
            	<li>
                	<Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                	<Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>
            
            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile}/>
            <withRouterSample></withRouterSample>
        </div>
    );
};

export default Profiles;
```



match 객체를 보면 params가 비어 있습니다. withRouter를 사용하면 현재 자신을 보여 주고 있는 라우트 컴포넌트를 기준으로 match가 전달됩니다. Profiles를 위한 라우트를 설정할 때는 path="/profiles"라고만 입력했으므로 username 파라미터를 읽어 오지 못하는 상태입니다.



`Profile.js`

```react
import React from 'react';
import { withRouter } from 'react-router-dom';
import withRouterSample from './withRouterSample';

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
    	<div>
        	<h3>
            	{username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <withRouterSample/>
        </div>
    );
};

export default Profile;
```



#### Switch

Switch 컴포넌트는 여러 Route를 감싸서 그중 일치하는 단 하나의 라우트만을 렌더링시켜 줍니다. Switch를 사용하면 모든 규칙과 일치하지 않을 때 보여 줄 Not Found 페이지도 구현할 수 있습니다.



`App.js`

```react
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
    return (
    	<div>
        	<ul>
            	<li>
                	<Link to="/">홈</Link>
                </li>
                <li>
               		<Link to="/about">소개</Link> 
                </li>
                <li>
                	<Link to="/profiles">프로필</Link>
                </li>
                <li>
                	<Link to="/history">History 예제</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path={['/about', '/info']} component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={HistorySample} />
                <Route 
                    render={({ location }) => (
                    	<div>
                        	<h2>이 페이지는 존재하지 않습니다:</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
           	</Switch>
        </div>
    );
};

export default App;
```



#### NavLink

NavLink는 Link와 비슷합니다. 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 CSS 클래스를 적용할 수 있는 컴포넌트입니다.

NavLink에서 링크가 활성화 되었을 때의 스타일을 적요할 때는 activeStyle 값을, CSs 클래스를 적용할 때는 activeClassName 값을 props로 넣어 주면 됩니다.



`Profiles.js`

```react
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import withRouterSample from './withRouterSample';

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    };
    return (
    	<div>
        	<h3>사용자 목록:</h3>
            <ul>
            	<li>
                	<NavLink activeStyle={activeStyle} to="/profiles/velopert">
                        velopert
                    </NavLink>
                </li>
                <li>
                	<NavLink activeStyle={activestyle} to="/profiles/gildong">
                        gildong
                    </NavLink>
                </li>
            </ul>
            
            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile}/>
            <withRouterSample></withRouterSample>
        </div>
    );
};

export default Profiles;
```



