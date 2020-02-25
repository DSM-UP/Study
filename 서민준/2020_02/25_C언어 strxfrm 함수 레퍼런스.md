# C언어 strxfrm 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strxfrm  
URL : https://modoocode.com/91  
  
## strxfrm
  
    #include <string.h>

    size_t strxfrm(char* destination, const char* source, size_t num);
  
locale을 사용해 문자열을 변환한다.  
  
source가 가리키는 C 형식 문자열을 현재 locale에 따라 문자열을 변환한 후 변환한 문자열의 처음 num개 문자를 destination에 복사한다.  
  
이때, 변환된 문자열의 길이를 리턴하게 된다.  
  
이 함수는 문자열의 길이를 계산하는데(NULL은 세지 않는다) 사용할 수 있는데, destination에 NULL 포인터를 넣고, num에 0을 주면 된다.  
  
## 인자
  
### destination
  
변환된 문자열의 처음 num개 문자가 보관될 곳의 주소값  
  
### source
  
변환될 C 형식의 문자열  
  
### num
  
destination에 복사할 최대 문자의 수  
  
## 리턴값
  
변환된 문자열의 길이로 NULL은 세지 않는다.  
  
## 실행 예제
  
    // strxfrm 함수를 통해 문자열의 길이를 구한다.
    // Visual Studio 2019에서 작성된 코드입니다.

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str[] = "Hello, World";

        printf("문자열의 길이 : %d \n", strxfrm(NULL, str, 0));

        return 0;
    }
  
### 실행 결과
  
문자열의 길이 : 12  
이 창을 닫으려면 아무 키나 누르세요...