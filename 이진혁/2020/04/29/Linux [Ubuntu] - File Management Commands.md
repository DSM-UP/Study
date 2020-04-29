## Linux [Ubuntu] - File Management Commands

- 보안 프로그래밍 시간에 VirtualBox라는 프로그램을 이용하여 Linux[Ubuntu]를 설치하고
  파일 관리 명령어들을 사용해보았다.
- 파일 관리 명령어들을 알아보기 전에 파일 경로를 순회할 수 있는 명령어를 알아야 한다.

#### 1. 파일 경로 순회 명령어

- 파일 경로를 순회하는 명령어는 cd, pwd, ls가 있다.

  ##### 1-1. cd[Change Directory]

  - cd 명령어는 명령어가 실행되는 디렉토리상의 물리적인 위치를 바꿉니다.
    다음과 같이 사용할 수 있습니다.

    ```ubuntu
    사용자명@서버명:~$ cd /
    사용자명@서버명:/$
    ```

  - cd /는 리눅스 파일 구조의 루트 경로의 파일 경로입니다.
    cd 뒤에는 절대 경로와 상대 경로를 사용할 수 있는데
    절대 경로로 작성하면 /home/jinhyeok 디렉토리로 가고 싶다면
    /home/jinhyeok 과 같이 모든 파일 경로를 써주어야 합니다.
    상대 경로로 작성하면 내가 루트 경로에 있다면
    ./home/jinhyeok
    내가 home 디렉토리에 있다면
    ./jinhyeok
    과 같이 사용할 수 있습니다.

  - 그리고 $앞에 ~나 /와 같은 기호가 존재합니다.
    저런 기호들을 cd 뒤에 치게 되면 그 디렉토리로 바로 넘어갈 수 있습니다.

    ```ubuntu
    사용자명@서버명:/$ cd ~
    사용자명@서버명:~$ pwd
    /home/jinhyeok
    ```

  ##### 1-2. pwd[Print Working Directory]

  - pwd 명령어는 명령어가 실행되는 위치를 출력합니다.
    따라서 내가 어느 디렉토리에 있느냐에 따라서 다른 출력을 보여줍니다.
    내가 만약 루트에 있다면 다음과 같은 결과를 보여줍니다.

    ```ubuntu
    사용자명@서버명:/$ pwd
    /
    ```

    내가 만약 home에 있다면 다음과 같은 결과를 보여줍니다.

    ```ubuntu
    사용자명@서버명:/home$ pwd
    /home
    ```

    내가 만약 jinhyeok 디렉토리에 있다면 다음과 같은 결과를 보여줍니다.

    ```ubuntu
    사용자명@서버명:~$ pwd
    /home/jinhyeok
    ```

  ##### 1-3. ls[List]

  - ls 명령어는 현재 디렉토리의 파일들을 보여줍니다.
    (리눅스에서는 디렉토리를 디렉토리 파일이라고 부르고 디렉토리는 파일의 종류입니다.)
    (물론 원래 생각하던 파일도 존재합니다. txt파일 등등)

  - /home 디렉토리에서 ls 명령어를 사용하면 다음과 같이 출력됩니다.

    ```ubuntu
    사용자명@서버명:/home$ ls
    jinhyeok
    ```

  - ls 뒤에 옵션을 붙일 수 있는데 -l(long) 옵션을 붙이면 파일의 내용이 더 상세하게 보여집니다.

    ```ubuntu
    사용자명@서버명:/home$ ls -l
    d ~~~~블라블라~~~~~ jinhyeok
    ```

    여기서 앞에 d는 디렉토리를 뜻합니다.

  ##### 1-4 clear

  - clear 명령어는 shell 창을 깨끗하게 지워주는 작업을 합니다.
    추가로 알아야 할 것이라서 적어보았습니다.

#### 2. 파일 관리 명령어

