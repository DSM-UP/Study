# Javascript URL.createObjectURL

## 동기

엤날에 SNS를 만들때 업로드한 이미지를 즉시 보여주기 위해서 사용했는데 먼지 모르고 사용만 해서 공부하기로 했다

## API

```javascript
URL.createObjectURL(object);

// object(File, Blob, MediaSource);
// 리턴값 : 지정한 object의 참조 URL을 담은 DOMString

URL.revokeObjectURL(); 
// URL을 삭제한다
```

