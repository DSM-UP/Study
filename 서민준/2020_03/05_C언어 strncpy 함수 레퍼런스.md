# C언어 strncpy 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strncpy  
URL : https://modoocode.com/80  
  
## strncpy
  
    #include <string.h>

    char* strncpy(char* destination, const char* source, size_t num);
  
문자열에서 일부 문자들만을 복사한다.  
  
source에서 destination으로 source의 처음 num개의 문자들만을 복사(NULL도 포함해서)한다.  
  
num보다 source의 문자 수가 더 적다면 모자란 부분은 '\0'으로 생각되어서 destination에 복사가 된다.  
  
strncpy 함수는 **복사 시 destination 끝에 반드시 NULL 문자를 붙이는 것이 아니므로** 사용에 주의를 해야 한다.  
  
## 인자
  
### destination
  
배열을 가리키는 포인터로 문자열이 복사될 곳이다.  
  
### source
  
복사될 C 문자열이다.  
  
### num
  
source에서 복사할 문자의 개수이다.  
  
## 리턴값
  
destination을 리턴한다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/strncpy

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str1[] = "To be or not to be";
        char str2[6];

        strncpy(str2, str1, 5);
        str2[5] = '\0';
        puts(str2);

        return 0;
    }
  
실행 결과  
To be  
