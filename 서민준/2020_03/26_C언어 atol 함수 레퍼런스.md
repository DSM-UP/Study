# C언어 atol 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/132">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/atol-atol-l-wtol-wtol-l?view=vs-2019">MSDN</a>  
  
## atol
  
    #include <stdlib.h>

    long atol(const char* str);
  
문자열을 long 정수로 변환한다.  
  
문자열에서 비-공백 문자가 나오기 전까지 최대한 많은 공백 문자들을 무시한다. 그 다음에 첫 번째 비-공ㅂ개 문자부터 최대한 많은 숫자들을 수로 변환한다. 이때, 숫자 앞에는 부호를 나타내는 +나 -가 올 수 있다.  
  
만약 첫 번째 비-공백 문자가 부호를 나타내는 +나 - 혹은 숫자가 아닌 경우 아무런 변환도 일어나지 않는다.  
  
### 인자
  
    str
  
정수를 포함하고 있는 문자열  
  
### 리턴값
  
성공적으로 변환하였다면 변환된 long 정수를 반환한다. 만약 변환하는데 실패하였다면 0을 반환한다.  
  
변환된 long 데이터가 long의 양의 포현 범위를 벗어나는 경우 LONG_MAX를, 음의 표현 범위를 벗어나는 경우 LONG_MIN을 반환한다.  
  
### 실행 예제
  
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/cstdlib/atol
    에서 가져왔습니다. */

    #include <stdio.h>
    #include <stdlib.h>

    int main()
    {
        long int li;
        char szInput[256];

        printf("Enter a long number: ");
        scanf("%s", szInput);

        li = atol(szInput);
        printf("The value entered is %li. The double is %li. \n", li, li * 2);

        return 0;
    }
  
실행 결과  
Enter a long number: 2409  
The value entered is 2409. The double is 4818.  
