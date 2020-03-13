# C언어 difftime 함수 레퍼런스 정리
  
**출처**  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/difftime-difftime32-difftime64?view=vs-2019" target = "_blank">MSDN</a>  
<a href = "https://modoocode.com/111" target = "_blank">모두의 코드</a>  
  
## difftime
  
    #include <time.h>

    double difftime(time_t timeEnd, time_t timeStart);
  
두 시간의 차이를 구합니다.  
  
### 인자
  
    time_t timeEnd
  
종료 시간입니다.  
  
    time_t timeStart
  
시작 시간입니다.  
  
### 리턴값
  
timeStart에서 timeEnd까지 경과된 시간(초)을 반환합니다. 반환되는 값은 double형으로 반환됩니다.  
  
오류가 났을 경우 0을 반환합니다.  
  
### 실행 예제
  
    // 이름을 쓰는데 얼마나 걸리는지 알아옵니다.
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/ctime/difftime
    에서 가져왔습니다. */
    // 약간의 수정을 가했습니다.

    #include <stdio.h>
    #include <time.h>

    int main()
    {
        time_t start, end;
        char szInput[256];
        double diff;

        time(&start);
        fputs("Please, enter your name : ", stdout);
        fgets(szInput, sizeof(szInput) / sizeof(char), stdin);
        time(&end);

        diff = difftime(end, start);
        printf("Hi %s. \n", szInput);
        printf("It took you %.2f seconds to type your name. \n", diff);

        return 0;
    }
  
실행 결과  
Please, enter your name : SeoMinJun  
Hi SeoMinJun.  
It took you 1.87 seconds to type your name.  