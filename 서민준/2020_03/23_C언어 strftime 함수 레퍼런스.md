# C언어 strftime 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/122">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/strftime-wcsftime-strftime-l-wcsftime-l?view=vs-2019">MSDN</a>  
  
## strftime
  
    #include <time.h>

    size_t strftime(char* strDest, size_t maxsize, const char* format, const struct tm* timeptr);
  
시간을 사용자가 원하는 형식에 맞추어 출력한다.  
  
format 인수에 따라 timeptr의 tm 구조체의 값을 해석하여 그 결과를 버퍼 strDest에 저장한다. 이때 저장되는 문자열의 최대 길이는 maxsize만큼 저장된다.  
  
### 인자
  
    strDest
  
문자열이 복사되는 배열을 가리키는 포인터이다.  
  
    maxsize
  
strDest에 복사되는 문자열의 최대 길이를 지정한다.  
  
    format
  
특정한 형식 지정자들을 포함하고 있는 문자열이다. 다음과 같은 형식 지정자들이 있다.  
  
형식 지정자 | 의미 | 예시
-----------|------|------
%a | 요일 이름을 약자로 표기 | Mon
%A | 요일 이름을 완전하게 표기 | Monday
%b | 월 이름을 약자로 표기 | Mar
%B | 월 이름을 완전하게 표기 | March
%c | 날짜와 시간 표시 형식 | Mon Mar 23 09:50:17 2020
%d | 날짜(일) | 23
%H | 24시간 형식으로 시간을 표시 | 20
%I | 12시간 형식으로 시간을 표시 | 08
%j | 1년 중 몇 번째 일인지 | 159
%m | 월을 숫자로 표시 | 03
%M | 분 | 51
%p | AM 또는 PM을 나타낸다. | AM
%S | 초 | 07
%U | 그 해의 첫 번째 일요일을 첫 번째 주의 시작이라고 할 때 몇 번째 주인지 표시한다. | 4
%w | 요일을 숫자로 표시한다. (일요일 0 ~ 토요일 6) | 1
%W | 그 해의 첫 번째 월요일을 첫 번째 주의 시작이라고 할 때 몇 번째 주인지 표시한다. | 3
%x | 날짜 표시 | 03/23/20
%X | 시간 표시 | 09:54:31
%y | 년도를 끝 두 자리만 표시 | 20
%Y | 년도 표시 | 2020
%Z | 시간대를 표시 | CDT
%% | % 기호를 표시 | %
  
    timeptr
  
tm 구조체를 가리키는 포인터이다.  
  
### 리턴값
  
문자열을 만든 후 종료 NULL 문자를 포함해 ptr에 복사하고 복사된 문자의 수를 반환한다. (이때, 종료 NULL 문자는 수에 포함하지 않는다.)  

만약 만들어진 문자열 + 종료 NULL 문자의 수가 maxsize 보다 많다면 0을 반환하고 strDest의 복사되는 문자열의 내용을 알 수 없게 된다.  

### 실행 예제
  
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/ctime/strftime
    에서 가져왔습니다. */

    #include <stdio.h>
    #include <time.h>

    int main()
    {
        time_t rawtime;
        struct tm* timeinfo;
        char buffer[80];

        time(&rawtime);
        timeinfo = localtime(&rawtime);

        strftime(buffer, 80, "Now it's %I:%M%p.", timeinfo);
        puts(buffer);

        return 0;
    }
  
실행 결과  
Now it's 09:59AM.  
