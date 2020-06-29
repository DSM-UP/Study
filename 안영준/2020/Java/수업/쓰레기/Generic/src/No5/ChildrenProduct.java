package No5;

public class ChildrenProduct<T, M, C> extends Product<T,M> {
	private C company;

	public C getCompany() {
		return company;
	}

	public void setCompany(C company) {
		this.company = company;
	}


}
