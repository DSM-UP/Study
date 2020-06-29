package No3;

public class Product<T, M> {

	private T Kind;
	public T getKind() {
		return Kind;
	}
	public void setKind(T kind) {
		Kind = kind;
	}
	public M getModel() {
		return Model;
	}
	public void setModel(M model) {
		Model = model;
	}
	private M Model;
	
	
}
