# C언어 mktime 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/112" target = "_blank">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/mktime-mktime32-mktime64?view=vs-2019" target = "_blank">MSDN</a>  
  
## mktime
  
    #include <time.h>

    time_t mktime(struct tm* timeptr);
  
tm 구조체를 time_t 형식으로 변환합니다. timeptr이 가리키는 tm 구조체를 읽어들여서 time_t 형식으로 리턴합니다.  
  
이때, tm 구조체에서 참조하는 값은 현재 시각과 날짜뿐입니다. 나머지 정보인 tm_wday와 tm_yday는 무시됩니다.  
  
tm 구조체에 들어있는 시각과 날짜 정보를 가지고 tm_wday와 tm_yday를 설정합니다. 이를 통해 역으로 특정한 날자가 무슨 요일이고, 몇 번째 날인지 추적할 수도 있습니다.  
  
### 인자
  
    struct tm* timeptr
  
tm 구조체를 가리키는 포인터로 반드시 날짜와 시간에 관한 정보가 들어 있어야 합니다.  
  
### 리턴값
  
현재 timeptr로 전달된 날짜와 시각에 맞추어서 이에 대한 time_t 값이 리턴됩니다.  
  
오류가 발생했을 경우 -1을 반환합니다.  
  
### 실행 예제
  
    // 특정한 날짜가 무슨 요일인지 알아오는 예제입니다.
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/ctime/mktime
    에서 가져왔습니다. */
    // 약간의 수정을 가했습니다.

    #include <stdio.h>
    #include <time.h>

    int main() {
        time_t rawTime;
        struct tm* timeInfo;
        int year, month, day;
        char* weekday[] = { "Sunday",   "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday" };

        /* 사용자로 부터 날짜를 입력 받는다. */
        fputs("Enter year : ", stdout);
        scanf("%d", &year);
        fputs("Enter month : ", stdout);
        scanf("%d", &month);
        fputs("Enter day : ", stdout);
        scanf("%d", &day);

        /* rawtime 에 time 함수로 현재 시간 정보로 세팅한 뒤,
        사용자로 부터 입력받은 데이터로 년/월/일 정보를 수정한다. */
        time(&rawTime);
        timeInfo = localtime(&rawTime);
        timeInfo->tm_year = year - 1970;
        timeInfo->tm_mon = month - 1;
        timeInfo->tm_mday = day;

        /* mktime 함수를 호출하면 년/월/일 데이터에 따라
        tm_wday 와 tm_yday 를 설정한다. 이 때 리턴되는 time_t 데이터는 사용하지
        않는다.*/
        mktime(timeInfo);

        printf("That day is a %s. \n", weekday[timeInfo->tm_wday]);

        return 0;
    }
  
실행 결과  
Enter year : 2020  
Enter month : 3  
Enter day : 16  
That day is a Monday.