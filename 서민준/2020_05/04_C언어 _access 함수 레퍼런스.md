# C언어 _access 함수 레퍼런스 정리
  
**출처**  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/access-waccess?view=vs-2019" target = "_blank">_access, _waccess - MSDN</a>  
  
## _access
  
    #include <io.h>

    int _access(const char* path, int mode);
  
파일의 존재 여부와 읽고 쓸 수 있는지에 대해 조사한다.  
  
mode는 해당 파일을 대상으로 어떠한 조사를 할 것인지를 명시하는데, 다음과 같은 값들을 가질 수 있다.  
  
mode 값 | 파일 검사 방법
--------|---------------
00 | 파일의 존재를 검사한다.
02 | 파일에 데이터를 쓸 수 있는지 검사한다.
04 | 파일의 데이터를 읽을 수 있는지 검사한다.
06 | 파일에 데이터를 쓰고 읽을 수 있는지 검사한다.
  
DOS에서는 존재하는 모든 파일을 읽을 수 있기 때문에 00와 04는 같은 의미가 된다.  
  
path에는 조사하고자 하는 파일의 이름을 전달하는데, 필요에 따라 드라이브나 경로를 포함할 수 있다. 만약 path가 디렉토리라면 존재 여부만을 검사한다.  
  
### Parameters
  
`path`  
파일 또는 디렉토리 경로이다.  
  
`mode`  
검사 방법에 대한 값이다.  
  
### Return value
  
파일을 지정된 mode 값에 따라 조사하였을 때 그 결과가 참이라면 0을 반환한다. path에 지정한 파일이 없거나 결과가 거짓이라면 -1을 반환한다. 이때, `errno`는 다음과 같이 설정된다.  
  
값 | 설명
---|------
EACCES | 엑세스 거부됨 : 파일의 권한 설정이 지정된 액세스를 허용하지 않습니다.
ENOENT | 파일 이름 또는 경로를 찾을 수 없습니다.
EINVAL | 잘못된 매개 변수입니다.
  
