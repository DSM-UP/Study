package Properties_2020_07_01;

import java.io.FileReader;
import java.net.URLDecoder;
import java.util.*;

public class Properties_Ex {
	
	public static void main(String[] args) throws Exception{
		Properties properties = new Properties();
		
		String path = Properties_Ex.class.getResource("database.properties").getPath();
		path = URLDecoder.decode(path,"utf-8");
		properties.load(new FileReader(path));
		
		String dirver =properties.getProperty("dirver");
		String url =properties.getProperty("url");
		String username =properties.getProperty("username");
		String password =properties.getProperty("password");

		System.out.println("driver: "+ dirver);
		System.out.println("url: "+ url);
		System.out.println("username: "+ username);
		System.out.println("password: "+ password);

		
	}
}
