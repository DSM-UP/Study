# C언어 time 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/114">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/time-time32-time64?view=vs-2019">MSDN</a>  
  
## time
  
    #include <time.h>

    time_t time(time_t* destTime);
  
시스템 시간을 가져온다.  
  
1970년 1월 1일 자정(UTC, 협정 세계시) 이후 경과된 시간(초)을 반환한다. 반환 값은 destTime에 지정된 위치에 저장된다.  
  
이 매개변수는 NULL일 수 있으며, 이 경우 반환 값은 저장되지 않는다.  
  
### 인자
  
    time_t* destTime
  
time_t형 변수를 가리키는 포인터로, 이 곳에 구해진 time_t 값이 전달된다.  
  
### 리턴값
  
time_t 형으로 구한 UTC 이후 경과된 시간을 리턴한다. 해당 리턴값은 destTime이 가리키는 곳에 저장되는 값과 동일하다.  
  
오류로 인해 값을 알아올 수 없을 경우 -1을 리턴한다.  
  
### 실행 예제
  
    // 현재 시간이 UTC 이후 몇 초가 지났는지 구하는 예제입니다.
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/ctime/time
    에서 가져왔습니다. */

    #include <stdio.h>
    #include <time.h>

    int main()
    {
        time_t seconds;

        seconds = time(NULL);
        printf("%ld hours since January 1, 1970. \n", secondes / 3600);

        return 0;
    }
  
실행 결과  
440117 hours since January 1, 1970.  
