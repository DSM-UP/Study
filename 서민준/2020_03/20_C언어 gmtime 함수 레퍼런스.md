# C언어 gmtime 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/119">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/gmtime-gmtime32-gmtime64?view=vs-2019">MSDN</a>  
  
## gmtime
  
    #include <time.h>

    struct tm* gmtime(const time_t* const _Time);
  
time_t형 값을 입력받아서 UTC 형식 시간에 따른 tm 구조체를 만들어서 리턴한다.  
  
sourceTime이 가리키는 time_t형 변수의 값을 받아 그 값을 토대로 tm 구조체의 멤버들을 초기화한다.  
  
### 인자
  
    _Time
  
time_t형 변수를 가리키는 포인터  
  
### 리턴값
  
인자로 받은 time_t형 변수의 값을 토대로 멤버가 초기화된 tm 구조체 변수를 가리키는 포인터가 리턴된다.  
  
이때, 이 구조체 변수는 정적으로 할당된 변수로 gmtime 함수와 localtime 함수 모두 공통으로 사용한다. 따라서 이들 함수를 호출하게 되면 구조체 변수의 내용이 덮어 씌워진다.  
  
### 실행 예제
  
    // 세계 몇몇 도시의 시각을 보여준다.
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/ctime/gmtime
    에서 가져왔습니다. */
    // 약간의 수정을 가했습니다.

    #include <stdio.h>
    #include <time.h>

    #define MST (-7)
    #define UTC (0)
    #define CCT (+8)
    #define GMT (+9)

    int main()
    {
        time_t rawTime;
        struct tm* ptm;

        time(&rawTime);

        ptm = gmtime(&rawTime);

        puts("Current time around the world!");
        printf("Phoenix AZ (U.S.) : %2d:%02d \n", (ptm->tm_hour + MST) % 24, ptm->tm_min);
        printf("Reykjavik (Iceland) : %2d:%02d \n", (ptm->tm_hour + UTC) % 24, ptm->tm_min);
        printf("Beijing (China) : %2d:%02d \n", (ptm->tm_hour + CCT) % 24, ptm->tm_min);
        printf("Seoul (Korea) : %2d:%02d \n", (ptm->tm_hour + GMT) % 24, ptm->tm_min);

        return 0;
    }
  
실행 결과  
Current time around the world!  
Phoenix AZ (U.S.) : -6:22  
Reykjavik (Iceland) :  1:22  
Beijing (China) :  9:22  
Seoul (Korea) : 10:22  