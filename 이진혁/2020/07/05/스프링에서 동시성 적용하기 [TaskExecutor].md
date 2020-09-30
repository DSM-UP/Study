## 스프링에서 동시성(스레드) 적용하기 [TaskExecutor]

기존에 자바 SE에서는 java.lang 패키지에서 Thread라는 클래스를 지원합니다.
하지만 기존의 Thread 클래스는 너무 부족한 점이 많아서 이를 대체하기 위해서
자바 EE는 java.concurrent 패키지의 ExecutorService 인터페이스와 Executors 클래스를 지원한다.
하지만 자바 EE에서는 스레드를 다루는 설계 자체를 금기시하기 때문에 또 문제가 되었다.

그래서 자바 영역에서는 Quartz라는 스레드 프레임워크를 만들어
자바의 동시성 문제를 해결하고자 하였습니다.
그렇게 JCA(Java Connector Architecture)라는 명세를 지원하게 되고
ESB(Enterprise Service Bus)라는 유사 스프링 인티그레이션과 같은 프레임워크를 지원합니다.
그러다 오픈소스로 이루어진 CommonJ API가 만들어져 사용되게 되는데
스레드를 사용하는 방법에 대해서 표준이 존재하지 않다는 것을 알게 됩니다.
그래서 스프링에서는 TaskExecutor 인터페이스를 지원합니다.
TaskExecutor 인터페이스는 자바 EE의 Executor 인터페이스를 상속받은 인터페이스이다.

### 1. TaskExecutor 사용하기

스프링에서는 TaskExecutor 인터페이스와 함께 이를 구현하는 다른 구현체들도 지원합니다.
다른 구현체들의 종류는 다음과 같습니다.

```java
TaskExecutorAdapter
SimpleAsyncTaskExecutor
SyncTaskExecutor
ScheduledExecutorFactoryBean
ThreadPoolTaskExecutor
```

#### 1-1. TaskExecutorAdapter

TaskExecutorAdapter 클래스는 기존에 자바 EE에서 사용하던 Executors 클래스를 감싸서 만든
Wrapper 클래스이기 때문에 딱히 다른 기능이 없고 매개변수로 ExecutorService 타입을 받습니다.

#### 1-2. SimpleAsyncTaskExecutor

SimpleAsyncTaskExecutor 클래스는 추가된 작업마다
스레드를 하나씩 새로 생성하여 비동기 처리는 TaskExecutor 구현체이다.

#### 1-3. SyncTaskExecutor

SyncTaskExecutor 클래스는 비동기 작업을 진행하지 않고 들어온 작업을 동기로 처리합니다.

#### 1-4. ScheduledExecutorFactoryBean

ScheduledExecutorFactoryBean 클래스는 스레드 스케줄링을 할 수 있도록 setRunnable() 메소드를 제공하며
setPeriod() 메소드를 이용해서 스레드 간의 쉬는 시간을 정할 수 있는 TaskExecutor 구현체이다.

#### 1-5. ThreadPoolTaskExecutor

ThreadPoolTaskExecutor 클래스는 지금까지 있었던 모든 TaskExecutor 구현체들의
장점만을 모든 최종 TaskExecutor 구현체이다.