# mutex

## 멀티 스레드

cpu에는 동시에 많은 연산을 수행하기 위해 한번에 하나의 연산을 하는 스레드라는 단위로 나누어 여러개의 스레드를 가지고 있다

이러한 여러개의 스레드는 여러 프로그램이 동시에 돌아가게 만들기도 하지만 하나의 프로그램에서 사용하기도 하며 이러한 프로그램을 짜는 기법을 멀티 스레딩 프로그래밍(이하 멀티 스레딩)이라고 한다 

이러한 멀티 스레딩을 게임 프로그램에서 예를 들자면 음악이 나오면서 우리에게 화면을 보여주며 물리를 연산하고 서버와 통신한다 이러한 작업을 한번에 한 번의 연산으로 해결하고자 한다면 상당히 버벅거리고 부자연 스러울 것이다 이때 멀티 스레딩이 사용된다

## 멀티 스레드의 문제점

하지만 멀티 스레딩은 몇가지 문제점을 가져올 수 있는데 그 중 하나가 동시성 문제다
동기화 문제는 여러개의 스레드가 동시가 같은 데이터 혹은 메모리 공간에 접근함에 있어서 발생한다
변수 a가 있다고 가정하자 이때 두 개의 스레드가 변수 a에 동시에 1을 더한다고 생각하자 그렇다면 그 결과는 2가 더해진게 아닐 가능성이 높다 혹시 이것이 이해가 가지 않는다면 동시에 각각 10과 100의 값을 대입한다고 생각하자 이렇다면 인간인 우리도 어떤 결과가 나올지 예상가지 않는다
이러한 동시성 문제는 최종적으로 올바른 연산이 이루어지지 못하게 하여 프로그램에 큰 문제를 가져 올 수 있다

## 해결 방법 mutex

이러한 동시성 문제를 해결하기 위해 나온 방법이 mutex이다
mutex는 어느 한 스레드가 한 공간에서 연산을 하고 있다면 다른 스레드는 연산을 못하도록 막는 것이다 이를 lock이라고 한다
정확한 흐름은 아래와 같다

스레드 A, B, C가 있고 변수 X가 있다
변수 X는 여러 스레드가 동시에 접근할 가능성이 있어
변수 X에 접근할 스레드는 항상 그 직전에 lock을 걸어야 한다스레드 A가 변수 X lock이라는 것을 건다
그 후 스레드 A는 변수 X에 연산을 한다
그사이 스레드 B가 변수 X에 접근하기위해 lock 건다
하지만 변수 X는 lock이미 걸려 있으므로 
스레드 B는 대기 상태에 들어간다
스레드 A가 연산이 다 끝나고 lock을 푼다
대기 상태였던 스레드 B가 변수 X에 lock을 걸고 연산에 들어간다
스레드 A가 lock 건 후 C가 변수 X에 lock 걸었다
하지만 이미 lock 걸려있으므로 둘 다 대기 상태에 들어간다
스레드 B가 lock을 풀었다
이때 스레드 A가 먼저 대기 상태에 들어갔겠지만
변수 X에 lock걸고 접근할 우선 순위가 있는 것은 아니다
즉 A와 C 중 누가 먼저 변수 X에 접근할 지는 모른다

그리고 lock을 걸 수도 있지만 lock 시도할 수도 있다
이 차이점은 이미 lock이 걸려있을 때
lock을 거는 것은 대기 상태에 들어가지만
lock을 시도하는 것은 그냥 다른 연산으로 넘어간다

## mutex의 문제점

이러한 lock 걸거나 시도하고 푸는 작업을 mutex라고 한다
하지만 lock을 걸거나 푸는 작업은 상당이 무겁다
따라서 이러한 경우는 피하는 것이 좋고 가급적이면 쓰지말자
요즘은 이러한 것을 완전히 피하기 위해 코루틴을 비롯한 병렬 프로그래밍 기법이 유행하고 있다

