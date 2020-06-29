package a;
import a.MyFunctionalInterface;
import a.d;
/*
public interface B {
	public void  run();
}



class out{
	int out = 10;
	class Inner{
		int in = 5;
		
		void method() {
			BB b= () ->{
				int in = 100;
				int out = 101;
				System.out.println(this.in);
				System.out.println(out.this.out);
				System.out.println(out);
				
			};
		}
	}
}
*/



/*
interface B{
	public int run(int x,int y);
	}&*//*
interface B{
	public void run(int x, int y );
}*//*
interface B{

	public void run();

	public void method();
}
public class a {
	public static void main(String[] args) {
		/*B b = (x,y) -> {};
		System.out.println(b.run(5,7));
		B b = (x,y) -> {
			"abc";
		};*/
      /*  B b= () -> {
            String str = "method call1";
            System.out.println(str);
        };
 
		b.run();
	
	/*	b = (x,y) -> x+y;
		System.out.println(b.run(5,7));
		
		b = (x,y) -> sum(x, y);
		System.out.println(b.run(5,7));
*//*	}
	public static int sum(int x, int y ) {
		return x+y;
	}
}	
*/
public class d {
	public int run(int a,int b){
		return a+b;
	}
		  public static void main(String... args) {
			 
		    Runnable r = new Runnable() {
		      public void run() {
		        System.out.println("Howdy, world!");
		      }
		    };
		    r.run();
		  }
		}/*  public int outterValue = 10;

    class Inner{
        int innerValue = 20;
        int outterValue = 30;
        
        void method(){
        	MyFunctionalInterface  fi = () -> {
                int innerValue = 40;
                System.out.println("outterValue : " + outterValue);
                System.out.println("outterValue : " + d.this.outterValue + "\n");

                System.out.println("innerValue : " + innerValue);
                System.out.println("innerValue : " + this.innerValue + "\n"); // 람다식 내부에서 this는 Inner 객체를 참조
            };
            fi.method();
        }
    }
}
 class UsingThisExample {
    public static void main(String[] args) {
        d usingThis = new d();
        d.Inner inner = usingThis.new Inner();
        inner.method();
    }
}

*/