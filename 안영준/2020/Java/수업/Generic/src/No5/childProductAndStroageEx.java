package No5;

import No3.Tv;

public class childProductAndStroageEx {
	public static void main(String[] args) {
		ChildrenProduct<Tv,String,String> product = new ChildrenProduct<>();
		product.setKind(new Tv());
		product.setModel("TV");
		product.setCompany("samsoung");
		
		Storage<Tv> storage = new StorageImp1<Tv>(100);
		storage.add(new TV(), 0);
		Tv tv = storage.get(0);
	}
}
