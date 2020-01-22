# C언어 sscanf 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ sscanf  
URL : https://modoocode.com/67  
  
## sscanf
  
    #include <stdio.h>

    int sscanf(const char* str, const char* format, ...);
  
문자열에서 형식화 된 데이터를 읽어온다. str에서 데이터를 형식 문자열(format)에서 지정하는 바에 따라 읽어와 그 데이터를 뒤에 부수적인 인자들이 가리키는 메모리 공간에 저장하게 된다. 이 때, 데이터가 저장되는 방식 역시 형식 문자열에 의해 결정된다.  
  
## 인자
  
- str
  
    C 문자열로 sscanf 함수가 데이터를 얻어올 문자열이다.
  
- format
  
    C 문자열로 다음의 것들을 포함하고 있다.
      
        - 공백 문자 (Whitespace character) : 개행 문자(\n), 탭 문자, 띄어쓰기(' ')를 일컫는다.
      
        - 비-공백 문자 (Non whitespace character) : 공백 문자가 아니거나 형식 지정자에 포함되지 않는 것들은 함수로 하여금 다음 문자를 읽어 들이고 이와 이 비-공백 문자와 비교하여 같다면 버리고 다음 문자와 형식으로 진행한다. (단, %를 제외한다) 만일 다르다면 함수가 종료되고, 읽혀지지 않은 다른 문자들은 모두 남아있게 된다.
          
        - 형식 지정자 : %로 지정되는 것들로 어떠한 형식으로 데이터를 읽어오고, 또 각각의 형식 지정자에 대응되는 인자에 어떠한 형식으로 지정할 지에 대해 결정한다.
  
## sscanf 함수를 이용해서 문자열을 수로 바꾸기
  
    // 예제 출처 : https://modoocode.com/67

    #include <stdio.h>

    int main()
    {
        const char str[30] = "1234";
        int i;

        sscanf(str, "%d", &i);

        printf("Numbr from : %s \n, str);
        printf("Number : %d \n, i);

        return 0;
    }

    // 실행 결과로 i에는 1234가 저장된다.
  
## 리턴값
  
입력 성공 시에 읽어들인 개수를 리턴한다. 물론, 0이 리턴될 수도 있다. (이 경우에는 str에서 format에서 지정한 형식과 일치하는 데이터가 없어서 아무것도 읽어들이지 않은 경우 발생한다.)  
  
위 경우와는 조금 다르게, 어떠한 데이터도 성공적으로 읽기 전에 입력이 실패한다면 EOF가 리턴된다.