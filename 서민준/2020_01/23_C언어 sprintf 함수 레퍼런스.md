# C언어 sprintf 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ sprintf  
URL : https://modoocode.com/66  
  
## sprintf
  
    #include <stdio.h>

    int sprintf(char* str, const char* format, ...);
  
str에 데이터를 형식(format)에 맞추어 쓴다. str가 가리키는 배열에 형식 문자열에 지정한 방식 대로 C 문자열을 쓴다.  
  
쉽게 설명하자면, printf에서 화면에 출력하는 대신에 화면에 출력할 문자열을 인자로 지정한 문자열(str)에 쓴다는 것이다. 이 때, 인자로 지정한 배열의 크기는 배열에 쓰여질 문자열의 크기 보다 커야만 한다.  
  
주의할 점은 sprintf 함수는 자동적으로 str 맨 마지막에 NULL 문자를 붙이기 때문에 항상 한 칸의 여유가 있어야 한다.  
  
## 인자
  
- str
  
    C 문자열이 저장될 char 배열을 가리키는 포인터
  
- format
  
    str에 쓰여질 문자열을 포함하는 형식 문자열으로, 이는 형식 태그를 포함할 수 있다.
  
## sprintf 함수의 활용 : 수를 문자열로 바꾸기
  
    // 출처 : https://modoocode.com/66

    #include <stdio.h>

    int main()
    {
        int num;
        char str[100];

        scanf("%d", &num); // 정수를 하나 입력받는다.
        sprintf(str, "%d", num); // 정수를 str에 문자열로 저장한다.

        printf("str : %s \n", str); // 실행 결과로 num에 저장한 수가 문자열로 출력된다.

        return 0;
    }
  
## 리턴값
  
str에 쓰기가 성공할 경우 쓰여진 총 문자의 개수가 반환된다. 이 때, 이 문자의 개수는 맨 마지막에 자동적으로 붙는 NULL 문자는 포함하지 않는다.  
  
실패할 경우 음수가 리턴된다.