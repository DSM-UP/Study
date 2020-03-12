# C언어 clock 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/110">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/clock?view=vs-2019">MSDN</a>  
  
## clock
  
    #include <time.h>

    clock_t clock(void);
  
프로그램을 시작하는 동안 CRT 초기화 이후 경과된 시간을 알려줍니다. 이 함수는 순 CPU 시간을 반환 값으로 지정합니다.  
  
경과된 시간(초)을 확인하려면 clock 함수에서 반환된 값을 매크로 CLOCKS_PER_SEC으로 나눕니다.  
  
반환하는 값이 clock_t의 최대 양수 값을 초과할 수 있습니다.  
  
이 함수가 **프로그램의 시작**으로 잡는 위치는 플랫폼마다 다를 수 있다. 따라서 특정 프로그램의 실행 시간을 알기 위해서는 프로그램 시작 시 clock 함수를 호출한 값과 프로그램 종료 시 clock 함수를 한 번 더 호출하여서 그 값을 비교해야만 한다.  
  
### 리턴값
  
프로그램이 시작 시 CRT 초기화 이후 경과된 시간을 반환합니다. 초당 **CLOCKS_PER_SEC** 단위로 측정됩니다.  
  
경과된 시간을 사용할 수 없거나 clock_t 형식으로 기록될 수 있는 최대 양수 시간을 초과하는 경우 함수는 값 (clock_t)(-1)을 반환합니다.  
  
## 실행 예제
  
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/ctime/clock
    에서 가져왔습니다. */
    // 10초 카운트 다운을 하는 예제입니다.
    // 약간의 수정을 가했습니다.

    #include <stdio.h>
    #include <time.h>

    void wait(int seconds);

    int main()
    {
        int n;

        puts("Starting countdown...");
        for(n = 10; n > 0; n--)
        {
            printf("%d \n", n);
            wait(1);
        }
        puts("FIRE!!!");

        return 0;
    }

    void wait(int seconds)
    {
        clock_t endwait;

        endwait = clock() + seconds * CLOCKS_PER_SEC;
        while(clock() < endwait) { }
    }
  
실행 결과  
Starting countdown...  
10  
9  
8  
7  
6  
5  
4  
3  
2  
1  
FIRE!!!  