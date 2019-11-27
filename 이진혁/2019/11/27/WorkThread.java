public class WorkThread extends Thread {
	private Socket socket = null;
	private BufferedReader br = null;
	private PrintWriter writer = null;
	private String message = null;
	
	@Override
	public void run() {
		super.run();
		
		try {
			br = new BufferedReader(new InputStreamReader(System.in));
			writer = new PrintWriter(socket.getOutputStream());
			
			while(true) {
				message = br.readLine();
				
				writer.println(message);
				writer.flush();
			}
			
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public void setSocket(Socket socket) {
		this.socket = socket;
	}
}
