package TestException;

import java.io.IOException;
import java.util.function.Predicate;
 
public class Predicate123 
{
 
  

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

    	//예시 2 = 매게값 조사해서 논리값 반환 예시 
        Predicate<Integer> p0 = n -> n>0;
        System.out.println(p0.test(0)?"양수":"양수가 아니다.");
        
        
    	//예시 3 = 자바의 논리연산자와 비슷한 역할을 하는 and,or,negate,equals

        int num = 0;        
        Predicate<Integer> p1 = n -> n != 0;
    	Predicate<Integer> p2 = n -> n != 1;
        if (p1.test(num)) {

        	System.out.println("0이 아닙니다..");

        } else if (p2.test(num)) {

        	System.out.println("1이 아닙니다.");

        }

        Predicate<Integer> p3 = p1.and(p2);

        if (p3.test(num)) {

        	System.out.println("1,0이 둘다아닙니다.");

        }
        Predicate<Integer> p4 = p1.or(p2);

        if (p4.test(num)) {

        	System.out.println("0,1둘 중 하나가 아닙니다.");

        }
        
        System.out.println("===================");
      
        Predicate<Integer> p5 = Predicate.isEqual(p1);

        if (p5.test(num)) {

        	System.out.println("0,1둘 중 하나가 아닙니다.");

        }
    
        Predicate<String> p6 = Predicate.isEqual(null);
        System.out.println("같습니다. " + p6.test(null));

    }   
   
    
    
}//CLASS END


