# C언어 perror 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ perror  
URL : https://modoocode.com/53  
  
## perror
  
    #include <stdio.h>

    void perror(const char* str);
  
오류 메시지를 출력한다.  
  
전역 변수 errno의 값을 해석하여 이에 해당하는 시스템 오류 메시지를 **표준 오류 출력 스트림(stderr)**에 출력한다. 또한 추가적으로 전달하고자 하는 사용자 정의 메시지를 str 인자에 담아 출력할 수도 있다.  
  
errno는 정수형 변수로 이전의 라이브러리 함수에 의해 발생한 오류에 대한 정보를 가지고 있다. 이 때, errno의 값에 따라 perror 함수에 의해 출력되는 시스템 오류 메시지는 플랫폼이나 컴파일러에 따라 달라질 수 있다.  
  
만일 str이 NULL 포인터가 아니라면 사용자 정의 메시지가 시스템 오류 메시지 이전에 출력된다. 이 때 두 개의 메시지는 ": "로 구분된다. 그리고 str이 NULL 포인터인지 아닌지에 상관 없이 맨 마지막에는 개행 문자('\n')가 출력된다.  
  
**perror은 오류가 발생한 바로 다음에 호출되어야 한다.** 그렇지 않을 경우 다른 함수들의 호출에 의해 출력 결과가 달라질 수 있다.  
  
## 인자
  
### str
  
C 형식 문자열로 시스템 오류 메시지 이전에 출력할 사용자 정의 메시지이다.  
  
만일 NULL 포인터라면, 시스템 오류 메시지 다음에 어떠한 메시지도 출력되지 않는다.  
  
관습적으로 프로그램의 이름이 주로 사용된다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstdio/perror
    // 약간의 수정을 가했습니다.

    #include <stdio.h>

    int main()
    {
        FILE* pFile;

        pFile = fopen("unexist.ent", "rb");
        
        if (!pFile)
            perror("The following error occurred");
        else
            fclose(pFile);
        
        return 0;
    }
  
실행 결과  
  
The following error occurred: No such file or directory  