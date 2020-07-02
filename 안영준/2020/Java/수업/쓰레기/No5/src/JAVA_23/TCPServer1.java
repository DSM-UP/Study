package JAVA_23;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class TCPServer1 {
	public static void main(String[] args) {
		ServerSocket a;
		
	try {
		a = new ServerSocket(9999);
		System.out.println("Multi-Server Start!");
		
		Socket b = a.accept();
	 System.out.println("Client Connected....");
	 
	 while(true) {
		 InputStream is = b.getInputStream();
		 DataInputStream ds = new DataInputStream(is);
		 
		 String rcvBuff = ds.readUTF();
		 System.out.println("일근 내용:"+rcvBuff);
		 
		 OutputStream os = b.getOutputStream();
		 DataOutputStream dos = new DataOutputStream(os);
		 
		 dos.writeUTF(rcvBuff);
	 }
	} catch(IOException e) {
		e.printStackTrace();
	}
	}
	
}
 
//    collection(i)
/* List(i)		set(i)			Map(i)
 ArrayList		HashSet			HashMap
 Vector			TreeSet			Hashtable
 LinkedList						TreeMap
 								Properties
 			 					
 List = Data를 중복해서 포함 할 수 있다, 순서가있다, 객체의 번지를 참조한다.(객체 자체를 저장하는 것이아님<- 이것때문에 중복이됨), null도 저장가능
 Set = List 반대
 Map = k,v 로 있음, 기준 k 기준으로 중복이안된다.
 
 //list컬랙션 add = 추가 , get = 검색, remove = 삭제
 
 for( String s(담을변수) : list(해당 컬랙션)){}
 
 ArrayList = list인터페이스의 구현 클래스로 배열과 유사
 ArrayList는 저장용량을 초과한 객체들이 들어오면 자동으로 늘어남
(초기용량 = 10개) 
특정인덱스가 삭제되면 마지막 인덱스까지 모두 1씩 밀려남.

삭제는 = linkedlist
검색은  =arraylist

고정된 객체들로 구성된 List 생성할 때
Array.asList(T... a)
 */


