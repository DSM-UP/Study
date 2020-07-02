package JAVA_23;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.util.Scanner;

public class TCPServer2 {

	public static void main(String[] args) {
		try {
			Socket s = new Socket("localhost",9999);
			System.out.println("Connected...");
			
			Scanner sc = new Scanner(System.in);
			
			while(true) {
				String myMsg = sc.nextLine();
				
				OutputStream os = s.getOutputStream();
				DataOutputStream dos = new DataOutputStream(os);
				
				dos.writeUTF(myMsg);
				InputStream is = s.getInputStream();
				DataInputStream dis = new DataInputStream(is);
				String rcvMsg = dis.readUTF();
				
				System.out.println("Echo"+ rcvMsg);
			}
		} catch(IOException e ) {
			e.printStackTrace();
		}
	}
}
