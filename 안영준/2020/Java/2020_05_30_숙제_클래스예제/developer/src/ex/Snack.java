package ex;

class Snack
{
	Snack() 
	{
		Snackname = "간식"; 	
	}
		public String Snackname;
		public double cost;		
		
		protected void printAttributes()
		{
			if(Snackname != "간식") {
			System.out.println("Snackname="+Snackname+"cost="+cost);
		}
			else {
				System.out.println("간식은 음료수와 다과가있습니다");
			}
		}
		protected void printAttributes(int a) {
		int the_number_refreshments= (int) (a / 200.2); 
		int the_number_drink = (int) (a / 100); 
		System.out.println("다과 ="+the_number_refreshments + "개 살수있고, 음료수 ="+ the_number_drink +" 개 살수있습니다");
		}
	
}


class Drink extends Snack 
{
	Drink() 
	{
		Snackname = "음료수"; 
		cost = 100; 
	}
	protected void printAttributes(int a) {
		int the_number_drink = (int) (a / 100); 
		System.out.println("음료수 ="+the_number_drink + "개 살수있습니다.");
		}
}


class Refreshments extends Snack
{
	 Refreshments()
	{
		Snackname = "다과";
		cost = 200.2;
	}
		protected void printAttributes(int a) {
			int the_number_refreshments = (int) (a / 200.2); 
			System.out.println("다과 ="+the_number_refreshments + "개 살수있습니다.");
			}
}

