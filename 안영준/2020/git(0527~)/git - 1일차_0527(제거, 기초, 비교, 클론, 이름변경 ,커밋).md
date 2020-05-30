## git - 1일차



$git = 하위 명령어 나열

$git --version = git 명령어 버전 번호



git 명령어는 짧고, 긴 옵션 모두 이해가능

ex) git commit -m == git commit --message

순수 이중 대시 규칙 = 옵션과 인수 목록 구분할수 있음

파일 이름을 따로 분리해서 정호가하게 표현 가능 

ex) 

git checkout main.c <- main.c라는 태그를 체크아웃

git checkout -- main.c <- main.c라는 파일을 체크아웃



giit add (원하는 파일)



git satatus = 추가된 거 보임

git commit 원하는 파일 <- 원래 이름도 추가해야됨 

ex) git commit -m "원하는 파일"

 git log = 저장소 내에 있는 커밋들 시간순으로 보여줌. = git show 

git show-branch --more=10 <- 최대 10개의 버전을 표시하도록 지정하는 옵션



git diff = 커밋 차이점 보기

git diff 설명 = https://blog.outsider.ne.kr/1011

--word-diff  = `--color-words` 대신 `--word-diff`옵션을 사용하면 다음과 같이 지워지고 추가된 단어를 좀 더 명시적(?)으로 표시한다.

diff-highlight = 이건 바뀐 부분 불들어옴 

등등있음



git diff 첫번쨰 \두번째 = 두개 비교



저장소에 있는 파일을 제거하고 이름 바꾸기



git rm = 파일을 제거할 예정이므로 변경 준비하는 단계(커밋하면 삭제됨,

디스크에는 파일을 남겨두고 Git 저장소에서만 파일을 삭제하고 싶은 경우에는 --cached 옵션을 사용하여 삭제함 이때 파일을볼경우 추적되지않는파일추가됨)

그 담에는 git commit 명령에서 변경 사항이 저장소에 실제 적용됨 

git rm 원하는거

git commit - m "바꿀 이름"



외에 add 이용 ex)

mv 원본.html 변하는거.html

git rm 원본

git add 변하는거



이 외에도 git mv 사용한 ex)

git mv 원래 변하는거

git commit -m "파일명 변할거"

위와같음(add 이용)

이외에도 git mv명령을 사용하면 빠르고 직접으로 바꿀수 있음.

git mv =먼저 실행해야됨, 그렇지 않으면 git rm명령으로 인해 영구적으로 삭제되기 떄문

git clone 원본 바꿀거  = 똑같지만 ls -lsa 로 확인해보면 시간이  다르다는걸 알수 있음(복제된 시간으로 표시됨, diff -r 은 잘 모르겠음) 