- 이렇게 파일 경로 순회 명령어에 대해서 배워보았고 이제 본격적으로 파일 관리 명령어에 대해서 배워보겠다.
  파일 관리 명령어에는 mkdir, rmdir, touch, mv, rm, cp가 있다.

  ##### 2-1. mkdir[Make Directory]

  - mkdir 명령어는 말 그대로 디렉토리를 생성하는 명령어이다.
    사용하는 방법은 mkdir 뒤에 디렉토리의 이름을 적으면 된다.

    ```ubuntu
    사용자명@서버명:/$ cd ~
    사용자명@서버명:~$ mkdir workspace
    사용자명@서버명:~$ mkdir homework
    사용자명@서버명:~$ ls
    workspace homework
    ```

  ##### 2-2. rmdir[Remove Directory]

  - rmdir 명령어는 Remove Directory 의 약자로서 디렉토리를 삭제하는 명령어이다.
    하지만 rmdir 명령어는 삭제하고자하는 디렉토리 내부에 아무 파일도 없어야 한다.

    ```ubuntu
    사용자명@서버명:~$ rmdir workspace
    사용자명@서버명:~$ ls
    homework
    ```

  ##### 2-3. touch

  - touch 명령어는 파일을 생성하는 명령어이다.
    여기서 파일이란 원래 우리가 알고 있던 디렉토리 안에 들어가는 파일이 맞다.
    확장자도 같이 적어주면 그 확장자로 고정이 된다.
    만약 적지 않아도 파일로 생성된다.

    ```ubuntu
    사용자명@서버명:~$ cd homework
    사용자명@서버명:~/workspace$ touch Test.txt
    사용자명@서버명:~/workspace$ touch Test.java
    사용자명@서버명:~/workspace$ ls
    Test.txt Test.java
    ```

  ##### 2-4. mv[Move]

  - mv 명령어는 파일을 이동시키거나 파일을 변경하는 명령어이다.
    파일을 이동시킬 때는 mv 뒤에 이동시킬 파일 및 디렉토리를 적고 그 뒤에 이동시킬 경로를 적는다.

    ```ubuntu
    사용자명@서버명:~/workspace$ mv touch Test.txt ~
    사용자명@서버명:~/workspace$ ls
    Test.java
    ```

  - mv 명령어를 통해 파일의 이름을 변경하고자 한다면
    mv 뒤에 파일이름을 변경하고자하는 파일이름을 적고 그 뒤에 새로운 이름을 적는다.

    ```ubuntu
    사용자명@서버명:~/workspace$ mv Test.java Java.java
    사용자명@서버명:~/workspace$ ls
    Java.java
    ```

  ##### 2-5. rm[Remove]

  - rm 명령어는 파일을 삭제하는 명령어이다.
    rmdir 명령어는 디렉토리를 삭제하는데 디렉토리 안에 아무것도 없어야만
    삭제할 수 있었다. 하지만 rm 명령어는 파일을 삭제하는 기능도 있지만
    디렉토리에 사용하면 디렉토리 안의 모든 파일까지 같이 삭제한다.
    물론 선택한 디렉토리도 삭제한다.

  - 그냥 rm만 사용하면 rmdir 처럼 안의 내용이 있다고 삭제할 수 없지만
    -r 옵션을 달아주면 자동으로 재귀적으로 삭제하게 되어 안의 파일부터 모두 삭제한다.

    ```ubuntu
    사용자명@서버명:~/workspace$ cd ../
    사용자명@서버명:~$ rm workspace
    사용자명@서버명:~$ ls
    
    ```

    이렇게 원래 있던 workspace 디렉토리와 그 안의 Java.java 도 사라졌다.

  - 하지만 이렇게 삭제하게 되면 어떤 파일이 삭제되는지 알 수 없어 무서울 수 있다.
    그래서 -ri 옵션을 지원한다. -ri 옵션을 사용하게 되면
    파일 하나하나를 삭제할 때 마다 삭제할 것인지 아닌지 물어본다.
    삭제할 것이라면 y를 입력하면 된다.

  ##### 2-6 cp[Copy]

  - cp 명령어는 파일을 복사하는 명령어이다. cp 뒤에 복사할 파일명과 복사받을 파일명을 적는다.

    ```ubuntu
    사용자명@서버명:~$ mkdir workspace
    사용자명@서버명:~$ cd workspace/
    사용자명@서버명:~/workspace$ touch Test.txt
    사용자명@서버명:~/workspace$ cp Test.txt Test.java
    사용자명@서버명:~/workspace$ ls
    Test.txt Test.java
    ```

    