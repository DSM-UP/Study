# C언어 strlen 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/106">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/strlen-wcslen-mbslen-mbslen-l-mbstrlen-mbstrlen-l?view=vs-2019">MSDN</a>  
  
## strlen
  
    #include <string.h>

    size_t strlen(const char* str);
  
문자열의 길이를 구합니다. C 문자열의 길이는 마지막 NULL 문자에 의해 결정됩니다. strlen은 문자열의 시작부터, NULL 문자 직전까지의 문자의 개수를 셉니다.  
  
### 인자
  
    const char* str
  
C 형식 문자열  
  
### 리턴값
  
문자열의 길이를 리턴합니다.  
  
### 실행 예제
  
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/cstring/strlen
    에서 가져왔습니다. */
    // 약간의 수정을 가했습니다.

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char szInput[256];

        fputs("Enter a sentence : ", stdout);
        fgets(szInput, sizeof(szInput) / sizeof(char), stdin);
        printf("The sentence entered is %lu characters long. \n", strlen(szInput));

        return 0;
    }
  
실행 결과  
Enter a sentence : Windows API  
The sentence entered is 11 characters long.  