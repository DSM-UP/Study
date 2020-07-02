package No4;

public class BoxingMethodEx {


 	public static void main(String[] args) {
 		Box<Integer> box1 = Util.<Integer>boxing(100);
 		int IntValue = box1.get();
 		
 		Box<String> box2 = Util.boxing("ȫ�浿");
 		String StringValue = box2.get();
 	}
}
