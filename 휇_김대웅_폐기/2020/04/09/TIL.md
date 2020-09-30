# TIL

자바 ArrayList

- 기존의 배열은 배열의 크기를 지정한 후에 배열의 크기를 변경할 수 없다는 불편함이 있다.
- ArrayList는 그러한 불편함을 줄여준다.
- ArrayList는 java.util.ArrayList를 import하면 쓸 수 있다.

~~~java
import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList a1 = new ArrayList();
        a1.add("first");
        a1.add("second");
        a1.add("third");
        for (int i = 0; i < a1.size(); i++) {
            System.out.println(a1.get(i));
        }
    }
}
~~~

- 위 예에서 볼 수 있듯이 ArrayList는 크기를 지정하지 않고, 많은 수의 값을 저장할 수 있다.
- 또한 기존의 배열과 달리 요소를 추가하기 위해서는 add 메소드를 사용하며, 길이를 구하기 위해서는 size 메소드를 사용해야 한다. 그리고 특정한 값을 가져오기 위해서는 get(인덱스)를 사용하여야 한다.

~~~java
import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> a1 = new ArrayList<String>();
        a1.add("first");
        a1.add("second");
        a1.add("third");
        for (int i = 0; i < a1.size(); i++) {
            String val = a1.get(i);
            System.out.println(val);
        }
    }
}
~~~

- 위와 같이 제네릭을 사용하면 ArrayList 내에서 사용할 타입을 지정할 수 있다.