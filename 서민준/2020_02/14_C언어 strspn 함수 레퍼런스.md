# C언어 strspn 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strspn  
URL : https://modoocode.com/97  
  
## strspn
  
    #include <string.h>

    size_t strspn(const char* str1, const char* str2);
  
str2의 문자들만을 포함하고 있는 str1의 처음 부분의 길이를 구한다.  
  
다시 말하면 str2에 "12346"이 들어있고 str1에는 "321ab"가 들어있다면, str1의 맨 처음부터 문자들을 비교하는데, str2에 들어 있는 문자들만을 포함한 곳까지의 길이, 즉 이 경우에는 3, 2, 1이 해당하므로 3이 리턴된다.  
  
이때 중요한 점은 **str1의 맨 처음부터 비교한다**는 점인데 만일 str1에 "ab321"이였다면 리턴값이 0이 된다.  
  
## 인자
  
### str1
  
검색이 수행되는 C 형식 문자열  
  
### str2
  
검색할 문자들을 포함하고 있는 문자열  
  
## 리턴값
  
str1에서 오직 str2에 포함되어 있는 문자들만이 있는 부분의 길이로, str1의 맨 처음 부분부터 잰다. 따라서 만일 str1에 있는 모든 문자들이 str2에 포함되어 있다면 리턴값은 str1의 길이와 동일하겠지만, 만일 str1에 있는 첫 번째 문자가 str2에 없다면 리턴값은 0이 된다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/cstring/strspn

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        int i;
        char strText[] = "129th";
        char cSet[] = "1234567890";

        i = strspn(strText, cSet); // 0 ~ 9 사이의 숫자를 검출하므로 3이 리턴될 것이다.
        printf("The lenght of initial number is %d. \n", i);

        return 0;
    }
  
실행 결과  
  
The lenght of initial number is 3.  
계속하려면 아무 키나 누르십시오 . . .