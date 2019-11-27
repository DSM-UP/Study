public class MainServer {
	public static void main(String[] args) {
		ServerSocket serversocket = null;
		Socket socket = null;
		WorkThread work1 = null;
		WorkThread2 work2 = null;
		
		try {
			serversocket = new ServerSocket(8888);
			socket = serversocket.accept();
			
			work1 = new WorkThread();
			work2 = new WorkThread2();
			work1.setSocket(socket);
			work2.setSocket(socket);
			
			work1.start();
			work2.start();
			
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
}
