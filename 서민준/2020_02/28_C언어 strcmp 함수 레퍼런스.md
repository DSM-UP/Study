# C언어 strcmp 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strcmp  
URL : https://modoocode.com/85  
  
## strcmp
  
    #include <string.h>

    int strcmp(const char* str1, const char* str2);
  
두 개의 문자열을 비교한다.  
  
C 문자열 형식의 str1과 str2를 비교한다.  
  
이 함수는 각 문자열의 첫 번째 문자부터 비교를 시작한다. 만일 같다면 두 문자가 다를 때까지나 NULL에 도달할 때까지 계속 비교를 수행한다.  
  
## 인자
  
### str1
  
비교할 C 형식 문자열  
  
### str2
  
비교할 C 형식 문자열  
  
## 리턴값
  
만일 두 문자열이 정확하게 일치한다면 0을 리턴한다.  
  
일치하지 않을 경우, 일치하지 않는 첫 번째 문자를 비교해 str1이 str2보다 크다면 0보다 큰 값을 아니면 0보다 작은 값을 리턴한다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/strcmp
    // 약간의 수정을 가했습니다.

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char szKey[] = "apple";
        char szInput[80];

        do
        {
            fputs("Guess my favourite fruit? ", stdout);
            scanf("%s", szInput);
        } while (strcmp(szKey, szInput));
    
        puts("Correct answer!");
        return 0;
    }