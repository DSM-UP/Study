 # TIL

url.format(urlObject)

- urlObject : url 객체 또는 문자열 타입. 문자열 타입일 경우 url.parse메소드를 통해 객체로 변환된다.

사용예시

~~~javascript
url.format({
    protocol: 'http',
    hostname: 'example.com',
    pathname: '/exam/ple',
    query: {
        name: 'foo',
        format: 'json'
    }
});

// 'http://example.com/exam/ple?name=foo&format=json'
~~~

