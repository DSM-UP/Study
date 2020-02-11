# C언어 ungetc 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ ungetc  
URL : https://modoocode.com/49  
  
## ungetc
  
    #include <stdio.h>

    int ungetc(int c, FILE* stream);
  
스트림에 문자를 다시 집어 넣는다.  
  
스트림에 마지막으로 문자가 읽어들여졌던 자리에 문자(c)가 말 그대로 들어가고, 파일 위치 표시자가 감소하여 이전 위치를 가리키게 된다. 따라서, 다음 읽기 작업에서는 방금 스트림에 집어 넣었던 문자가 읽히게 된다.  
  
예를 들면,  
  
    FILE* fp = fopen("ungetcEx.txt", "r");
    char ch;

    getc(fp);
    getc(fp);
    ungetc('a', fp);
    ch = getc(fp);
  
을 한다면 ungetcEx.txt에 무엇이 들어있던 간에 ch에는 a가 들어가게 된다. 왜냐하면 ungetc를 실행하기 직전에 위치 표시자의 값은 2였다.  
  
그런데 ungetc를 호출함으로써 위치 표시자의 값은 1이 되고, 그 자리에 a가 써지게 된다.  
  
그 후 getc 함수를 호출하면 현재 파일 위치 표시자의 문자를 리턴하는데, 여기서 위치 표시자의 값은 1이고 그 자리에 a가 있으므로 결과적으로 ch에는 a가 들어간다. **물론, a가 써진다는 말은 파일에 실질적으로 a가 기록되는 것이 아니라 버퍼에 써지는 것**이다.  
  
ungetc 함수를 여러번 호출하게 되면 차후 읽기작업에서 호출된 역순으로 출력된다. 예를 들어,  
  
    ungetc('b', fp);
    ungetc('c', fp);

    ch = getc(fp); // ch에는 c 가 들어간다.
    ch = getc(fp); // ch에는 b 가 들어간다.
  
주의할 점은 ungetc 함수를 여러번 호출하여서 중간에 파일 위치 표시자의 값이 0이 된다면 그 이후에 호출된 ungetc 함수들은 모두 무시된다. 예를 들어,  
  
    fp = fopen("ungetcEx2.txt", "r");

    getc(fp); // 이 함수 호출 이후 위치 표시자의 값은 1
    ungetc('d', fp); // 이 함수 호출 이후 값은 0
    ungetc('e', fp); // 따라서 버퍼에 e 가 들어갈 수 없다.

    ch = getc(fp); // ch에는 d 가 들어간다.
    printf("%c \n", ch);
    ch = getc(fp); // ch에는 ungetcEx2.txt 의 두 번째 문자가 들어간다.
  
만일 EOF 표시자가 설정된 상태에서 이 함수를 호출하면 EOF 표시자는 초기화 된다.  
  
fseek나 fsetpos나 rewind 함수를 호출하면 이전에 ungetc 함수에 의해 들어갔었던 모든 문자들이 **모두 삭제**된다.  
  
만일 ungetc 함수의 c 인자로 전달된 값이 EOF 라면 입력 스트림에는 아무런 변화가 없게 된다.  
  
## 인자
  
### c
  
스트림에 집어 넣을 문자. 이 때, 문자는 int 로 형변환 되어 전달된다.  
  
### stream
  
문자를 넣을 입력 스트림의 FILE 객체를 가리키는 포인터  
  
## 리턴값
  
성공적으로 문자가 들어간다면 들어갔던 문자가 리턴된다. 실패한다면 EOF가 리턴되고 스트림에는 아무런 변화가 없게 된다.  
  
## 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstdio/ungetc
    // 약간의 수정을 가했습니다.

    #include <stdio.h>

    int main()
    {
        int c;
        char buffer[256];
        FILE* pFile = fopen("ungetc.txt", "rt");

        if (!pFile)
            perror("Error opening file");
        else
        {
            while (!feof(pFile))
            {
                c = getc(pFile);
                if (c == '#')
                    ungetc('@', pFile);
                else
                    ungetc(c, pFile);
                
                fgets(buffer, 255, pFile);
                fputs(buffer, stdout);
            }

            fclose(pFile);
        }

        return 0;
    }
  
**소스 해설**  
  
    c = getc(pFile);
    if (c == '#')
        ungetc('@', pFile);
    else
        ungetc(c, pFile);
  
일단 getc를 통해 pFile에서 문장의 첫 번째를 읽어온다. (왜냐하면 fgets 함수를 통해 개행 문자가 있을 때까지 읽어오기 때문이다.) 이때, 그 문자가 # 이라면 버퍼에서 현재 '#'가 들어 있는 위치에 @가 들어가게 된다. 따라서  
  
    fgets(buffer, 255, pFile);
    fputs(buffer, stdout);
  
를 하게 되면 buffer에는 @부터 '\n'이 나올 때 까지, 즉 한 문장의 끝까지 들어가게 된다.  
  
이때 주목할 점은 ungetc.txt의 내용은 전혀 바뀌지 않았다는 점이다. ungetc 함수는 단지 버퍼의 내용만을 조작하는 함수이므로 ungetc.txt의 # 들은 결코 @ 로 바뀌지 않는다.