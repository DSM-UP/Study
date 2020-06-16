package a;


public class Test_c {
	public static void main(String[] args)
	{
    	// 인터페이스 변수 = new 인터페이스()
		Fi rc = new Fi()
		{
        	// 인터페이스의 추상 메소드의 실체 선언
			public void EatSomething() 
			{
				System.out.println("아아악");
			}	
		};
		
		rc.EatSomething();
	}
}}
