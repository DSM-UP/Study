package Queue_2020_07_07;

import java.util.*;

public class Queue_Ex {
	public static void main(String[] args) {
		Queue<Message> messageQueue = new LinkedList<Message>();
		
		messageQueue.offer(new Message("sendKakaotalk","abcd"));
		messageQueue.offer(new Message("sendKakaotalk","abcd"));
		messageQueue.offer(new Message("sendKakaotalk","abcd"));
		messageQueue.offer(new Message("sendKakaotalk","abcd"));

		
		while(messageQueue.isEmpty()) {
			Message message = messageQueue.poll();
			switch(message.command) {
			case "sendMail" : System.out.println(message.to + " 님에게 메일을 보냈습니다.");
			break;
			
			case "SendSMS" : System.out.println(message.to + " 님에게 메일을 보냈습니다.");
			break;
			case "sendKakatalk" : System.out.println(message.to + " 님에게 메일을 보냈습니다.");
			break;
				
			
			}
		}
	}
}

