# C언어 strpbrk 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strpbrk  
URL : https://modoocode.com/95  
  
## strpbrk
  
    #include <string.h>

    char* strpbrk(char* str1, const char* str2);
  
문자열에서 다른 문자열에 들어 있는 문자들을 검색어로 생각하여 찾는다.  
  
이때, 가장 첫 번째로 일치되는 문자를 가리키는 포인터를 반환한다. 만일 일치되는 것이 없다면 NULL을 반환하게 된다.  
  
또한 이 함수는 문자열의 NULL 종료 문자는 문자열에 포함되어 있지 않다고 생각한다.  
  
C++에서는 함수 오버로딩이 가능하므로 다음과 같은 원형도 지니고 있다.  
  
    #include <cstring>

    const char* strpbrk(const char* str1, const char* str2);
  
## 인자
  
### str1
  
검색을 수행할 문자열  
  
### str2
  
검색어들을 포함하고 있는 문자열  
  
## 리턴값
  
str2의 문자들 중 str1의 문자들과 첫 번째로 일치하는 문자를 가리키게 된다. 만일 str1의 NULL 문자 이전까지 일치하는 것이 없다면 NULL을 리턴한다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/strpbrk
    // Visual Studio 2019에서 작성된 코드입니다.

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str[] = "This is a sample string";
        char key[] = "aeiou";
        char* pch;

        printf("Vowels in '%s' : ", str);
        pch = strpbrk(str, key); // 가장 먼저 str에 있는 key를 찾는다.

        while (pch) // pch가 NULL이 아니라면, 즉 key를 찾는데 성공하였다면
        {
            printf("%c ", *pch); // 해당 키 문자를 출력한다.
            pch = strpbrk(pch + 1, key); // 그 뒤, 해당 위치로부터 다음 위치부터 다시 key 값을 찾는다.
        }
        putchar('\n');

        return 0;
    }
  
실행 결과  
Vowels in 'This is a sample string' : i i a a e i  
  
이 창을 닫으려면 아무 키나 누르세요...