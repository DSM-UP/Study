package student;

public class Student {
	String name;
	
	
	int time;
	public Student() {
		name = "student";
	}
	public void doing(String name,int time)
	{
		  System.out.println("나는" + name + "~한다. " + time + "분 동안");
	}
}
