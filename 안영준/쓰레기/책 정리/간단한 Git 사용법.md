#  간단한 Git 사용법

### 첫 저장소 만들기

일반적인 상호아을 만들기 위하여 ~/public_html 디렉터리에 개인 웺 ㅏ이트를 위한 저장소를 만든 후 이 저장소 git 저장소에 배치해보자.

없을경우

mkdir ~/public_html 

cd ~/public_html 

echo 'hello' > index.html

~/public_html 또는 어떤 디렉토리를 Git 저장소로 전환하려면

git init 을 실행하면된다.



git에서는 완전히 비어있든 디렉토리이든 아니든 큰 상관이없다.

어느 경우라도 디렉토리를 git 저장소로 변환하는 과정은 동일하기 때문이다.

(해당 디렉터리가 git저장소임을 나타내기 위해 git init 명령어는 프로젝트의 최상위 레벨에 git이라는 숨겨진 디렉토리를 만든다.

CVS와 SVN이라는 리비전 정보를 CAS에 저장하고 각각의 프로젝트 디렉터리 내에 .svn 하위 디렉터리를 생성하는 반면 Git에서는 모든 리비전 정보를 최상위 레벨 디렉터리 .git에 저장한다.)



~/public_html  디렉터리 내의 모든 콘텐츠는 그대로 유지된다. git에서는 이 디렉터리를 프로젝트의 작업 디렉터리로 간주하고 .git 내에 숨겨져 있는 저장소는 git에 의해 관리된다.



#### 저장소 파일 추하기

git init 명령으로 새로운 git 저장소를 만들어진다.

여기에 git add file 을 사용하여 file을 저장소에 추가하면된다.



add를 실행한 후 파일은 저장소에 그대로 남아있게 된다.

여기서 git status를 실행하면 중간 상태에 있는것을 확인할 수 있다.



g각 커밋마다 로그 메세지와 변경한 사람을 포함한 여러 가지 메타데이터를 기록한다.

git commit -m "" \ --author = ""



git commit 가 실행되는 동안 좋아하는 편집기가 열리도록 GIT_EDITOR 환경 변수를 설정할수 있다

bash에서

export GIT_EDITOR = vim



#### 커밋 작성자 구성하기

git config 명령을 통하여 구성 파일에 사용자 정보를 저장해 놓으면  편리하다.

git config user.name "ahn"

git config user.email "ahn@naver.com"

또는 GIT_AUTHOR_NAME 및 GIT_AUTHOR_EMAIL 환경 변수를 사용하여 사용자의 이름과 이메일 주소를 설정할 수 있다.