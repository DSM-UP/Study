# C언어 memcpy 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/77">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/memcpy-wmemcpy?view=vs-2019">MSDN</a>  
  
## memcpy
  
    #include <string.h>

    void* memcpy(void* dest, const void* src, size_t count);
  
메모리의 일부분을 복사합니다.  
  
memcpy 함수의 인자인 src가 가리키는 곳부터 num 바이트만큼을 dest가 가리키는 곳에 복사한다.  
  
이때, dest와 src의 타입은 모두 위 함수와 무관하다. 왜냐하면 이 함수는 단순히 이진 데이터를 복사하는 것이기 때문이다. 또한, 이 함수는 src의 NULL 종료 문자를 검사하지 않는다. 언제나 정확히 num 바이트만큼을 복사한다.  
  
오버플로우 문제를 방지하기 위해 dest와 src가 가리키는 배열의 크기는 반드시 num 바이트 이상이여야 하며, **서로 겹치면 안 된다.**  
  
## 인자
  
    void* dest
  
데이터가 복사될 곳의 주소로, void* 형으로 형변환되어서 전달된다.  
  
    const void* src
  
복사할 데이터들이 위치한 주소로, void* 형으로 형변환되어서 전달된다.  
  
    size_t num
  
복사할 데이터의 바이트 수이다.  
  
## 리턴값
  
dest가 리턴된다.  
  
## 실행 예제
  
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/cstring/memcpy
    에서 가져왔습니다. */

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str1[] = "Sample string";
        char str2[40];
        char str3[40];

        memcpy(str2, str1, strlen(str1) + 1);
        memcpy(str3, "copy successful", 16);
        
        printf("str1 : %s \n", str1);
        printf("str2 : %s \n", str2);
        printf("str3 : %s \n", str3);

        return 0;
    }
  
실행 결과  
str1 : Sample string  
str2 : Sample stirng  
str3 : copy successful  
