# TIL

자바 입력받기

- 자바에서 키보드로 입력받을 때는 System.in을 사용.
- 입력받은 문자열을 처리하기 위해서 Scanner 클래스를 사용한다.

~~~java
import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        String message;
        Scanner scan = new Scanner(System.in); // Scanner 생성
        
        message = scan.nextLine(); // 키보드 문자 입력
        
        int su;
        su = scan.nextInt(); // 키보드 정수 입력
        
        double silsu;
        silsu = scan.nextDouble(); // 키보드 실수 입력
    }
}
~~~

- Scanner는 System.in 뿐만 아니라 다양한 인자를 읽어들여 파싱 및 처리를 해준다.



출처 : https://hyeonstorage.tistory.com/136