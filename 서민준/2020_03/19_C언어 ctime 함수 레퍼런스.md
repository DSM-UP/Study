# C언어 ctime 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/118">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/ctime-ctime32-ctime64-wctime-wctime32-wctime64?view=vs-2019">MSDN</a>  
  
## ctime
  
    #include <time.h>

    char* ctime(const time_t* sourceTime);
  
시간 값을 문자열로 변환한 뒤 현지 표준 시간대 설정에 맞게 조정한다.  
  
일반적으로 1970년 1월 1일 자정(UTC, 협정 세계시) 이후 경과된 시간(초)을 반환합니다. 반환 값 문자열은 정확히 26자를 포함하며 그 형식은 다음과 같습니다.  
  
Thu Mar 19 10:17:01 2020\n\0  
  
24시간제가 사용된다.  
  
변환된 문자열은 현지 표준 시간대 설정에 따라 조정된다.  
  
이 함수를 호출하면 gmtime 및 localtime 함수에서 사용하는 정적으로 할당된 단일 버퍼가 수정된다. 이러한 루틴 중 하나를 호출할 때마다 이전 호출의 결과가 삭제된다. ctime은 asctime 함수를 사용하여 정적 버퍼를 공유한다.  
  
이 함수는 asctime(localtime(sourceTime)); 과 동일하다.  
  
### 인자
  
    sourceTime
  
변환할 시간이 저장된 time_t에 대한 포인터입니다.  
  
### 리턴값
  
sourceTime에 저장되어 있는 시간이 문자열로 변환되어 반환됩니다.  
  
1970년 1월 1일 자정(UTC) 이전의 날짜를 나타낼 경우 NULL이 반환됩니다.  
  
### 실행 예제
  
    // 현재 현지 날짜 및 시간을 표시합니다.
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/ctime/ctime
    에서 가져왔습니다. */
    // 약간의 수정을 가했습니다.

    #include <stdio.h>
    #include <time.h>

    int main()
    {
        time_t rawTime;

        time(&rawTime);
        printf("The current local time is : %s", ctime(&rawTime));

        return 0;
    }
  
실행 결과  
The current local time is : Thu Mar 19 10:23:37 2020  
