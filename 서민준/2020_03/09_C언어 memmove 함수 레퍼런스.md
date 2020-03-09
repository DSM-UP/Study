# C언어 memmove 함수 레퍼런스 정리
  
**출처**  
모두의 코드 - https://modoocode.com/78  
MSDN - https://docs.microsoft.com/ko-kr  
  
## memmove
  
    #include <string.h>

    void* memmove(void* dest, const void* src, size_t count);
  
src가 가리키는 곳부터 count 바이트만큼을 dest이 가리키는 곳으로 옮깁니다.  
  
메모리 복사 수행 시, 중간에 버퍼를 이용하게 되므로 dest과 src의 해당하는 범위가 겹쳐져도 문제는 없다.  
  
dest과 src가 가리키는 타입은 위 함수에서는 상관이 없다. 오직 단순하게 이진 데이터만을 복사하는 것이기 때문이다. 또한, 위 함수는 src의 NULL 종료 문자를 확인하지 않는다. 언제나 정확히 count 바이트만큼 복사를 수행한다.  
  
오버플로우를 방지하기 위해 dest과 src가 가리키는 배열은 모두 적어도 count 바이트 이상은 되어야 한다.  
  
## 인자
  
    void* dest
  
데이터가 복사될 곳을 가리키는 포인터로, 언제나 void* 형입니다.  
  
    void* src
  
복사할 데이터가 있는 위치를 가리키는 포인터로 언제나 void* 형입니다.  
  
    size_t count
  
복사할 바이트 수입니다.  
  
## 리턴값
  
dest가 리턴됩니다.  
  
## 소스 예제
  
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/cstring/memmove
    에서 가져왔습니다. */

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str[] = "memmove can be very useful......";
        
        memmove(str + 20, str + 15, 11);
        puts(str);

        return 0;
    }
  
실행 결과  
memmove can be very very useful.  
  
소스 해설  
  
memmove can be very useful...... 에서, 문자열 시작 주소부터 15번째 부분부터 11 바이트을 복사합니다. -> "very useful" 문자열 복사  
  
복사한 문자열을 dest인 문자열 시작 주소부터 20번째 부분인 "useful......" 에서 붙여넣습니다. 11바이트를 복사하므로 마지막에 . 하나가 남게 되고 나머지는 복사되는 내용으로 덮여지게 됩니다.