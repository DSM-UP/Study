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
 

