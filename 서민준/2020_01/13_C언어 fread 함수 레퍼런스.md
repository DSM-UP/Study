# C언어 fread 함수 레퍼런스 정리

**출처**  
모두의 코드 \ C Reference \ stdio.h \ fread  
URL : https://modoocode.com/68  
  
## fread
  
    #include <stdio.h>

    size_t fread(void* ptr, size_t size, size_t, count, FILE* stream);

스트림에서 데이터 블록을 읽어옵니다.  
  
스트림에서 count개의 원소를 가지는 배열을 읽어옵니다. 이 때, 각 원소의 크기는 size 바이트이고 ptr이 가리키는 배열에 넣게 됩니다.  
  
스트림의 위치 표시자는 읽어들인 바이트 수 만큼 증가하게 됩니다. 전체 읽어들인 바이트 수는 만일 성공적일 경우, (size * count)가 됩니다.  
  
## 인자
  
- ptr
  
    - size * count의 크기를 가지는 배열을 가리키는 포인터
  
- size
  
    - 읽어들일 원소의 크기로 단위는 바이트이다. 예를 들어 size가 4이면 하나의 원소의 크기는 4 바이트 임을 일컫는다.
  
- count
  
    - 읽어들일 원소들의 개수로 각 원소의 크기는 size 바이트이다.
  
- stream
  
    - 데이터를 입력받을 스트림의 FILE 객체를 가리키는 포인터
  
## 리턴값
  
만일 성공적으로 지정한 원소의 개수 만큼 읽어들였다면 읽어들인 원소의 개수가 size_t 형으로 리턴된다.  
  
만일 읽어들인 개수가 count 인자에서 지정한 것과 다르거나, End Of File에 도달하였다면 오류가 발생한다. 이 때, ferror 함수나 feof 함수를 이용하여 어떠한 오류인지를 파악할 수 있다.