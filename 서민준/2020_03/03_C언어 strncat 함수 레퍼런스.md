# C언어 strncat 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strncat  
URL : https://modoocode.com/82  
  
## strncat
  
    #include <string.h>

    char* strncat(char* destination, char* source, size_t num);
  
문자열에 일부 문자들을 덧붙인다.  
  
source의 처음 num개의 문자들을 destination 끝에 덧붙인다. 이때, destination 끝에는 자동으로 NULL 문자까지 붙여진다.  
  
만일, source의 문자열의 길이가 num보다 작다면, source의 NULL 문자까지만 붙여진다.  
  
## 인자
  
### destination
  
배열을 가리키는 포인터로, C 문자열을 보관하며 (NULL 문자를 포함한) 합쳐진 문자열이 들어갈 만큼 충분히 크기가 커야만 한다.  
  
### source
  
덧붙여질 C 문자열이다.  
  
### num
  
source에서 붙일 문자의 (최대)개수이다.  
  
## 리턴값
  
destination이 리턴된다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/strncat

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str1[20];
        char str2[20];

        strcpy(str1, "To be ");
        strcpy(str2, "or not to be");

        strncat(str1, str2, 6);
        puts(str);

        return 0;
    }
  
실행 결과  
To be or not  
