## 리눅스 vim 한글 설정

### 리눅스 vim 한글 설정

* 리눅스의 vim 에디터의 영어 환경의 일부를 한글로 전환한다.



### 한글 패키지 설치

```shell
sudo apt-get install language-pack-ko
```



### 시스템 언어 설정 변경

```shell
sudo locale-gen ko_KR.UTF-8

​``` 위의 명령어 실행 후, 아래의 명령어로 확인
​``` ko_KR.UTF-8만 #이 없다면 성공!
vi /etc/locale.gen
```



### 재부팅시 한글 설정할 수 있도록 `/etc/default/locale` 파일에 다음 설정 추가

```shell
LANG="ko_KR.UTF-8"
LANGUAGE="ko_KR:ko:en_US:en"
```



### `vim ~/.vimrc`

```shell
set encoding=utf-8
set fileencoding=utf-8,euckr
```



