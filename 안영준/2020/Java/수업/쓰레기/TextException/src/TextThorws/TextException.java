package TextThorws;

public class TextException {
	public static void main(String[] args) {

		try  {

			method1();		

		} catch (Exception e)	{

			System.out.println("main메서드에서 예외가 처리되었습니다.");

			e.printStackTrace();

		}

	} // main메서드의 끝



	static void method1() throws Exception {

		throw new Exception();

	} // method1()의 끝

} // class의 끝

/*사용자정의 예외 = 일반예외로 선언, 실행 예외로 선언 둘다 가능하다.
 *  
 */


	/*public static void main(String[] args) {
		try {
			method(); //static 안에선 static으로 선언되어야함
			System.out.println("클래스 찾음");
		}catch(ClassNotFoundException e) {
			System.out.println("클래스 못찾음");
		}
	 
		
	}
	static void method() throws ClassNotFoundException {
		try {
			Class c = Class.forName("java.lang.String");
			
			//	System.out.println("클래스 찾음");
			
	//	} catch(ClassNotFoundException e) {
			
		//}
		
		}	
		catch (Exception e) {

			System.out.println("method1메서드에서 예외가 처리되었습니다.");

			e.printStackTrace();



	}
}
}
*/