## AspectJ 프레임워크의 AJC를 이용한 CTW, LTW 사용하기 [@EnableLoadTimeWeaving]

스프링에서 AOP를 구현하여 Aspect를 사용할 때에는 기존의 AspectJ 프레임워크의 일부분만 사용이 가능하다.
그래서 AspectJ 프레임워크의 기능을 그대로 가져올 필요가 있다.

### 1. AspectJ 프레임워크를 사용하는 이유

스프링 AOP에 AspectJ의 기능의 일부분이 있는데 왜 AspectJ 프레임워크를 가져와서 사용해야 할까?
그것은 질문에 정답이 있다.
스프링 AOP는 AspectJ 프레임워크의 '일부분'의 기능만 가지고 있기 떄문이다.
스프링에서 지원하는 Aspect은 AspectJ 포인트컷의 제한된 타입만 지원하고
RTW만을 지원합니다.

> #### RTW란?
>   Run-Time Weaving의 약자로서, 스프링의 AOP가 지원하는 위빙 시점이다.
>   위빙이란 포인트컷이 적용되는 시점을 말하는데 따라서 주요 로직과 부가 기능이 합쳐지는 순간을 말합니다.
>   그래서 RTW는 프록시를 생성하여 타겟 객체의 변형없이 런타임에 위빙을 적용하는 것을 말합니다.

하지만 AspectJ 프레임워크 자체는 CTW와 LTW를 지원합니다.

>#### CTW란?
>
>Compile-Time Weaving의 약자로서, AspectJ 프레임워크가 지원하는 위빙 방법이다.
>컴파일 과정에서 위빙을 진행하기 위해서 AspectJ는 AJC라는 전용 컴파일러를 사용한다.
>AJC는 AspectJ Compiler의 약자로, 기존의 Java Compiler에서 확장된 형태이다.
>
>이렇게 AJC가 컴파일을 하기 때문에 컴파일을 할 때 자바 코드가 바이트 코드로 변환될 때
>Aspect를 코드에 작성하게 된다. (정확히는 어드바이저, 어드바이스를 작성)
>
>JVM에 올리기 전, 컴파일 시점에서 코드를 모두 삽입하기 때문에 굉장히 빠른 속도를 보여준다.
>하지만 Lombok과 같이 컴파일 시점에서 코드를 삽입하는 라이브러리를 사용하면
>충돌이 일어나는 경우가 잦아서 이런 라이브러리를 사용할 수 없다는 치명적인 약점이 있다.

>   #### LTW란?
>
>   Load-Time Weaving의 약자로서, AspectJ 프레임워크가 지원하는 위빙 방법이다.
>   CTW는 컴파일 시점에 코드를 삽입하는 반면에 LTW는 클래스가 JVM 메모리에 로드될 때
>   코드에 삽입이 된다.
>
>   CTW는 컴파일 과정에서 코드를 삽입하기 때문에 컴파일 시간이 조금 걸릴 수도 잇지만
>   LTW는 컴파일 과정에서는 건들지 않기 때문에 컴파일은 CTW보다 빠르다.
>   하지만 메모리에 올라가는 과정에서 위빙이 되기 때문에 런타임시 CTW보다 느리게 된다.
>
>   사실 컴파일 시점에서 느려지는 것보다는 런타임 시점에서 느려지는 것이 더 치명적이기 때문에
>   CTW가 좀 더 좋은 방법이라고도 할 수 있다.
>   하지만 각각의 장점과 단점은 다르므로 섣불리 결정할 것은 아니다.

따라서 CTW와 LTW 방식을 사용하기 위해서는 Spring AOP에 있는 기능에서 벗어나
AspectJ 프레임워크를 직접 끌어다 사용해야 한다.

### 2. CTW 방식으로 위빙하기

CTW 방식으로 위빙하기 위해서는 기존에 많이 사용하던 execution() 표현식말고 call() 표현식을 사용해야 한다.
이 뿐만 아니라 META-INF 디렉토리에 설정 파일을 구성해야 한다.
META-INF 디렉토리에 설정 파일을 구성하는 이유는 META-INF에 manifest 파일이 들어가기 때문인데
manifest 파일이란 jar 파일의 사용설명서와 같은 개념이다.
call() 표현식을 사용하기 위한 사용설명서와 같은 개념이므로 설정 파일을 XML 형태로 저장한다.

이렇게 AspectJ 프레임워크를 사용하기 위해서는 aspectj 태그를 이용해 구성해야 한다.

```xml
<!DOCTYPE aspectj PUBLIC "-//AspectJ//DTD//EN"
	"http://www.eclipse.org/aspectj/dtd/aspectj.dtd">

<aspectj>
	<weaver>
    	<include within="abc.def.ghi.*"/>
    </weaver>
    <aspects>
    	<aspect name="abc.def.ghi.Test"/>
    </aspects>
</aspectj>
```

설정 XML 파일에는 위빙할 대상 클래스를 지정합니다.
aspect 태그의 name 속성에는 애스펙트 클래스의 이름을 작성하고,
include 태그의 within 속성에는 애스펙트 클래스를 위빙할 클래스를 지정한다.
따라서 위에서는 Test라는 애스펙트를 abc.def.ghi 패키지에 있는 모든 클래스에게 위빙한다라는 뜻으로
해석할 수 있다.

### 3. LTW 방식으로 위빙하기

#### 3-1. AspectJ 위버로 LTW 방식 위빙하기

AspectJ 프레임워크를 이용해서 위빙할 때는 agent라는 키워드를 통해서
자바 코드를 실행하기 전에 JVM에게 알려주어야 한다.
왜냐하면 JVM의 메모리에 로딩되는 시점에서 위빙을 해야 하기 때문이다.
따라서 IDE를 쓸 것이라면 JVM args에 들어가서 설정을 하고 실제로 명령 프롬프트 창에서 실행하는 것이라면
다음과 같이 실행하면 된다.

```java
java -javaagent:lib/aspectjweaver-1.9.0.jar -jar Recipe_2_19_ii-4.0.0.jar
```

#### 3-2. 스프링 로드 타임 위버로 LTW 방식 위빙하기

AspectJ 프레임워크를 사용하지 않고 스프링으로 LTW 방식으로 위빙하기 위해서는
스프링 로드 타임 위버라는 것을 사용해야 한다.
이를 사용하는 방법도 javaagent 옵션을 사용하여 실행할 때 JVM에게 알려주면 된다.

스프링 로드 타임 위버를 사용하기 위해서는 @EnableLoadTimeWeaving을
Configuration 클래스에 작성한다.