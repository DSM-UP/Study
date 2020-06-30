package Vector_2020_06_29;

import java.util.List;
import java.util.Vector;

public class Vector_EX {
	String subject;
	String content;
	String writer;
	
	public  Vector_EX(String subject, String content,String writer) {
		this.subject = subject;
		this.content = content;
		this.writer = writer;
		
	}
	public static void main(String[] args) {
		List< Vector_EX> list = new Vector< Vector_EX>();
		
		list.add(new  Vector_EX("abcd","Abcd","abcd"));
		list.add(new  Vector_EX("abcd","Abcd","abcd"));
		list.add(new  Vector_EX("abcd","Abcd","abcd"));
		list.add(new  Vector_EX("abcd","Abcd","abcd"));


	
		for(int i=0;i<list.size();i++) {
			Vector_EX Vector_ex = list.get(i);
			System.out.println(Vector_ex.subject+""+Vector_ex.content+""+Vector_ex.writer);
		}
		
	}
}
