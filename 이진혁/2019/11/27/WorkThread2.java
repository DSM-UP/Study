public class WorkThread2 extends Thread {
	private Socket socket = null;
	BufferedReader br = null;
	String message = null;
	
	@Override
	public void run() {
		super.run();
		
		try {
			 br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			 
			 while(true) {
				 message = br.readLine();
				 
				 if(message == null) {
					 System.out.println("상대방이 당신과의 채팅을 싫어해서 탈주했습니다.");
					 break;
				 } else {
					 System.out.println("상대방 : " + message);
				 }
			 }
			 
			 br.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public void setSocket(Socket socket) {
		this.socket = socket;
	}
}
