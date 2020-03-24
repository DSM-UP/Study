# C언어 atof 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/124">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/atof-atof-l-wtof-wtof-l?view=vs-2019">MSDN</a>  
  
## atof
  
    #include <stdlib.h>

    double atof(const char* str);
  
문자열을 double형 값으로 바꾼다.  
  
문자열의 내용을 double형 변수로 생각하여 그 값을 double로 변환한다. 예를 들어 문자열 "3.145"를 전달하였다면 해당 문자열 데이터를 산술 연산에 사용하기 위해서 double형 데이터인 3.145로 변환해 반환한다.  
  
입력 받은 문자열에서 최초로 공백 문자가 아닌 문자까지 도달할 때까지 그 앞의 모든 공백 문자를 지워버린다. 그리고, 최초의 비 공백 문자로부터 부동 소수점 수와 관련된 문자들을 최대한 많이 읽어들인 후 그 데이터를 수치로 변환한다. 나머지 문자열은 무시되고 이 함수에 영향을 주지 않는다.  
  
이 함수가 변환할 수 있는 올바른 형태의 문자는 다음과 같다.  
  
- 숫자 앞의 + 또는 - 기호  
  
- 0 ~ 9까지의 숫자들, 소수점(.), 소수점 뒤의 숫자들(0 ~ 9)  
  
- 부호 기호와 숫자들 뒤에 지수를 나타낼 수 있으며, e 또는 E가 사용될 수 있다.  
  
만약 맨 처음 비 공백 문자가 올바른 부동 소수점 수를 구성할 수 없는 문자이거나 문자열 자체가 비어있는 경우 어떠한 작업도 진행되지 않는다.  
  
### 인자
  
    str
  
double형으로 변환할 문자열로, 부동 소수점 수를 문자열 상태로 포함하고 있어야 한다.  
  
### 리턴값
  
성공적으로 수를 구했다면 double형으로 해당 수가 반환된다.  
  
만일 올바른 수를 구할 수 없거나, 수의 값이 언더플로우일 경우 0.0이 리턴된다.  
  
만일 문자열의 수가 double형에서 표현할 수 있는 최대의 범위보다 클 겨우 양 또는 음의 HUGE_VAL이 리턴된다.  
  
### 실행 예제
  
    // 각도를 문자열로 입력받아서 double형 수치로 변환한 뒤, 이의 sine 값을 계산한다.
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/cstdlib/atof
    에서 가져왔습니다. */
    // 약간의 수정을 가했습니다.

    #include <stdio.h>
    #include <stdlib.h>
    #include <math.h>

    int main()
    {
        double n, m;
        double pi = 3.1415926535;
        char szInput[256];
        
        fputs("Enter degrees : ", stdout);
        fgets(szInput, sizeof(szInput) / sizeof(char), stdin);
        
        n = atof(szInput);
        m = sin(n * pi / 180);
        
        printf("The sine of %f degrees is %f\n", n, m);
        return 0;
    }
  
실행 결과  
Enter degrees : 42  
The sine of 42.000000 degrees is 0.669131  
