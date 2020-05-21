# 프롬프트 변경하기
  
**출처**  
<a href = "https://youtu.be/yhnzrh_8zRY" target = "_blank">리눅스 강의 31강.Linux 프롬프트 변경하기 - 뉴렉처</a>  
  
프롬프트란 Ubuntu server에 진입하였을 때 `사용자명@서버이름`의 형태로 표현되어 있는 문자열을 말한다.  
  
	## Ex
	ubuntu@server:~$
  
이 문자열을 나타내기 위한 정보를 우분투 서버는 `PS1`이라는 변수에 저장하고 있다. PS는 prompt string의 약자이다.  
  
이 변수에 저장되어 있는 값을 변경하면 화면에 표시되는 프롬프트를 변경할 수 있다. 변경 방법은 다음과 같다.  
  
	PS1="문자열 :";
  
이렇게 하면 문자열에 전달한 문자열로 프롬프트가 변경된다. 이때, 문자열에 이스케이프 문자를 주어 특정한 형태를 사용하는 것도 가능하다. 사용할 수 있는 이스케이프 문자는 다음과 같다.  
  
escape 문자 | 의미
------------|------
\a | ASCII bell 문자 (07)
\d | "요일 월 날짜" 순으로 문자열을 삽입한다.
\e | 아스키 문자로 escape 문자이다. (033)
\H | 호스트 이름
\j | 이 쉘을 관리하고 있는 job의 수
\l | 이 쉘의 터미널 디바이스 이름의 basename
\n | 개행
\s | 이 쉘의 basename, $0의 basename
\t | 현재 시각
\u | 현재 사요자 이름
  
이 외에도 다양하다. (출처 : <a href = "https://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/bash-prompt-escape-sequences.html" target = "_blank">2.5. Bash Prompt Escape Sequences - tldp.org</a>)  
  
단, 이 변경은 프로필에 저장하지 않으면 일시적인 변경이기 때문에 재부팅하거나 로그아웃 후 다시 로그인하면 변경사항이 사라진다.  
