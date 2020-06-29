package TestException;

import java.io.IOException;
import java.util.Arrays;
import java.util.function.Predicate;
import java.util.stream.IntStream;
import java.util.stream.Stream;
public class lambda {

	public static void main(String[] args) {

		Stream<Integer> die = IntStream.rangeClosed(1, 6).boxed();



		die.flatMap(i -> Stream.of(1, 2, 3, 4, 5, 6).map(i2 -> new int[] { i, 12 }))

				.filter(iArr -> iArr[0] + iArr[1] == 6)

				.forEach(iArr -> System.out.println(Arrays.toString(iArr)));

	}

}


/*
public class lambda {
	  public static void main(String[] args) throws IOException
	    {
	    	
	        //예시 1 = 매게값 조사해서 논리값 반환 예시 
	        Predicate<String> match = n->
	        {
	            if("1".equals(n))
	            {
	                System.out.println("1입니다");
	                return true;
	            }
	            else 
	            {
	                System.out.println("1이 아닙니다");
	                return false;
	            }
	        };
	        System.out.println(match.test("1"));
	    }
}
*/