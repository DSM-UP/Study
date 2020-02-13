# C언어 putchar 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ putchar  
URL : https://modoocode.com/47  
  
## putchar
  
    #include <stdio.h>

    int putchar(int character);
  
표준 출력(stdout)에 문자를 쓴다.  
  
표준 출력에서 현재 위치 표시자가 가리키는 곳에 문자를 쓴 뒤, 위치 표시자를 다음 위치로 전진시킨다. putc(character, stdout); 을 한 것과 동일하다.  
  
## 인자
  
### character
  
표준 출력에 쓸 문자. 이 때 문자는 int 형태로 형변환되어 전달된다.  
  
## 리턴값
  
오류가 하나도 없다면 표준 출력에 쓰여진 문자가 반환된다. 만일 오류가 발생한다면 EOF가 반환되고 오류 표시자가 설정된다.  
  
## 예제
  
    #include <stdio.h>

    int main()
    {
        char c;

        for (c = 'A'; c <= 'Z'; c++)
            putchar(c); // A ~ Z까지의 문자를 순서대로 출력한다.

        return 0;
    }