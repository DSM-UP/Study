
public class StringTest {
 public static void main(String[] args) {
	 byte[] bytes = {111,112,113,114,115};
	 
	 String str1 = new String(bytes);
	 System.out.println(str1);
	 String str2 = new String(bytes,2,3 );
	 System.out.println(str2);
	 
 }
}
