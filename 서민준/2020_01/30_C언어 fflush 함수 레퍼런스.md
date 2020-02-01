# C언어 fflush 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ fflush  
URL : https://modoocode.com/57  
  
## fflush
  
    #include <stdio.h>

    int fflush(FILE* stream);
  
스트림을 비운다.  
  
만일 함수의 인자로 전달된 스트림이 쓰기 가능하고, 마지막 입출력 작업이 출력 작업이였다면 출력 버퍼에 쓰이지 않고 남아 있던 데이터들을 모두 파일에 쓰게 된다.  
  
만일 함수의 인자로 전달된 스트림이 읽기 가능하고 마지막 입출력 작업이 입력 작업이었다면, 이 함수가 **어떠한 작업을 할 지는 라이브러리에 따라 다르다.** 몇몇 라이브러리에서는 입력 버퍼를 비워버리지만 (이 때 비운다는 것은 버퍼에 있는 데이터들을 모두 삭제한다는 뜻이다) 이는 **표준으로 정해진 것이 아니다.**  
  
만일 인자가 NULL 포인터라면 모든 열린 스트림을 비운다.  
  
이 함수 호출 이후에도 스트림은 열려 있는 상태로 남아있다.  
  
만일 파일이 fclose를 호출하건 프로그램이 종료되건 어떤 연유에서든지 닫히게 된다면, 이 파일에 해당하는 모든 버퍼들은 자동적으로 비워지게 된다.  
  
## 인자
  
### stream
  
작업을 수행할 buffered (스트림의 상태 중 하나로 fully buffered와 line buffered를 일컫는다.) 스트림의 파일 객체를 가리키는 포인터  
  
## 리턴값
  
0이 리턴되면 성공적으로 작동되었음을 의미한다. 오류가 발생하면 EOF가 리턴되고 오류 표시자가 설정된다.  
  
## 실행 예제
  
    // 예제 출처 : http://www.cplusplus.com/reference/clibrary/cstdio/fflush
    // 약간의 수정을 거쳤습니다.

    #include <stdio.h>

    int main()
    {
        FILE* pFile;
        char myBuffer[80]; // 사용자정의 버퍼

        pFile = fopen("fflush.txt", "r+");
        
        if (!pFile)
            perror("Error opening file");
        else
        {
            fputs("test", pFile);
            fflush(pFile); // 버퍼에 있는 모든 데이터를 파일 스트림에 보낸다.

            fgets(mybuffer, 80, pFile); // 파일 위치 지정자가 이미 "test"의 뒤에 있으므로 읽을 수 있는 것이 없다.
            puts(mybuffer);
            
            fclose(pFile);
        }

        return 0;
    }
  
실제로 실행시켜보면 콘솔창에는 아무것도 출력되지 않는다. (puts 함수에 의해 개행이 되기는 한다.) 파일에는 "test" 문자열이 출력된다.