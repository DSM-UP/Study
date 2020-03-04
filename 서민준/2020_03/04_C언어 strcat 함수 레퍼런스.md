# C언어 strcat 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strcat  
URL : https://modoocode.com/81  
  
## strcat
  
    #include <string.h>

    char* strcat(char* destination, const char* source);
  
문자열을 덧붙인다.  
  
destination 끝에 source를 더하게 된다. 이때, destination의 맨 마지막 NULL 문자는 source의 첫 번째 문자가 덮어 씌여진다. 그리고, source의 마지막 NULL 문자가 destination 끝에 붙어서 새로운 문자열을 형성하게 된다.  
  
## 인자
  
### destination
  
배열이며, C 형식 문자열을 포함하고 있어야만 하고, 합쳐진 문자열을 포함할 만큼 배열의 크기가 커야 한다.  
  
### source
  
destination에 덧붙여질 C 형식 문자열. 이때, destination과 위치가 겹쳐지면 안된다.  
  
## 리턴값
  
destination이 리턴된다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/strncat

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str[80];

        strcpy(str, "these ");
        strcat(str, "strings ");
        strcat(str, "are ");
        strcat(str, "concatenated.");

        puts(str);
        return 0;
    }
  
실행 결과  
these strings are concatenated.  
