package JAVA_23;

import java.util.Arrays;

public class Array_Sort {
	public static void main(String[] args) {
	String temp = "";
	String answer = "";
	
	int[] arr2 = {1,2,3,4};
	int[] arr = {1,2,3};

	Arrays.sort(arr2);
	Arrays.sort(arr);
	int i =0;
	while( i < arr2.length){
        if(!arr2[i].equals(arr[i])){
            temp = arr[i];
            break;
        }else{
            i++;
        }
        
        if(!temp.equals("")){
            answer = temp;
        }else{
            answer = arr[arr.length-1];
        }
        
        return answer;
    }
    }
	
	
	
	
	
}


