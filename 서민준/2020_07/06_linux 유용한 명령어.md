## linux 유용한 명령어

### history

![history](https://user-images.githubusercontent.com/51042546/86550036-41dbdf80-bf7c-11ea-97ce-cb8b6ab65085.png)

`history`

지금까지 해당 계정으로 친 명령어들을 목록으로 보여줍니다.

이 명령어들은 위쪽 화살표를 통해 이전 명령들을 불러올 수 있습니다.

![history 3](https://user-images.githubusercontent.com/51042546/86550126-87001180-bf7c-11ea-9c97-6f5f35f42d5c.png)

다음은 `history` 명령을 쳤을 때 목록 중 3번에 해당되는 명령어이다.

![history number](https://user-images.githubusercontent.com/51042546/86550177-ad25b180-bf7c-11ea-881e-f8960cd0cb53.png)

다음과 같이 `!명령 번호` 꼴로 치게 되면 명령 번호에 해당하는 명령이 화면에 출력되면서 자동으로 해당 명령을 수행하게 된다.

### redirection

![history file write](https://user-images.githubusercontent.com/51042546/86550351-14436600-bf7d-11ea-9ed2-8a8a24a6d00a.png)

다음과 같이 `history` 명령의 결과를 `>` 연산자를 통해 파일에 담을 수 있다. 위 예제를 보면 실제로 `history` 명령의 결과가 test1에 기록된 것을 볼 수 있다.

`history` 명령 이외에도 다른 명령들에 모두 사용할 수 있으며 그 명령의 실행결과를 파일에 담게 된다. (ex : `echo "Hello" > test1`)

당연한 이야기지만 반대의 의미를 지니는 `<` 연산자도 존재한다.

이렇게 명령의 결과를 다른 곳으로 옮겨 버리는 기법을 **redirection**이라고 한다.

### piping

![hyperline](https://user-images.githubusercontent.com/51042546/86550649-ee6a9100-bf7d-11ea-9987-5ffceb3363db.png)

다음과 같이 `|`을 사용하게 되면 전 명령의 결과를 뒤에 오는 명령의 인자로 전달하게 된다.

이런 기법을 **piping**이라고 한다.

### less

![/bin ls](https://user-images.githubusercontent.com/51042546/86550842-705aba00-bf7e-11ea-87ba-3f57675872d0.png)

다음 경우, `/bin` 경로에서 `ls -l` 명령을 친 것 뿐인데 해당 디렉터리에 파일이 너무 많아 매우 많은 양의 정보가 화면에 출력되고 있다.

이럴 경우, 굉장히 많은 양을 출력해야하기 때문에 로딩에 어느 정도 시간이 걸리게 된다. 또한 한 눈에 파일 이름을 파악하기에도 좋지 않다.

그럴 때 사용하는 것이 바로 `less` 명령어이다.

![less](https://user-images.githubusercontent.com/51042546/86550957-c16aae00-bf7e-11ea-9985-66172e2d876c.png)

다음과 같이 해당 디렉터리 내에 있는 모든 파일의 이름을 단순히 텍스트로 변경하여 배열([ ])에 저장하여 화면에 보여준다.

양이 너무 많을 경우 화면에 다 보일 정도만 보여준다. 데이터는 위쪽 화살표나 아래쪽 화살표를 통해 스크롤하며 찾을 수 있다.

이 결과 화면에서 나가고 싶다면 `q`를 누르면 나갈 수 있다.

### sort

출력결과를 정렬할 때 사용하는 명령어이다.

![image-20200706115429711](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200706115429711.png)

기본적으로 `sort` 명령을 통해 정렬하게 되면 오름차순 정렬을 하게 된다.

만약 내림차순으로 정렬하고 싶다면 `r` 옵션을 주면 된다.

### more

파일을 읽어 화면에 화면 단위로 끊어서 출력하는 명령어이다.

이 명령은 위에서 아래로만 출력되기 때문에 지나간 내용을 다시 볼 수 없는 단점이 있다.

![image-20200716145806273](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200716145806273.png)

