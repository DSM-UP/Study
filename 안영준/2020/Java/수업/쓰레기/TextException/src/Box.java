

import java.util.Scanner;

public class Box<T> {
	public static void main(String[] args)
    {
		String str = "abcedfg".substring(0,2)+"ELL"+"Hello World".substring(7);
        Scanner scanner = new Scanner(System.in);
 
        int i = 0;
        
        while(scanner.hasNextInt())
        {
            int num = scanner.nextInt();
            i += num;
        }
 
       // System.out.println("total : " + i);
        System.out.println(str);
        System.out.println(str.length());
    }


//	private static Scanner s;

//	public static void main (String[] agrs) {
//		s = new Scanner(System.in);
//		//String strInput = s.nextLine();
//		int i = s.nextInt();
//		char c = s.next().charAt(0);
//		int j = s.nextInt();
//		
//		int z =0;
//		if( c== '+') {
//			z = i+j;
//		}
//		System.out.println(z);
//	}
//	
}
/*
	private T t;
	
	public Object getObj(T t) {
		return this.t;
	}

	public void setObj(T t) {
	
	}

}
*/