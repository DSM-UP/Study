## Run Level[런 레벨]

리눅스의 Run Level은 리눅스의 시스템의 실행을 단계별로 구분해놓은 것으로서,
각각 적용할 수 있도록 도와주는 역할을 합니다.
따라서 각각의 런 레벨을 각각 실행시킬 수 있게 지원합니다.

### 1. Run Level

각각의 런 레벨이 뜻하는 것은 다음과 같습니다.

```Linux
Run Level 0	: Halt
Run Level 1 : Single User Mode
Run Level 2 : Multi User Mode
Run Level 3 : Full Multi User Mode
Run Level 4 : Unused
Run Level 5 : X11
Run Level 6 : Reboot
```

#### 1-1. Run Level 0 - Halt

Run Level 0는 시스템을 종료하는 명령으로서 대부분의 리눅스에서 같게 적용됩니다.
/etc/rc0.d 파일 안에 존재하는 링크 파일들을 보면 다음과 같습니다.

```Linux
K01atd					K01irqbalance		K01multipath-toos	K01plymouth
K01unattended-upgrades	K01cryptdisks		K01iscsid			K01open-iscsi
K01rsyslog				K01uuidd			K01cryptdisks-early	K01lvm2-lvmpolld	K01open-vm-tools		K01udev
```

이 많은 링크 파일들의 맨 앞을 모면 K가 붙어있는 것을 볼 수 있다.
이 K는 Kill의 약자로서, 이러한 데이터들을 제거한다는 뜻이다.
여기있는 데이터들을 모두 리눅스를 최초 실행할 때 필요한 데이터들이며
Run Level 0는 시스템을 종료하는 명령이기 때문에 모든 파일을 삭제하기 위해서 이렇다.

뒤의 01은 일련번호를 말하는데 이 일련번호는 실행하는 우선순위와 관련이 있다.
만약 K01udev를 가장 마지막에 실행하고 싶다면 이 일련번호를 02로 바꾸면 된다.

#### 1-2. Run Level 1 - Single User Mode

Run Level 1은 일반적인 부팅 모드가 아닌 시스템을 복원하는 복원모드라고 많이 불립니다.
/etc/rc1.d 파일 안에 존재하는 링크 파일들을 보면 다음과 같습니다.

```Linux
K01atd			K01iscsid			K01multipath-tools	K01open-vm-tools	K01ufw
K01irqbalance	K01lvm2-lvmpolld	K01open-iscsi		K01rsyslog			K01uuidd
```

복원모드는 시스템에 문제가 없는지 시스템 파일에 문제가 없는지 체크하고 그것을 해결하기 위해서
데이터를 보존하면서 처리하는 모드를 말합니다.

그런데 복원모드에서 왜 Kill을 의미하는 K라는 링크 파일이름을 달고 나왔을까요?
그것은 복원모드에서 문제가 되는 시스템 파일을 파악하고 변경하기 위해서
시스템 파일을 종료하여 안전하게 변경하는 것이기 때문입니다.

#### 1-3. Run Level 2 - Multi User Mode

Run Level 2는 형식적으로는 Network File System(NFS)을 지원하지 않는 다중 사용자 모드입니다.
하지만 통상적으로 Run Level 3와 같게 사용됩니다.
따라서 /etc/rc2.d 파일 안의 링크 파일들을 보면 후에 볼 Run Level 3의 링크 파일과 같다는 것을 알 수 있습니다.

```Linux
S01apport			So1cron					S01irqbalance		S01open-vm-tools
S01rsyslog			S01atd					S01dbus				S01lvm2-lvmpolld
S01plymouth			S01unattended-upgrades	S01console-setup.sh	S01grub-common
S01multpath-tools	S01rsync				S01uuidd
```

이에 대한 설명은 Run Level 3에서 하도록 하겠습니다.

#### 1-4. Run Level 3 - Full Multi User Mode

Run Level 3는 기본적/통상적으로 리눅스를 일반 실행했을 때의 모드라고 생각하면된다.
깊게 얘기하면 NFS를 지원하는 텍스트 유저 모드라고 할 수 있다.
/etc/rc3.d 파일 안의 링크 파일들을 살펴보면 다음과 같습니다.

```Linux
S01apport			So1cron					S01irqbalance		S01open-vm-tools
S01rsyslog			S01atd					S01dbus				S01lvm2-lvmpolld
S01plymouth			S01unattended-upgrades	S01console-setup.sh	S01grub-common
S01multpath-tools	S01rsync				S01uuidd
```

이렇게 /etc/rc2.d 파일 안의 링크 파일과 동일하다는 것을 알 수 있습니다.
이렇게 Run Level 2, 3, 4, 5는 다 같은 링크 파일을 가지고 있으며 종료하는 0번과 다시 시작하는 6번,
일반적인 시작을 하는 3번, 안전모드로 시작하는 1번을 제외하고는 잘 쓰이지 않습니다.

그리고 링크 파일의 S는 Start의 약자입니다.
따라서 이 Run Level이 실행될 때 저 파일들이 모두 실행된다는 뜻입니다.
그 뒤의 일련번호는 위에서 말했던 것과 마찬가지로 우선순위를 뜻합니다.

#### 1-5. Run Level 4 - Unused

