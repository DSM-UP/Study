# C언어 bsearch 함수 레퍼런스 정리
  
**출처**  
<a href = "http://www.soen.kr/" target = "_blank">SoEn:소프트웨어 공학 연구소</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/bsearch?view=vs-2019" target = "_blank">bsearch | Microsoft Docs</a>  
  
## bsearch
  
    #include <stdlib.h>

    void* bsearch(const void* key, const void* base, size_t num, size_t width, int ( __cdecl* compare) (const void* key, const void* datum));
  
정렬된 배열의 이진 검색을 수행한다.  
  
이진 탐색을 하는 함수이므로 배열이 만약 정렬되어 있지 않다면 먼저 배열을 정렬한 후에 이 함수를 사용해야 한다.  
  
bsearch가 찾아내 반환하는 포인터는 이진 탐색을 하면서 최초로 발견된 항목의 번지를 반환하기 때문에 배열에 같은 값이 2개 이상 있을 경우 어떤 값이 반환될지는 알 수 없다.  
  
compare 함수는 bsearch가 탐색 중 항목을 비교하기 위해 호출하는 함수이며 비교 결과에 따라 다음과 같은 결과를 반환해야 한다.  
  
비교 결과 | 반환 값
----------|--------
키 < 배열 요소 | 음수
키 == 배열 요소 | 0
키 > 배열 요소 | 양수
  
### Parameters
  
`key`  
검색할 키 값을 가리키는 포인터  
  
`base`  
검색 데이터를 가지고 있는 정렬된 배열의 포인터  
  
`num`  
배열에 들어있는 요소의 수  
  
`width`  
배열 요소의 자료형의 크기  
  
`compare`  
두 요소를 비교하는 콜백 함수  
  
첫 번째 인수인 `key`는 찾고자 하는 key 값을 가리키고 있는 포인터이며, 두 번째 인수인 `datum`은 키 값과 비교하고자 하는 배열 요소에 대한 포인터이다.  
  
### Return value
  
이진 탐색 결과로 key 값을 가지고 있는 배열의 요소 포인터를 반환한다. 만약 배열이 오름차순 정렬이 아니거나 동일한 키를 가진 경우에는 결과를 예측할 수 없다.  
  
배열 내에 원하는 키 값이 없는 경우 NULL을 반환한다.