package b;

interface Fi{
	int run(int a,int b);
}
public class Test {
	public static void main(String[] args) {
		Fi fi = new Fi() {
			public int run(int a, int b) {
				return a+b;
			}
		};
		
		System.out.println(fi.run(10, 20));
		
		Fi F2 = (x,y)-> x+y;
		System.out.println(F2.run(10, 20));
// (타입 매개변수)는 오른족 중괄호 블록을 실행하기 위해 세부적인 값 전달) 인터페이스<- 타겟타입 변수 = 람다식.
//함수적 인터페이스라고함 (하나만있어야됨)
// 메소드 참조 = 메소드를 참조해서 매개변수의 정보 및 리턴타입을 알아내어 람다식에서 불필요한 매개변수를 제거하는것이 목적이다, 단순히 호출만 하는경우
// Math ::max; <- 메소드 참조 (클래스이름 :: 메소드)
// 정적 메소드 = 클래스::메소드 , 인스턴슴 ㅔ소드 = 참조변수::메소드
	}

}

