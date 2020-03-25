# C언어 atoi 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/131">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/atoi-atoi-l-wtoi-wtoi-l?view=vs-2019">MSDN</a>  
  
## atoi
  
    #include <stdlib.h>

    int atoi(const char* str);
  
문자열을 정수로 변환한다.  
  
문자열을 정수로 변환하여 그 값을 반환한다.  
  
이 함수는 비-공백 문자가 나오기 전까지 최대한 많은 공백 문자('', '\t', '\n')들을 무시한다. 첫 번째 비-공백 문자부터 최대한 많은 숫자들을 수로 변환한다. 이때, 숫자 앞에 +나 -가 있을 수 있다.  
  
처음 만난 비-공백 문자가 +나 -, 숫자가 아닌 경우, 이 함수는 어떠한 변환도 하지 않는다.  
  
### 인자
  
    str
  
정수를 포함하고 있는 문자열  
  
### 리턴값
  
성공적으로 변환하였다면 변환된 int 값을 반환한다. 변호나을 실패하였다면 0을 반환한다.  
  
변환은 성공하였지만 그 값이 표현 가능한 범위를 벗어났다면 INT_MAX 혹은 INT_MIN이 반환된다.  
  
### 실행 예제
  
    // 수를 문자열로 입력받은 뒤 atoi 함수로 이를 정수로 변환한다.
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/cstdlib/atoi/
    에서 가져왔습니다. */

    #include <stdio.h>
    #include <stdlib.h>

    int main()
    {
        int i;
        char szInput[256];

        printf("Enter a number: ");
        fgets(szInput, 256, stdin);
        i = atoi(szInput);

        printf("The value entered is %d. The doule is %d. \n", i, i * 2);
        return 0;
    }
  
실행 결과  
Enter a number: The value entered is 24. The double is 48.  
