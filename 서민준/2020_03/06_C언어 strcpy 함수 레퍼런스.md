# C언어 strcpy 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strcpy  
URL : https://modoocode.com/79  
  
## strcpy
  
    #include <string.h>

    char* strcpy(char* destination, const char* source);
  
문자열을 복사한다.  
  
source가 가리키는 C 형식의 문자열을 destination이 가리키는 곳에 복사한다. 이때, NULL도 포함해서 복사한다.  
  
오버플로우를 방지하기 위해서, destination이 가리키는 배열의 크기는 반드시 source 문자열의 크기와 같거나 이보다 커야 한다. 또한, 복사하는 영역이 source와 겹치면 안된다.  
  
참고로 위와 같은 오버플로우 문제를 방지하기 위해 ISO/IEC TR 24731에서 제안된 strcpy_s 함수를 이용하면 된다. 이 함수는 마이크로소프트 C 런타임 라이브러리와 일부 C 라이브러리에서 사용 가능하다.  
  
하지만 GLibc와 같은 라이브러리에서는 지원되지 않는다. 이 strcpy_s 함수는 만일 source의 크기가 destination보다 크다면 복사를 수행하지 않고 0이 아닌 값을 리턴하며, (호출자가 리턴값을 무시하였을 때를 대비하여)버퍼를 비워버린다.  
  
## 인자
  
### destination
  
문자열이 복사될 곳을 가리키는 포인터  
  
### source
  
복사할 문자열을 보관하고 있는 포인터  
  
## 리턴값
  
destination이 리턴된다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/strcpy

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str1[] = "Sample string";
        char str2[40];
        char str3[40];

        strcpy(str2, str1);
        strcpy(str3, "copy successful");
        printf("str1 : %s \nstr2 : %s \n, str3 : %s \n", str1, str2, str3);

        return 0;
    }
  
실행 결과  
str1 : Sample string   
str2 : Sample string   
str3 : copy successful   
