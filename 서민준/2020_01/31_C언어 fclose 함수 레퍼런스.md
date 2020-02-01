# C언어 fclose 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ fclose  
URL : https://modoocode.com/54  
  
## fclose
  
    #include <stdio.h>

    int fclose(FILE* stream);
  
파일을 닫는다.  
  
인자로 지정한 스트림에 해당하는 파일을 닫는다.  
  
이 때, 그 스트림의 모든 버퍼들은 비워진다. 아직 파일에 쓰이지 않고 남아있던 버퍼의 내용물은 모두 파일에 쓰이고, 아직 읽히지 않고 남아있던 버퍼의 내용물은 모두 사라진다.  
  
호출이 실패하더라도 인자로 전달된 스트림과 이에 해당하는 파일의 관계는 끊어지게 된다.  
  
## 인자
  
- stream
  
파일을 닫을 스트림의 FILE 객체를 가리키는 포인터  
  
## 리턴값
  
스트림이 성공적으로 닫힌다면 0이 리턴된다. 실패할 경우 EOF가 리턴된다.  
  
## 실행 예제
  
    // 예제 출처 : http://www.cplusplus.com/reference/clibrary/cstdio/fclose
    // 약간의 수정을 가했습니다.

    #include <stdio.h>

    int main()
    {
        FILE* pFile;

        pFile = fopen("fclose.txt", "wt");
        fprintf(pFile, "fclose example");
        fclose(pFile);

        return 0;
    }
  
항상 파일을 fopen 등의 함수로 열었다면, 사용이 끝난 후 반드시 fclose 함수로 닫아줘야 한다. malloc과 free의 관계와 같다.