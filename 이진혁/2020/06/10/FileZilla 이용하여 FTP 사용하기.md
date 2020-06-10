## FileZilla 이용하여 FTP 사용하기

FTP 통신을 사용하면 원격으로 내 우분투 서버에 접속해서 파일을 업로드 및 다운로드할 수 있다.
FTP 통신을 하기 위해서는 FTP 통신을 도와주는 FileZilla를 사용할 수 있다.

<img src="./img/FileZillaImage.png" alt="FileZilla" style="zoom: 33%;float:left" /> FileZilla는 FTP뿐만이 아니라 SFTP, Telnet, SSL, TLS과 같은 통신을 지원하는 플랫폼이다.
 FileZilla(파일질라)는 클라이언트와 서버로 나누어져 있다.
 Windows에서는 https://filezilla-project.org/download.php?type=server에서
파일질라 서버 버전을 다운로드할 수 있다.

### 1. FileZilla 다운로드하기

기본적으로 파일질라는 다음의 주소에서 다운로드 받을 수 있다.

```filezilla
https://filezilla-project.org/download.php?type=server
```

<img src="./img/FileZilla_Download.jpg" alt="FileZillaDownload" style="float:left;" />이 버튼을 클릭하면 다운로드를 받을 수 있다.
하지만 나는 이런식으로 다운로드 받지 않고 구글에 'FileZilla'라고 쳤을 때
나오는 softonic 사이트에서 다운로드를 받았다.

### 2. FileZilla 설정하기

파일질라를 다운로드 받고 실행시켜보면  호스트, 사용자명, 비밀번호, 포트를 작성해야하는 창이 상단에 뜬다.

- 호스트 : 내가 사용하는 가상환경(VMware, VirtualBox)의 공인 IP 주소를 작성한다.
- 사용자명 : 우분투서버에서 사용하는 내 사용자명을 작성한다.
- 비밀번호 : 우분투서버에서 사용하는 비밀번호를 작성한다.
- 포트 : 사용하고 싶은 FTP, SFTP, SSL에 따른 포트번호를 작성한다.
             하지만 포트번호는 알아서 사용할 수 있도록 비워두어도 알아서 찾아 사용한다.

사용자명, 비밀번호, 포트는 내가 알아서 작성할 수 있지만 호스트를 알아내기 위해서는
우분투 서버에서 ifconfig 명령을 이용하면 우분투 서버의 사설IP와 공인IP를 알아낼 수 있다.
하지만 VirtualBox에서 VMware로 데이터를 옮겼을 경우 공인IP가 설정되어 있지 않는 경우가 있다.
그래서 공인 IP를 수동으로 설정하는 방법에 대해서 알아보도록하자.

### 3. 수동으로 공인 IP 설정하기

아마 공인 IP가 설정되어 있지 않을 경우 사설 IP만 뜨게 된다.
이럴 때는 vim 에디터를 이용하여 공인 IP를 설정하는 곳에 가서 설정을 변경해야 한다.
이는 우분투 20.04 버전 기준으로 다음과 같이 명령을 내리면 된다.

```ubuntu
sudo vi /etc/netplan/50-cloud-init.yaml
```

vim을 켰다면 다음과 같이 작성하고 ESC + :wq를 이용하여 vim을 빠져나온다.

```ubuntu
network:
	ethernets:
		ens33:
			dhcp4: true
	version: 2
```

그리고 VMware를 종료했다가 다시 로그인 하면되는데
VMware를 끄기 싫다면 다음과 같은 명령으로 설정 정보를 갱신할 수 있다.

```ubuntu
sudo netplan apply
```

이런 다음 다시 ifconfig 명령어를 작성하면 ens33이 뜨는 것을 볼 수 있다.

그리고 FileZilla에 다시 들어가서 호스트 주소를 똑같이 작성하면 된다.