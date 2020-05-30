package ex;

public class Main
{
	static Snack flower = new Snack(); 
	static Drink drink  = new Drink();
	static Refreshments refreshments = new Refreshments();
	
	
	//메인메소드에서 
	public static void main( String [] args )
	{
		Snack Snack = new Snack();
		Drink Drink = new Drink();
		Refreshments Refreshments = new Refreshments();
		
	
		
		Snack.printAttributes();
		Drink.printAttributes();
		Refreshments.printAttributes();
		Snack.printAttributes(300);
		drink.printAttributes(300);
		refreshments.printAttributes(300);
		
	}
}