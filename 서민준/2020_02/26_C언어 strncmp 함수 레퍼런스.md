# C언어 strncmp 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strncmp  
URL : https://modoocode.com/90  
  
## strncmp
  
    #include <string.h>

    int strncmp(const char* str1, const char* str2, size_t num);
  
두 문자열의 일부 문자들을 비교한다.  
  
C 형식 문자열인 str1의 처음 num개의 문자를 다른 C 형식 문자열인 str2의 처음 num개의 문자와 비교한다.  
  
이 함수는 처음 문자들부터 비교를 수행하되, **다른 문자가 나타나거나** **NULL에 도달**하거나, **num개의 문자들을 비교할 때** 까지 비교를 수행하게 된다.  
  
## 인자
  
### str1
  
비교할 C 형식 문자열  
  
### str2
  
비교할 C 형식 문자열  
  
### num
  
(처음부터)비교할 최대 문자의 개수  
  
## 리턴값
  
만일 num개의 문자가 모두 일치한다면 0을 리턴한다.  
  
비교한 num개의 문자 중 최초로 일치하지 않는 문자의 값이 str1이 더 큰 경우 0보다 큰 값을, str2가 더 큰 경우 0보다 작은 값을 리턴한다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/strncmp
    
    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str[][5] = { "R2D2", "C3PO", "R2A6" };
        int n;

        puts("Looking for R2 astromech droids...");
        for (n = 0; n < 3; n++)
        {
            if (!(strncmp(str[n], "R2xx", 2)))
                printf("found %s \n", str[n]);
        }

        return 0;
    }
  
실행 결과  
Looking for R2 astromech droids...  
found R2D2  
found R2A6