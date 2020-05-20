### 프롬프트 변경하기 (PS1)



#### 프롬프트란?

* **프롬프트** : 사용자의 입력을 받을 준비를 나타내는 상태창.

* `cutyapple@server:~$` <- Default 값 

* `PS1` 이라는 변수에서 프롬프트를 저장하고 있다.



#### 프롬프트 변경법

* `PS1` 변수에다가 `=`을 이용하여 값을 넣어줄 수 있다.
* ex) `cutyapple@server:~$PS1="apple:"` (변경전)    `apple:`  (변경후)
* 그러나 이 경우, 재접속시 유지되지 않고 초기화된다. 



#### 프롬프트 스트링의 이스케이프 문자

* `\H `: hostname
* `\h`: the hostname  up to the first '.'
* `\d`: the date
* `\n`: newline
* `\r`: carriage return
* `\t`: the current time in 24-hour 
* `\T`: the current time in 12-hour