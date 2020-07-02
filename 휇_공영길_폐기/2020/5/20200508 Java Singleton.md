# Java Singleton

## Singleton ???

**어떤 클래스가 최초 한번만 메모리를 할당하고(Static) 그 메모리에 객체를 만들어 사용하는 디자인 패턴**



```java
class Singleton {
    private static Singleton instance = new Singleton();
    private static Singleton(){}
    
    public static Singleton getInstance(){
        return instance;
    }
}

public static void main(String[] args) {
    Singleton ex1 = Singleton.getInstance();
    Singleton ex2 = Singleton.getInstance();
    
    system.out.println(ex1 == ex2);
}
```

