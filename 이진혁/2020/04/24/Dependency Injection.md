## Dependency Injection

- Dependency Injection 즉, DI(의존성 주입)는 그렇게 어렵게 생각할 요소가 아니다.
  어떠한 객체들에게 하나의 객체를 의존하도록 주입하는 것을 말한다.
  예로 다음의 코드를 볼 수 있다.

  ```java
  package test.project.member;
  
  public class Student {
  	private String serialNumber;
  	private String id;
  	private String password;
  	private String name;
  	private int age;
  	
  	public Student(String serialNumber, String id,
  			String password, String name, int age) {
  		this.serialNumber = serialNumber;
  		this.id = id;
  		this.password = password;
  		this.name = name;
  		this.age = age;
  	}
  
  	public String getSerialNumber() {
  		return serialNumber;
  	}
  
  	public void setSerialNumber(String serialNumber) {
  		this.serialNumber = serialNumber;
  	}
  
  	public String getId() {
  		return id;
  	}
  
  	public void setId(String id) {
  		this.id = id;
  	}
  
  	public String getPassword() {
  		return password;
  	}
  
  	public void setPassword(String password) {
  		this.password = password;
  	}
  
  	public String getName() {
  		return name;
  	}
  
  	public void setName(String name) {
  		this.name = name;
  	}
  
  	public int getAge() {
  		return age;
  	}
  
  	public void setAge(int age) {
  		this.age = age;
  	}
  }
  ```

  ```java
  package test.project.dao;
  
  import java.util.HashMap;
  import java.util.Map;
  
  import test.project.member.Student;
  
  public class StudentDAO {
  	private Map<String, Student> studentDB = new HashMap<>();
  	
  	public void insert(Student student) {
  		studentDB.put(student.getSerialNumber(), student);
  	}
  	
  	public Student select(String serialNumber) {
  		return studentDB.get(serialNumber);
  	}
  	
  	public void update(Student student) {
  		studentDB.put(student.getSerialNumber(), student);
  	}
  	
  	public void delete(String serialNumber) {
  		studentDB.remove(serialNumber);
  	}
  	
  	public Map<String, Student> getStudentDB() {
  		return studentDB;
  	}
  }
  ```

  ```java
  package test.project.assembler;
  
  import test.project.dao.StudentDAO;
  import test.project.service.StudentAllSelectService;
  import test.project.service.StudentDeleteService;
  import test.project.service.StudentModifyService;
  import test.project.service.StudentRegisterService;
  import test.project.service.StudentSelectService;
  
  public class StudentAssembler {
  	private StudentDAO studentDAO;
  	private StudentRegisterService registerService;
  	private StudentModifyService modifyService;
  	private StudentDeleteService deleteService;
  	private StudentSelectService selectService;
  	private StudentAllSelectService allSelectService;
  	
  	public StudentAssembler() {
  		studentDAO = new StudentDAO();
  		registerService = new StudentRegisterService(studentDAO);
  		modifyService = new StudentModifyService(studentDAO);
  		deleteService = new StudentDeleteService(studentDAO);
  		selectService = new StudentSelectService(studentDAO);
  		allSelectService = new StudentAllSelectService(studentDAO);
  	}
  
  	public StudentDAO getStudentDAO() {
  		return studentDAO;
  	}
  	public void setStudentDAO(StudentDAO studentDAO) {
  		this.studentDAO = studentDAO;
  	}
  	public StudentRegisterService getRegisterService() {
  		return registerService;
  	}
  	public void setRegisterService(StudentRegisterService registerService) {
  		this.registerService = registerService;
  	}
  	public StudentModifyService getModifyService() {
  		return modifyService;
  	}
  	public void setModifyService(StudentModifyService modifyService) {
  		this.modifyService = modifyService;
  	}
  	public StudentDeleteService getDeleteService() {
  		return deleteService;
  	}
  	public void setDeleteService(StudentDeleteService deleteService) {
  		this.deleteService = deleteService;
  	}
  	public StudentSelectService getSelectService() {
  		return selectService;
  	}
  	public void setSelectService(StudentSelectService selectService) {
  		this.selectService = selectService;
  	}
  	public StudentAllSelectService getAllSelectService() {
  		return allSelectService;
  	}
  	public void setAllSelectService(StudentAllSelectService allSelectService) {
  		this.allSelectService = allSelectService;
  	}
  }
  ```

  ```java
  package test.project.service;
  
  import test.project.dao.StudentDAO;
  import test.project.member.Student;
  
  public class StudentDeleteService {
  	private StudentDAO studentDAO;
  	
  	public StudentDeleteService(StudentDAO studentDAO) {
  		this.studentDAO = studentDAO;
  	}
  	
  	public void delete(Student student) {
  		if(verify(student.getSerialNumber())) {
  			studentDAO.delete(student.getSerialNumber());
  		} else {
  			System.out.println("학생 정보가 존재하지 않습니다.");
  		}
  	}
  	
  	public boolean verify(String serialNumber) {
  		Student s = studentDAO.select(serialNumber);
  		return s != null ? true : false;
  	}
  }
  ```

  ```java
  package test.project.service;
  
  import test.project.dao.StudentDAO;
  import test.project.member.Student;
  
  public class StudentModifyService {
  	private StudentDAO studentDAO;
  	
  	public StudentModifyService(StudentDAO studentDAO) {
  		this.studentDAO = studentDAO;
  	}
  	
  	public void modify(Student student) {
  		if(verify(student.getSerialNumber())) {
  			studentDAO.update(student);
  		} else {
  			System.out.println("학생 정보가 존재하지 않습니다.");
  		}
  	}
  	
  	public boolean verify(String serialNumber) {
  		Student s = studentDAO.select(serialNumber);
  		return s != null ? true : false;
  	}
  }
  ```

  ```java
  package test.project.service;
  
  import test.project.dao.StudentDAO;
  import test.project.member.Student;
  
  public class StudentRegisterService {
  	private StudentDAO studentDAO;
  	
  	public StudentRegisterService(StudentDAO studentDAO) {
  		this.studentDAO = studentDAO;
  	}
  	
  	public void register(Student student) {
  		String serialNumber = student.getSerialNumber();
  		if(verify(serialNumber)) {
  			studentDAO.insert(student);
  		} else {
  			System.out.println("이미 존재하는 학생 정보입니다.");
  		}
  	}
  	
  	public boolean verify(String serialNumber) {
  		Student s = studentDAO.select(serialNumber);
  		return s == null ? true : false;
  	}
  }
  ```

  ```java
  package test.project.service;
  
  import test.project.dao.StudentDAO;
  import test.project.member.Student;
  
  public class StudentSelectService {
  	private StudentDAO studentDAO;
  	
  	public StudentSelectService(StudentDAO studentDAO) {
  		this.studentDAO = studentDAO;
  	}
  	
  	public Student select(String serialNumber) {
  		if(verify(serialNumber)) {
  			Student student = studentDAO.select(serialNumber);
  			return student;
  		} else {
  			System.out.println("학생 정보가 존재하지 않습니다.");
  			return null;
  		}
  	}
  	
  	public boolean verify(String serialNumber) {
  		Student s = studentDAO.select(serialNumber);
  		return s != null ? true : false;
  	}
  }
  ```

  ```java
  package test.project.service;
  
  import java.util.Map;
  
  import test.project.dao.StudentDAO;
  import test.project.member.Student;
  
  public class StudentAllSelectService {
  	private StudentDAO studentDAO;
  	
  	public StudentAllSelectService(StudentDAO studentDAO) {
  		this.studentDAO = studentDAO;
  	}
  	
  	public Map<String, Student> allSelect() {
  		return studentDAO.getStudentDB();
  	}
  }
  ```

  ```java
  package test.project.main;
  
  import java.util.Iterator;
  import java.util.Map;
  import java.util.Set;
  
  import org.springframework.context.support.GenericXmlApplicationContext;
  
  import test.project.assembler.StudentAssembler;
  import test.project.member.Student;
  import test.project.service.StudentAllSelectService;
  import test.project.service.StudentRegisterService;
  import test.project.service.StudentSelectService;
  
  public class MainClass {
  	public static void main(String[] args) {
  		String[] serialNumbers = {"1", "2", "3", "4", "5",
  							"6", "7", "8", "9", "10"};
  		String[] ids = {"aaa", "bbb", "ccc", "ddd", "eee",
  						"fff", "ggg", "hhh", "iii", "jjj"};
  		String[] passwords = {"a1a1a1a1", "b2b2b2b2", "c3c3c3c3",
  				"d4d4d4d4", "e5e5e5e5", "f6f6f6f6", "g7g7g7g7",
  				"h8h8h8h8", "i9i9i9i9", "j10j10j10"};
  		String[] names = {"Lee", "Kim", "Park", "Son", "Yoo",
  						"Gong", "Paek", "Ahn", "Seo", "Hwang"};
  		int[] ages = {18, 18, 18, 18, 18, 18, 18, 18, 18, 18};
  		
  		 StudentAssembler assembler = new StudentAssembler();
  		//GenericXmlApplicationContext ctx =
  		//		new GenericXmlApplicationContext("classpath:applicationContext.xml");
  		
  		 StudentRegisterService registerService = assembler.getRegisterService();
  		//StudentRegisterService registerService = ctx.getBean("registerService", StudentRegisterService.class);
  		for(int i = 0 ; i < serialNumbers.length ; i++) {
  			registerService.register(new Student(
  					serialNumbers[i], ids[i], passwords[i],
  					names[i], ages[i]));
  		}
  		
  		 StudentSelectService selectService = assembler.getSelectService();
  		// StudentSelectService selectService = ctx.getBean("selectService", StudentSelectService.class);
  		Student modifiedStudent = selectService.select("2");
  		System.out.print("SerialNumber : " + modifiedStudent.getSerialNumber() + "\t");
  		System.out.print("ID : " + modifiedStudent.getId() + "\t");
  		System.out.print("PW : " + modifiedStudent.getPassword() + "\t");
  		System.out.print("Name : " + modifiedStudent.getName() + "\t");
  		System.out.print("Age : " + modifiedStudent.getAge() + "\t");
  		System.out.println();
  		System.out.println();
  		
  		 StudentAllSelectService allSelectService = assembler.getAllSelectService();
  		// StudentAllSelectService allSelectService = ctx.getBean("allSelectService", StudentAllSelectService.class);
  		Map<String, Student> allStudent = allSelectService.allSelect();
  		Set<String> keys = allStudent.keySet();
  		Iterator<String> iterator = keys.iterator();
  		
  		while(iterator.hasNext()) {
  			String key = iterator.next();
  			Student student = allStudent.get(key);
  			System.out.print("SerialNumber : " + student.getSerialNumber() + "\t");
  			System.out.print("ID : " + student.getId() + "\t");
  			System.out.print("PW : " + student.getPassword() + "\t");
  			System.out.print("Name : " + student.getName() + "\t");
  			System.out.print("Age : " + student.getAge() + "\t");
  			System.out.println();
  		}
  	}
  }
  ```

- 이렇게 코드상으로 StudentDAO 객체를 각각의 Service 객체에 주입을 해줌으로서
  각각의 Service 객체가 StudentDAO 객체의 능력을 가질 수 있다.
  이러한 자바 코드를 스프링 방식으로 바꾸려면 위에 주석되어 있는 부분이랑 그 밑의 부분이랑
  바꾸면 된다.