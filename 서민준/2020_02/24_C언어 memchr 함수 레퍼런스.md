# C언어 memchr 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ memchr  
URL : https://modoocode.com/92  
  
## memchr
  
    #include <string.h>

    void* memchr(const void* ptr, int value, size_t num);
  
메모리 블록에서의 문자를 찾는다.  
  
ptr이 가리키는 메모리의 처음 num 바이트 중에서 처음으로 value와 일치하는 값의 주소를 리턴한다.  
  
C++에서는 오버로딩이 가능하므로 다음과 같은 원형도 존재한다.  
  
    #include <cstring>

    const void* memchr(const void* ptr, int value, size_t num);
  
## 인자
  
### ptr
  
검색을 수행할 부분의 시작 주소이다.  
  
### value
  
찾을 값으로, int로 값이 전달되지만 함수 내부적으로는 한 바이트씩 비교하기 때문에 이 값은 unsigned char로 변환되어 사용한다.  
  
### num
  
검색을 시작한 부분부터 검색을 수행할 만큼의 바이트 수
  
## 리턴값
  
메모리 블록에서 value와 일치하는 값이 있다면 그 곳의 주소를 리턴하고 값을 찾지 못한다면 NULL을 리턴한다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/memchr
    // Visual Studio 2019에서 작성된 코드입니다.

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char* pch;
        char str[] = "Example string";

        pch = (char*)memchr(str, 'p', strlen(str));

        if (pch)
            printf("'p' found at position %d. \n", pch - str + 1);
        else
            puts("'p' not found.");

        return 0;
    }
  
실행 결과  
'p' found at position 5.  
이 창을 닫으려면 아무 키나 누르세요...  
  
코드 설명  
str에서 처음으로 나타나는 'p'의 위치를 찾는다.