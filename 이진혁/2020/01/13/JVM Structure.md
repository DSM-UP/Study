## JVM Structure

- JVM은 Java Virtual Machine의 약자로써 byte code를 실행할 수 있는 머신이다.
- JVM은 크게 세 가지로 나누어져 있고 그에 따른 부속적인 요소가 세 가지가 있다.
- 큰 세 가지는 아래와 같다.
  1. Class Loader
  2. Execution Engine
  3. Runtime Data Area
- 그럼 하나하나 알아보겠다.



### Class Loader

- Class Loader는 클래스 파일들을 로딩하여 Runtime Data Area로 적재하는 역할을 한다.
- 클래스 파일들을 로딩하는 것이니 Class Loader가 클래스 파일들을 만든다는 것이 아님을 유의하자.
- 은근히 JVM이 JAVA 코드를 컴파일 한다는 것으로 알고 있는 사람들이 많은데
  컴파일은 각각의 빌드도구가 알아서 할 일이고
  JVM 그 중에서도 Class Loader는 이미 컴파일되어서
  .java 파일에서 .class 파일로 변환된 byte code 즉, 클래스 파일을 이용해서 메모리에 적재하는 것이다.
- 이때 static initializer가 실행된다.



- 조금 더 깊게 들어가자면 Class Loader가 class들을 load하기 전에 class가 load되어 있는지 확인을 한다.
- 확인을 하는 이유는 이미 모든 class들이 load가 되어 있다면 또 load할 필요가 없기 때문이다.
- class가 load 되어 있는지 확인하기 위해서 class들의 이름을 확인하는데
  그 이름은 패키지를 포함한 전체 이름이다.
  따라서 com.javalec.ex 라는 package에 들어있는
  Test.class 파일을 loader할때 패키지와 이름을 모두 확인하기 때문에
  같은 이름이더라도 다른 패키지라면 그 모든 클래스가 존재하는지 확인한다.
- 또한 패키지, 이름뿐만 아니라 Class Loader의 이름도 확인을 한다.
- 쓰레드마다 각각의 Class Loader가 class를 load하는데
  각각의 Class Loader가 모든 클래스들을 load할 수 있도록 만들어 놓은 것 같다.
- 하지만 java 5부터 추가된 기능으로 각각의 쓰레드
  즉, 프로세스끼리 load된 class를 공유하는 기능을 가지게 되었다.



### Execution Engine

- Execution Engine은 변환된 byte code를 실행하는 주체라고 할 수 있다.
- Class Loader에 의해서 loading 된 class들은 모두 나중에 알게 될 Runtime Data Area에 존재하는데
  JVM이 byte code들을 Execution Engine에 넘겨줘서 그 class의 기능에 맞게 실행하도록하는 역할을 한다.

- Execution Engine이 byte code를 실행하는 방식에는 총 두 가지가 있다.
  1. Interpreter 방식
  2. Just In Time (JIT) 방식
- JVM 초기 버전에서는 interpreter 방식을 사용하여
  한 줄을 읽고 처리하고 한 줄을 읽고 처리하는 방식을 사용했었는데
  이것이 JVM을 느리게 하는 주요 원인이 되어서 이 방식을 포기하고 JIT 방식을 수용하게 되었다.
- JIT 방식은 Just In Time의 약자로써 느린 Interpreter 방식을 보완하여 등장하였다.
- JIT는 모든 byte code를 Native code로 변경하여 한 번에 처리하는 방법을 사용했는데
  이 방법은 한 번에 처리하는 만큼 그 시간 비용이 크다는 문제를 가지고 있었다.
- 그리고 Interpreter 방식은 반복문을 만나게 되면
  그 반복문을 계속 돌면서 한 줄 한 줄 해석해야 하지만
  JIT는 한 번에 Native code로 변경하기 때문에 상관 없었고
  이러한 반복문이 존재하지 않으면 Interpreter 방식이 더 빨랐기 때문에
  현재의 JVM은 Interpreter 방식을 사용하여
  byte code를 실행하다가 반복문의 일정 이상이 넘어가면 JIT 방식을 사용한다.



### Runtime Data Area

- Runtime Data Area에는 다섯 가지의 영역이 존재한다.
  1. Method Area
  2. Heap Area
  3. Stack Area
  4. PC Register
  5. Native Method Stack

#### 1. Method Area

- Method Area에는 아까 Class Loader가 class들을 load하여
  Runtime Data Area로 보낸다고 했는데
  그 보내는 곳이 이 Method Area 이다.
