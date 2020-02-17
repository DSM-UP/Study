# C언어 strrchr 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strrchr  
URL : https://modoocode.com/96  
  
## strrchr
  
    #include <string.h>

    char* strrchr(char* str, int character);
  
문자열에서 문자를 검색하되 가장 마지막으로 나타나는 위치를 찾는다. 그리고 이를 가리키는 포인터를 리턴한다. 이때 문자열의 NULL 종료 문자 역시 C 문자열의 일부분이라 생각한다. 따라서 이 함수는 **문자열의 NULL 종료 문자를 가리키는데 사용될 수도 있다.**  
  
C++에서는 함수 오버로딩이 가능하므로 다음과 같은 원형 또한 가지고 있다.  
  
    #include <cstring>

    const char* strrchr(const char* str, int character);
  
## 인자
  
### str
  
C 형식 문자열  
  
### character
  
str에서 찾을 문자로 int로 전달되지만 함수 내부적으로는 다시 char로 변환되어 처리된다.  
  
## 리턴값
  
str에서 찾은 문자의 위치를 리턴한다. 만약 찾지 못한다면 NULL을 리턴한다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/strrchr

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str[] = "This is a sample string";
        char* pch;

        pch = strrchr(str, 's');
        printf("Last occurence of 's' found at %d \n", pch - str + 1);

        return 0;
    }
  
실행 결과  
Last occurence of 's' found at 18  
이 창을 닫으려면 아무 키나 누르세요...