Run Level 4는 일반적으로 사용되지 않습니다.
하지만 임의로 내가 사용자지정으로 Run Level을 구성하여 만들 수 있는 테스트 공간이라고 보면 될 것 같습니다.

#### 1-6. Run Level 5 - X11

Run Level 3 단계와 마찬가지로 일반적인 실행 방법이지만 그래픽 유저 모드로 실행한다는 차이점이 있습니다.

#### 1-7. Run Level 6 - Reboot

Run Level 6는 리부트를 시킵니다.
/etc/rc6.d 파일 안의 링크 파일들을 살펴보면 다음과 같습니다.

```Linux
K01atd					K01irqbalance		K01multipath-toos	K01plymouth
K01unattended-upgrades	K01cryptdisks		K01iscsid			K01open-iscsi
K01rsyslog				K01uuidd			K01cryptdisks-early	K01lvm2-lvmpolld	K01open-vm-tools		K01udev
```

링크 파일을 보면 Run Level 0 이랑 링크 파일이 같다는 것을알 수 있습니다.
사실 강제 종료하는 것과 리부트하는 것이 사실상 종료하다는 점에서 같기 때문에 그렇습니다.

#### 1-8. Run Level 실행하기

Run Level 0 ~ Run Level 6까지 있는 런 레벨을 실행시킬 수 있는 방법은 그에 맞는
/etc/rcN.d 디렉토리 안에서
init N 명령어를 실행하면 됩니다.
물론 관리자 권한이 필요하기 때문에 sudo를 붙여주어야 합니다.

### 2. 명령어로 Run Level 쉽게 다루기

위에서 init 명령어를 이용해서 Run Level 0 부터 Run Level 6 까지 사용할 수 있다는 것을 알게 되었습니다.
하지만 init 명령어를 사용하기 위해서는 /etc/rcN.d 디렉토리에 들어가서
sudo 명령어를 사용해야한다는 귀찮은 점이 존재합니다.
이렇게 귀찮은 명령어를 가만히 두지 않은
리눅스는 shutdown, reboot, halt, poweroff와 같은 명령어를 지원합니다.

#### 2-1. shutdown

shutdown 명령어는 이름에서 알 수 있듯이 시스템을 종료시키는 명령어입니다.
하지만 reboot의 기능도 사용할 수 있습니다.
shutdown의 기본 문법은 다음과 같습니다.

```Linux
shutdown [속성] [시간] [메세지]
```

[시간] 속성은 반드시 작성해야하지만 [속성]은 없으면 -h로 디폴트 적용되고
[메세지]는 없으면 디폴트 경고 메세지로 적용됩니다.

기본적으로 shutdown 명령어는 [메세지] 라는 경고메세지를 모두에게 보내고
[시간] 시간 뒤에 [속성]에 포함된 종료 및 재부팅을 합니다.

shutdown의 [속성]에 들어갈 수 있는 속성은 다음과 같습니다.

```Linux
-h		종료
-r		재시작
-P		강제 종료
-c		명령 취소
-k		페이크
```

##### 1) -h

기본적으로 속성을 적어주지 않으면 -h 속성이 되어 종료가 됩니다.
일반적인 종료이기 때문에 사용한다면 많이 사용하게 됩니다.

##### 2) -r

-h는 종료를 시키는 반면에 -r은 재부팅을 시킵니다.
별로 다른 점은 없습니다.

##### 3) -P

대문자 P가 맞으며, -h와는 다르게 불안정인 상태임에도 그냥 종료시켜버린다는 특징이 있습니다.
정상적인 작동을 하지 않을 때 사용하면 좋습니다.

##### 4) -c 

[시간] 시간 뒤에 종료 및 재부팅을 할 때 그 명령을 취소시키는 명령입니다.
잘못 입력했을 때 사용하는 명령어입니다.

##### 5) -k

이 명령어는 경고 메세지는 보내지만 실제로는 종료하지 않는 이상한 명령어입니다.
이 명령어는 종료를 독촉할 때, 혹은 회사에서 빨리 퇴근하라는 뜻으로 사용되기도 합니다.



[시간]을 설정할 때 참고하자면,
[시간]에는 +를 붙여서 보다 더 정확한 의미로 해석되게 만들 수 있습니다.
그리고 시간은 기본적으로 '분' 단위이며 now는 바로 실행하고
hh:mm 으로 사용할 수 있으며 이 방법을 쓸 경우 24시간 방식입니다.

#### 2-2. reboot

reboot 명령어는 shutdown에 비해 사용하는 방법이 간단합니다.

```Linux
reboot [속성]
```

하지만 다중 사용자의 경우 모두 종료시키지는 않고 자신만 종료하게 됩니다.
속성에는 다음과 같습니다.

##### 1) -p

-p 옵션을 사용하면 reboot 명령어로도 시스템을 종료만 시킬 수도 있습니다.

##### 2) 속성 없음

속성이 없을 경우에는 시스템을 즉시 재부팅하는 명령어가 됩니다.

##### 3) -f

-f 옵션을 사용하면 강제로 재부팅합니다.

#### 2-3. halt

halt 명령어는 옵션 없이 시스템을 즉시 종료시킵니다.

#### 2-4. poweroff

poweroff 명령어도 halt와 비슷하게 즉시 종료시키는 명령어입니다.