- Class는 Method와 Filed로 이루어져 있고
  이 Method Area에서는 Method의 이름, 접근제어지시자, 반환형, 매개변수, 그 안의 메소드 정보와
  Filed의 이름, 데이터 타입, 접근제어지시자 등을 저장한다.

#### 2. Heap Area

- Heap Area에는 C언어, C++과 같이 참조해야하는 것들을 모아놓은 영역이다.
- Java에서의 Heap Area는 new 키워드를 이용하여 만들어진 객체, 배열 등을 저장한다.
- 나중에 부속 기능으로 알려줄 Garbage Collector가 사용되는 공간이기도 하다.
- 여러 개의 쓰레드가 생겨도 하나의 Heap 영역만이 존재한다.

#### 3. Stack Area

- Stack Area도 C언어의 Stack 영역과 같은 역할을 하며 지역 변수, 파라미터, 리턴 값 등을 저장한다.
- Heap 영역에서는 참조형 변수가 가리키는 것들을 저장했다면 여기서는 참조형 변수를 저장한다.
- 그리고 쓰레드 마다 각각의 Stack Area를 가지고 있어서 여러 개의 Stack Area가 존재할 수 있다.

#### 4. PC Register

- PC Register는 컴퓨터에 존재하는 레지스터 즉, CPU의 레지스터라는 말이 **아니다**.
- 각각의 쓰레드마다 다음에 실행될 쓰레드의 주소를 저장하고 있는
  일종의 Program Counter와 같은 역할을 한다.
- 각각의 쓰레드마다 다음에 실행될 쓰레드는 다르므로 각각의 쓰레드 마다 하나씩 존재한다.
- PC Register가 존재하기에 쓰레드끼리의 전환이 존재할 수 있다.

#### 5. Native Method Stack

- Native Method Stack은 자바를 제외한 다른 언어로 작성된 코드들을 위한 메모리 공간이라고 할 수 있다.
- 자바를 제외한 다른 언어로 작성된 코드가 존재하는 이유는
  나중에 소개할 부속 기능에 대해 설명할 때 하도록 하겠다.





- 부속적인 요소 세 가지는 아래와 같다.
  1. Garbage Collector
  2. Native Method Libraries
  3. Native Method Interface

### Garbage Collector

- 쉽게 GC라고도 한다.
- Garbage Collector는 아까 말했던 것처럼 Heap Area에서 작동한다.
- Heap Area에는 참조될 수 있는 변수들을 저장하는데
  이 참조될 수 있는 변수들은 참조되지 않으면 아무 쓸모가 없으므로
  참조되지 않는 변수들을 알아서 제거하는 역할을 한다.
- C언어나 C++에서는 각각 free, delete라는 명령이 존재하지만
  java에서는 이러한 명령이 없는 이유가 바로 Garbage Collector가 존재하기 때문이다.
- Garbage Collector는 참조를 하지 않는다고 해서 바로 없애버리지 않고 그 시간이 불규칙적이다.
- 그리고 Garbage Collector는 치명적인 단점이 존재하는데
  Garbage Collector가 실행되는 동안 Garbage Collector를 실행하는 쓰레드를 제외하고
  모든 쓰레드를 일시정지 시킨다.
- 따라서 엄청나게 많은 양의 참조를 제거하려 할때 이러면 프로그램에서 장애가 발생할 확률이 높다.

### Native Method Libraries

- Native Method Libraries는 Native Method Stack에서 얘기했던 것처럼
  자바를 제외한 다른 언어에 관한 곳이다.
- 이것을 말하기 전에 먼저 JVM에 대해서 말해야 한다.
- JVM은 모든 운영체에 대해서 호환할 수 있도록 각각에 따른 JVM에 각기 존재한다.
- 하지만 모든 운영체제를 호환할 수 있는 만큼 운영체제의 특이한 점을 지원하지 않는다는 단점을 가지고 있다.
- 따라서 다른 언어를 이용해서 단점을 극복하기 위해서 필요한 것이 이 Native 공간들이다.
- 근데 왜 이름이 Native일까?
- 이것은 운영체제와 같이 밑단에 대한 것을 다룰 때에는
  low레벨의 언어들의 도움이 필요한데
  대부분 그것들이 C, C++과 같은 Native 언어들이기 때문이다.

- 일단 결론적으로 Native Method Libraries는
  Native Language의 코드 즉, 라이브러리를 저장해놓은 공간이다.

### Native Method Interface

- (Java Native Method Interface)를 줄여서 JNI라고도 한다.

- Native Method Interface는
  Native Method Libraries에서 저장하고 있는 Native code들과 Java코드들을
  Interface를 통해 연결해놓은 매개체라고 할 수 있다.