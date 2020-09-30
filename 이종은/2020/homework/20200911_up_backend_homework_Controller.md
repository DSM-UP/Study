### 내용

백엔드 은행 서비스 만들기 

번호표 뽑기 -> 숫자 1씩 늘어나게 

잔액 조회 (학번) -> 남은 돈 출금         

(학번, 돈) -> 남은 돈 입금          

(학번, 돈) -> 남은돈



### BankController

```java
package com.DSM.Bank.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Bank")
public class BankController {
    static private int testMoney=5000;
    private int ticet=1;

    @RequestMapping("/numberTicet")
    public String printNum(){
        return Integer.toString(ticet++);
    }

    //입금
    @RequestMapping("/MoneySum")
    public int Money_Sum(@RequestParam("number") int number, @RequestParam("money") int money){
        if(number==1212){
            int M_oney=MoneySum(userone,money);
            return M_oney;
        }else{
            return 404;
        }
    }
    
    //정보
    static User userone = new User();
    @RequestMapping("/UserInfo")
    public User user(){
        userone.setMoney(1000);
        userone.setName("이종은");
        userone.setNumber(1212);
        return userone;
    }
    
    //출금
    @RequestMapping("/MoneySub")
    public int MoneySub(@RequestParam("number") int number, @RequestParam("money") int money){
        if(number==1212){
            int Money = Money_Sub(userone,money);
            //int Money=BankService.MoneySub(user, money);
            return Money;
        }else{
            return 404;
        }
    }
    
    static public int ticet_num() {
        int num = -1;
        num++;
        return num;
    }

    static public int MoneySum(User userone,int money){
       testMoney += money;
        return testMoney;
    }

    static public int Money_Sub(User userone,int money){
        testMoney -= money;
        return testMoney;
    }
}
```



### User

```java
package com.DSM.Bank.Controller;

public class User {
    private int money;
    private String name;
    private int number;

    /*User(int money, String name, int number){
        this.money=money;
        this.name=name;
        this.number=number;
    }*/

    public void setMoney(int money) {
        this.money = money;
    }

    public int getMoney() {
        return money;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getNumber() {
        return number;
    }
}
```