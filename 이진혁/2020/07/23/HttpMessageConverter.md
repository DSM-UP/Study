## HttpMessageConverter

### 1. 개요

스프링 부트가 돌아가면서 URL 요청이 들어오게 되면 스프링 부트의 내장 톰캣이 작동하여 이를 인식하게 된다.
그러면 그 URL에 맞는 컨트롤러를 찾아서 보내주게 되는데 그 컨트롤러가 @ResponseBody를 달고 있다면
컨트롤러는 ViewResolver가 아니라 HttpMessageConverter에게 보내게 된다.

ViewResolver는 리턴된 문자열을 토대로 알맞은 뷰를 찾아서 렌더링 해주지만
HttpMessageConverter는 클라이언트(브라우저)에게 JSON 또는 String으로 보내주게 됩니다.

만약 리턴된 값이 단순 String 값이라면 StringHttpMessageConverter가 받게 되고
리턴된 값이 객체라면 MappingJackson2HttpMessageConverter가 받게 된다.
각각의 일은 String 값을 클라이언트에 보내느냐, JSON 값을 클라이언트에 보내느냐에 따라서 갈린다.

### 2. 왜 사용하나?

스프링에서는 Model 값을 서버 사이드 렌더링에게 보내서 값을 보내는 방법이 있지만
때론 API에 맞게 값만을 보내야할 때가 있다.
그래서 우리는 컨트롤러의 렌더링 메소드(@RequestMapping이 작성된 메소드)에게
@ResponseBody를 작성함으로써 ViewResolver가 아닌 HttpMessageConverter에게 보내겠다고 하는 겁니다.