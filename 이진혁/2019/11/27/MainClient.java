public class MainClient {
	public static void main(String[] args) {
		Socket socket = null;
		CWorkThread cwt1 = null;
		CWorkThread2 cwt2 = null;
		
		try {
			socket = new Socket("10.156.147.116", 8888);
			
			cwt1 = new CWorkThread();
			cwt2 = new CWorkThread2();
			
			cwt1.setSocket(socket);
			cwt2.setSocket(socket);
			
			cwt2.start();
			cwt1.start();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
}