# 리눅스 링크 파일

- 링크 파일 : 리눅스에서 윈도우의 바로가기와 같은 역할을 한다.
  - Symbolic Link : 별도의 파일을 만들어서 어떤 파일을 가리킨다.
  - Hard Link : 어느 파일의 별칭을 만든다. (용량, 생성일 같음)
  - 명령어 : ln [OPTION] target linkname
    - Option에 -s가 붙으면 Symbolic Link, 붙지 않으면 Hard Link 생성
- 리눅스는 명령어를 입력했을 때 리눅스 기본 명령어가 아니거나 PATH 환경 변수에서 실행 파일을 찾지 못하면 오류가 난다.
- 링크 파일을 이용한 실행 파일 Resolving
  - PATH에 있는 경로 중에 하나를 택해서 그곳에 실행 파일의 Symbolic Link를 만들면 어느 곳에서든 실행 가능하다.