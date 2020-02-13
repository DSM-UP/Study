## C언어 strtok 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strtok  
URL : https://modoocode.com/102  
  
## strtok
  
    #include <string.h>

    char* strtok(char* str, const char* delimiters);
  
문자열을 토근들로 분리한다.  
  
이 함수를 여러번 호출해서 문자열을 토큰들로 분리할 수 있다. 이때 토큰은 구분문자(delimiter)로 쪼개진 문자열 조각을 의미한다.  
  
이 함수에 str에 쪼개고자 하는 문자열을 전달하면 str의 첫 번째 문자부터 토큰들의 위치를 찾아내게 된다. 이 다음에 인자로 NULL을 전달하며 함수를 호출하게 된다면 이전에 찾았던 토큰 바로 다음 문자부터 시작하여 토큰들의 위치를 찾게 된다.  
  
토큰들의 시작과 끝을 결정하기 위해서 strtok 함수는 구분 문자를 포함하지 않는 가장 첫 번째 문자부터 (이 문자의 토큰의 시작이 된다) 그 다음으로 등장하는 첫 번째 구분 문자가 마지막이 된다. 이때, 토큰의 마지막은 (구분 문자가 있었을 곳) 함수에 의해 NULL 문자로 바뀌며 이 토큰의 시작 주소가 리턴된다.  
  
만일 strtok에서 맨 처음에 str에 인자로 전달하였던 문자열의 종료 NULL 문자에 도달하게 된다면 그 후의 str에 NULL을 전달하는 모든 호출에서는 NULL 포인터를 리턴하게 된다. 물론 나중에 str에 다른 문자열을 전달한다면 그 문자열을 토큰으로 분리하기 시작할 것이다.  
  
## 인자
  
### str
  
토큰으로 불리할 C 형식 문자열이다. 만일 기존에 str에 전달하였던 문자열을 계속 토큰으로 분리해 나가고 싶다면 str에 NULL을 전달하면 된다.  
  
### delimiters
  
구분 문자들을 포함하고 있는 C 형식 문자열이다.  
  
## 리턴값
  
문자열에서 찾은 마지막 토큰의 주소값을 리턴하며 토큰이 더이상 없다면 NULL 포인터를 리턴한다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/strtok

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str[] = "- This, a sample string.";
        char* pch;

        printf("Splitting string \"%s\" into tokens: \n", str);
        pch = strtok(str, " ,.-");

        while (!pch)
        {
            puts(pch);
            pch = strtok(NULL, " ,.-");
        }

        return 0;
    }

    // ' ', ',', '.', '-' 문자들을 구분 문자로 이용하여 str을 토큰들로 분리한다.
  
실행 결과  
  
Splitting string "- This, a sample string." into tokens:  
This  
a  
sample  
string  
계속하려면 아무 키나 누르십시오 . . .