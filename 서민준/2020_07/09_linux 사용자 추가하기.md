## linux 사용자 관리하기

### 고전적 사용자 관리 명령

- useradd : 사용자 추가
- usermod : 사용자 변경
- userdel : 사용자 삭제

### useradd

#### 사용자 추가하기

`sudo useradd 사용자명`

사용자를 추가하는 명령어이다. 시스템에 새로운 정보를 추가하는 명령이므로 관리자 권한이 필요하다.

![useradd](https://user-images.githubusercontent.com/51042546/86977169-00834400-c1b7-11ea-853c-7ca812933c07.png)

다음과 같이 명령을 수행하면 오류는 나지 않는다. 다만, 실행 이후 아무런 반응이 없기 때문에 정말로 'newlec'이라는 사용자가 추가된 것인지 알 수 없다. 그걸 알 수 있는 방법은 다음과 같다.

#### /etc/passwd

해당 서버의 설정 내용들을 담고 있는 디렉터리인 /etc에 passwd라는 파일이 있다. 해당 파일에 해당 서버에 등록된 모든 사용자에 대한 정보가 기록되어 있다. 여기서 아까 추가한 newlec을 찾는 방법이 있다.

![etc_passwd](https://user-images.githubusercontent.com/51042546/86977350-61128100-c1b7-11ea-979e-bfef7d56d236.png)

사용자가 추가한 것을 확인할 수는 있지만 굉장히 많은 데이터가 출력되기 때문에 한 눈에 파악하기가 쉽지 않다.

보통 가장 최근에 등록한 순서일수록 가장 마지막에 기록된다. 이 점을 이용하여 `tail` 명령어를 통해 자신이 얻고자 하는 정보만을 얻을 수 있다.

![tail etc_passwd](https://user-images.githubusercontent.com/51042546/86977456-9ae38780-c1b7-11ea-8c5f-ff9a3d7f222f.png)

혹은 `grep` 명령어를 통해 해당 파일의 내용에서 자신이 추가한 사용자만을 검색하는 방법도 있다.

![grep /etc/passwd](https://user-images.githubusercontent.com/51042546/86977527-bcdd0a00-c1b7-11ea-82ce-c80f009a95c4.png)

#### 비밀번호 등록하기

`sudo passwd 사용자명`

해당 사용자에 대한 비밀번호를 등록할 수 있는 명령이다. 이번에는 단순히 명령을 알아보는 시간이기 때문에 0000으로 등록하겠다.

![sudo passwd user](https://user-images.githubusercontent.com/51042546/86977636-07f71d00-c1b8-11ea-8239-b14e18984215.png)

#### 한 터미널 내에서 사용자 변경하기

특정 virtualBox의 경우 복수 개의 터미널을 지원하는 경우도 있지만 원격 터미널인 Putty나 혹은 지원하지 않는 가상머신의 경우 한 터미널 내에서 사용자를 변경해야 하는데 이럴 때는 다음과 같은 명령을 사용할 수 있다.

`su - user`

`user`에 변경하고자 하는 사용자명을 입력하면 해당 사용자로 로그인을 시도한다.

![su - user](https://user-images.githubusercontent.com/51042546/86978248-607aea00-c1b9-11ea-8ba4-929f01609ef4.png)

그런데 아까 새로 만든 사용자로 로그인을 시도하면 home 디렉터리가 없다는 경고가 출력되면서 프롬포트가 $로 변경된다. 기본적으로 로그인하면 home 디렉터리로 가게 되는데 home 디렉터리가 없기 때문에 이런 경고가 출력되는 것이다.

useradd 명령의 경우 사용자를 등록하는 것과 home 디렉터리를 만드는 것을 별개로 해야 한다. 

#### 사용자가 추가된 group 확인하기

linux에서는 group 또한 굉장히 중요하게 작용한다. group에게만 부여되는 권한이 따로 있을 수 있기 때문이고, sudo 같은 특정 명령들은 해당 group에 속해있지 않으면 사용할 수 없기 때문이다.

`groups user`

해당 사용자가 속해있는 모든 group 정보를 표현한다.

![groups user](https://user-images.githubusercontent.com/51042546/86978027-d894e000-c1b8-11ea-8ad2-e4a4a83ba357.png)

현재 로그인 되어 있는 사용자의 id, 그룹 id, 속해있는 모든 그룹을 보고 싶다면 `id`를 입력하면 된다.

![id](https://user-images.githubusercontent.com/51042546/86978093-fbbf8f80-c1b8-11ea-9278-470ffed50720.png)

