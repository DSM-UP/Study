# C언어 strcspn 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strcspn  
URL : https://modoocode.com/94  
  
## strcspn
  
    #include <string.h>

    size_t strcspn(const char* str1, const char* str2);
  
str2에 들어있는 문자들 중에서 str1에 들어있는 문자와 일치하는 것이 있다면 첫 번째로 일치하는 문자까지 읽어들인 수를 리턴한다.  
  
예를 들어  
  
    strcspn("Hello, World", "aeiou");
  
형태로 함수를 호출하였다면, str2에 들어있는 문자들, 즉 a, e, i, o, u를 str1에서 검색하는 것인데 첫 번째로 일치하는 것, 즉 e가 정답이 된다. 이때, 리턴하는 값은 str1에서 'e'까지 읽어들이는데 읽은 문자의 수, 즉 1을 리턴하게 된다.  
  
## 인자
  
### str1
  
검색을 수행할 C 형식 문자열  
  
### str2
  
검색할 문자들을 포함하고 있는 C 형식 문자열  
  
## 리턴값
  
만일 str2의 문자들 중 str1에 일치하는 것이 있다면 첫 번째로 일치하는 문자까지 도달하기 위해 읽어들인 문자들의 수 (즉, 그 문자의 위치 -1이라 보면 된다) 를 리턴한다. 만일 일치하는 것이 없다면 str1의 길이가 리턴된다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/strcspn
    // Visual Studio 2019에서 작성된 코드입니다.

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str[] = "fcba73";
        char keys[] = "1234567890";
        int i;

        i = strcspn(str, keys);
        printf("The first number in str is at position %d. \n", i + 1);

        return 0;
    }
  
실행 결과  
The first number in str is at position 5.  
이 창을 닫으려면 아무 키나 누르세요...