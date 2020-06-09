package 예제;

import java.util.Collection;
import java.util.HashMap;

public class Test_hashmap {
    public static void main(String[] args) {
        HashMap<String, String> map = new HashMap<String, String>();
        HashMap<String, String> map2 = new HashMap<String, String>();
        map.put("English", "영어");
        map.put("World", "세계");
        map2.put("hello", "안녕");
   

        System.out.println("English의 키값 : " + map.get("English"));        
        //value값을 얻을수있음, key 값
        
        System.out.println("Englishd의 있나 없나 확인 =" + map.containsKey("English"));
        //맵(Map)에 해당 키(key)가 있는지를 조사하여 그 결과값을 리턴한다.
        
        System.out.println("value 값 반환 : " + map.values());
        System.out.println("삭제되기전 사이즈: " + map.size());
        

        System.out.println("삭제되고 남은 value 값: " + map.remove("English"));
        //맵의 항복삭제 , key,value 삭제하고 value값 리턴
        
        System.out.println("삭제된 후 사이즈: " + map.size());
        //value 크기보여줌
        System.out.println("value 값 반환 : " + map.values());
        //value 보여줌
        
        map.putAll(map2); 
        System.out.println(map);
        }
}
