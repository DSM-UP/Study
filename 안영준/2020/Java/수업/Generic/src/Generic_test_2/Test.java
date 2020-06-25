package Generic_test_2;

public class Test{
	static <T> T a(T t) {
		return t;
	}
public static void main(String[] args) {
	String str = a("h1");
	System.out.println(str);
			
}

}

	 
// 제한된 타입 파라미터라 선언, 타입 파라미터 뒤에 extends 키워드를 붙이고 상위 타입을 명시.