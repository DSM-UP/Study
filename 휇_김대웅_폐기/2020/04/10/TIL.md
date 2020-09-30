# TIL

자바 Generic

- 클래스 내부에서 사용할 데이터 타입을 외부에서 지정하는 기법.



~~~java
class Animal<T> {
    public T info;
}

public class GenericExample {
    public static void main(String[] args) {
        Animal<String> animal1 = new Animal<String>(); // animal1.info : String
        Animal<Integer> animal2 = new Animal<Integer>(); // animal2.info : Integer
    }
}
~~~

- 클래스의 인스턴스를 생성할 때 info의 데이터 타입이 정해진다.



~~~java
class AnimalInfo {
    public int age;
    AnimalInfo(int age) { this.age = age; }
}

class Animal<T, S> {
    public T info;
    public S id;
    Person(T info, S id) {
        this.info = info;
        this.id = id;
    }
}
public class GenericExample {
    public static void main(String[] args) {
        Animal<AnimalInfo, int> a1 = new Animal<AnimalInfo, int>(new AnimalInfo(3), 1);
    }
}
~~~

- 위와 같이 복수의 제네릭을 사용할 수도 있다.

- 제네릭은 참조 데이터 타입만 사용할 수 있다. 따라서 위 코드의 Animal<AnimalInfo, int> 부분의 int를 참조 데이터 타입으로 바꿔야 한다. Integer가 int를 참조 데이터 타입으로 변환해준다. (이러한 클래스를 wrapper 클래스라고 한다.)



~~~java
class FunctionGeneric {
    public <U> void print(U info) {
        System.out.println(info);
    }
}
public class GenericExample {
    public static void main(String[] args) {
        FunctionGeneric f1 = new FunctionGeneric();
        f1.<String>print("Hello world"); // Hello world
        f1.<Integer>print(2421); // 2421
    }
}
~~~

- 제네릭은 메소드에도 적용할 수 있다.



~~~java
abstract class Info {
    public abstract int getName();
}
class AnimalInfo extends Info {
    public String name;
    AnimalInfo(String name) { this.name = name; }
    public int getName() { return this.name; }
}
class Animal<T extends Info> {
    public T info;
    Person(T info) { this.info = info; }
}
public class GenericExample {
    public static void main(String[] args) {
        Animal<AnimalInfo> a1 = new Animal(new AnimalInfo("pet"));
        Animal<String> a2 = new Animal<String>("pet"); // error
    }
}
~~~

- extends를 사용하여 제네릭을 제한할 수 있다. Animal의 T는 Info 클래스이거나 Info 클래스의 자식이어야 한다.
- 구현(implements)의 관계에서도 사용할 수 있다.