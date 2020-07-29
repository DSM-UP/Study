package Stack_2020_07_07;

import java.util.*;

public class Stack_Ex {
	public static void main(String[] args) {

	Stack<Coin> coinbox = new Stack<Coin>(); 
	
	coinbox.push(new Coin(199));
	coinbox.push(new Coin(199));
	coinbox.push(new Coin(199));
	coinbox.push(new Coin(199));
	
	while(coinbox.isEmpty()) {
		Coin coin = coinbox.pop();
		System.out.println(coin.getValue());
	}
}
}
