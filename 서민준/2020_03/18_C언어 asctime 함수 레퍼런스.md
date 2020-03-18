# C언어 asctime 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/116">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/asctime-wasctime?view=vs-2019">MSDN</a>  
  
## asctime
  
    #include <time.h>

    char* asctime(const struct tm* timeptr);
  
tm 구조체를 문자열로 변환한다. 일반적으로 gmtime 또는 localtime을 호출하여 timeptr을 준다.  
  
변환된 문자열은 현지 표준 시간대 설정에 따라 조정된다.  
  
이 함수로 인해 생성되는 문자열은 다음과 같은 형식을 따른다.  
  
Wed(요일) Mar(월) 18(일) 02(시):01(분):51(초) 2020(년)\n\0  
  
24시간제가 사용된다. 정적으로 할당된 단일 버퍼에 해당 문자열을 집어 넣는다. 그렇기에 이 함수를 호출할 때마다 이전 호출의 결과는 삭제된다.  
  
### 인자
  
    timeptr
  
tm 구조체를 가리키는 포인터이다.  
  
### 리턴값
  
timeptr을 읽어서 지정되어 있는 형식의 문자열을 만들어 리턴한다.  
  
### 실행 예제
  
    // 현재 날짜 및 시간을 화면에 출력합니다.
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/ctime/asctime
    에서 가져왔습니다. */
    // 일부 수정을 가했습니다.

    #include <stdio.h>
    #include <time.h>

    int main()
    {
        time_t rawTime;
        struct tm* timeInfo;

        time(&rawTime);
        timeInfo = localtime(&rawTime);
        printf("The current date/time is : %s \n", asctime(timeInfo));

        return 0;
    }
  
실행 결과  
The current date/time is: Wed Mar 18 05:07:19 2020  
