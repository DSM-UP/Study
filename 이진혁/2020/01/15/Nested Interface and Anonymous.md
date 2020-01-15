## Nested Interface and Anonymous

- 중첩 인터페이스는 중첩 클래스와 비슷한 형식으로 만들어지며
  오히려 중첩 클래스보다 간단한 설정을 가지고 있다.
- 일단 중첩 인터페이스는 왜 사용하는 걸까?
- 중첩 클래스와 마찬가지로 종속되어 있는 클래스 및 인터페이스에 기능이 종속되어 있는 경우에 사용한다.
- 중첩 인터페이스는 두 가지가 존재 한다.
  1. 클래스 안의 인터페이스
  2. 인터페이스 안의 인터페이스

### 클래스 안의 인터페이스

- 클래스 안의 인터페이스는 중첩 클래스와 마찬가지로
  인스턴스 멤버 인터페이스, 정적 멤버 인터페이스, 로컬 인터페이스가 존재한다.

- 그리고 각각의 인터페이스는 Anonymous 클래스, 즉 익명 객체로 구현하여 사용할 수 있다.

- 일단 인스턴스 멤버 인터페이스를 익명 객체로 구현해보자.

  #### 인스턴스 멤버 인터페이스

  ```java
  class Outter {
      interface Inner {
          void print1();
          void print2();
      }
  }
  ```

  - 위는 인터페이스를 클래스 안에 그냥 선언한 경우이다.

  - 이 인터페이스를 구현하려면 어떻게 해야할까?

  - 물론 중첩 클래스를 이용해서 Inner 인터페이스를 구현해도 좋다.

  - 하지만 Inner 인터페이스는 Outter 클래스에 종속되어 있는 만큼 많이 활용되지 않을 것이며
    사용한다고 해도 일회성인 경우가 대부분이다.

  - 그래서 자바에 존재하는 기능이 익명 객체를 생성하여 사용하는 방법이다.

  - 이 기능이 처음 나왔을 때는
    객체 지향형 프로그래밍 언어에 악영향을 끼친다면서 반대하는 사람이 많았지만
    현재는 익명 객체 기능 없이는 코딩을 할 수 없을 정도로 발전하였다.

  - 일단 익명 객체를 이용하여 인터페이스를 구현해보자면 아래와 같다.

    ```java
    interface Interface {
        void print1();
        void print2();
    }
    
    class Outter {
        interface Inner {
            void print1();
            void print2();
        }
        
        Inner inner = new Inner() {
            private int field;
            
            public void print() {
                System.out.println("print");
                print1();
                print2();
            }
            public void print1() {
                System.out.println("print1");
            }
            public void print2() {
                System.out.println("print2");
            }
        };
        
        Interface inter = new Interface() {
            private int field;
            
            public void print() {
                System.out.println("print");
                print1();
                print2();
            }
            public void print1() {
                System.out.println("print1");
            }
            public void print2() {
                System.out.println("print2");
            }
        };
    }
    
    public class MainClass {
        public static void main(String[] args) {
            Outter o = new Outter();
            o.inner.print1();
            o.inner.print2();
            o.inter.print1();
            o.inter.print2();
        }
    }
    
    // print1
    // print2
    // print3
    // print4
    ```

  - 위의 코드는 중첩된 인터페이스를 익명객체를 이용하여 구현하는 방법과
    그냥 선언되어 있는 인터페이스를 익명객체를 이용하여 구현하는 방법이 존재한다.
  - 아마 익명 객체에 대해서 알고 있는 사람들이 많을 것이지만 한 번 더 설명하자면,
    인터페이스를 구현하는 익명객체는 그 인터페이스를 구현한 클래스의 객체라고 할 수 있다.
    하지만 이름이 없으므로 익명 객체라고 부른다.
  - 그리고 그 익명 객체로는 인터페이스에 선언되어 있는 메소드만을 건드릴 수 있으며
    위와 같이 print() 함수에는 접근할 수 없다.
    하지만 인터페이스에 선언되어 있는 메소드를 이용하여
    새로 선언한 필드나 메소드에 접근할 수 있다.
  - 그리고 익명 객체를 선언하는 것도 하나의 선언문이므로 반드시 세미콜론을 붙여야 한다.
  - 중첩된 인터페이스를 구현하든, 일반적인 인터페이스를 구현하든 차이는 없다.
  - 생각해보니까 이름을 인스턴스 멤버 인터페이스라고 했는데
    인스턴스 멤버로 선언된 익명 객체라고 하는 것이 더 맞는 말인 것 같다.

  #### 정적 멤버 인터페이스

  - 위와 같이 정적 멤버 인터페이스가 아닌 정적 멤버로 선언된 익명객체라고 하는 것이 맞다.

  - 위의 인스턴스 멤버 익명객체와 별 다를 것 없이,
    익명 객체를 static으로 선언하는 것이 가능하다는 것을 알려주고 싶었다.

    ```java
    interface Interface {
        void print1();
        void print2();
    }
    
    class Outter {
        static Interface inter = new Interface() {
            public void print1() {}
            public void print2() {}
        };
    }
    
    public class MainClass {
        public static void main(String[] args) {
            Outter.inter.print1();
            Outter.inter.print2();
        }
    }
    ```

  - 익명 객체가 인터페이스를 구현한다고 해서 클래스라고 생각하면 안 된다.
    메소드가 안에 존재하는 멤버 변수라고 생각해야 이해하기 쉽다.
  - 왜냐하면 static, 정적으로 선언된 익명 객체
    Outter 클래스의 인스턴스 없이 인스턴스를 생성할 수 있는 "클래스" 가 아니라
    Outter 클래스의 인스턴스 없이 활용할 수 있는 "멤버 변수" 이다.

  #### 로컬 인터페이스

  - 로컬 인터페이스는 메소드 안에 존재하는 익명 객체를 말한다.

    ```java
    interface Interface {
        void print1();
        void print2();
    }
    
    class Outter {
        public void create() {
            Interface inter = new Interface() {
                public void print1() { ... }
                public void print2() { ... }
            };
            inter.print1();
            inter.print2();
        }
    }
    ```

  - 위와 같이 로컬 익명 객체는 간단하다.
    하지만 중첩 클래스의 로컬 클래스에서 말했던 문제가 여기서도 발생한다.
    아래의 코드를 살펴보자.

    ```java
    interface Interface {
        void print1();
        void print2();
    }
    
    class Outter {
        public Interface create(int a, final int b) {
            int c = 10;
            final int d = 20;
            
            Interface inter = new Interface() {
                public void print1() {
                    System.out.println(a + b + c + d);
                }
                public void print2() {}
            }
            
            return inter;
        }
    }
    ```

  - 위 처럼 매개변수가 존재하고 메소드의 필드가 존재하는 경우가 있다.
    익명 객체는 메소드가 끝나더라도 힙 영역에서 계속 존재한다.
    하지만 매개변수와 필드는 메소드가 끝나게 되면 stack 영역에서 해제된다.
    그런데 만약 익명 객체에서 매개변수와 필드에 접근한다면 어떻게 될까?
    당연히 오류가 발생할 것이다.
    자바에서는 이것을 방지하기 위해서 자바 8부터 final이 아닌 매개변수 또는 필드를
    익명 객체의 필드로 두었고 final인 매개변수 또는 필드를 메소드의 로컬 변수로 두었다.
    그리고 이 모든 매개변수와 필드들을 final로 하여 변경되지 않게끔 했는데
    이것은 이미 stack 영역에서 사라진 것들을 고친다는 것 자체가 말이 안되고
    익명 객체의 특성상 값을 바꿀 수 없기 때문이다.

  - 따라서 final이 붙어있지 않더라도 final 특성을 가지기 때문에 값을 변경할 수 없다는 것을 알 수 있다.

  - 자바 8 전에는 final이 붙지 않으면 오류가 발생하도록 하였는데 불편해서 그런지 보이진 않지만
    final 특성을 가지도록 변경되었다.

    

### 인터페이스 안의 인터페이스

- 인터페이스 안의 인터페이스는 가능하지만 사용하지 않는다.

- 왜냐하면 외부의 인터페이스는 구현할 수 있지만 안쪽에 있는 인터페이스는 구현하지 않아도
  될 뿐만 아니라 사용할 수도 없다.

  ```java
  interface Interface1 {
      interface Interface2 {
          interface Interface3 {
              void print3();
          }
          void print2();
      }
      void print1();
  }
  
  class Class implements Interface1 {
      @Override
      public void print1() {
          System.out.println("print1");
      }
  }
  ```

- 위와 같이 구현하게 되면 메인 함수에서 객체를 생성해도 객체가 생성되는 것으로 봤을때
  모든 멤버가 구현이 되었다는 것인데 안의 인터페이스는 구현하지 않은 상태였다.

- 따라서 이렇게 인터페이스 안의 인터페이스는 사용하지 않는 것이 맞다고 생각한다.

- 이후에 다른 의견이 들어오면 다시 올려보기로 하겠다.