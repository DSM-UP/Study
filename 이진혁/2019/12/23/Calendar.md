## Calendar

- 이번 Calendar 프로젝트는 출석부 속에 속한 기능을 만들기 위해서 만들게 되었다.
- 이번 Calendar.js 코드는 두 개의 외부 함수로 이루어져 있으며 그 안에 내부 함수 두 개가 내장되어 있다.
- 사실 모든 함수는 한 번만 쓰이므로 함수를 하나로 모두 뭉칠 수 있지만 가독성을 위해서 나눴다.

- 아래는 두 개의 함수를 소개할 예정이다.



##### CreateAMonthlyCalendar

- 첫 번째 함수인 CreateAMonthlyCalendar 함수는 말 그대로 월별 달력을 만드는 함수이다.

- 사실 이 함수가 이 Calendar.js의 몸체 함수이며 이 함수 안에서 다른 함수들이 호출되고 결국엔 달력으로 된 6*7 모양의 배열이 리턴된다.

- CreateAMonthlyCalendar 함수의 코드는 아래와 같다.

  ```javascript
  var CreateAMonthlyCalendar = function(year, month) {
      var arr = [[],[],[],[],[],[]];
      var oneMonthOneDay = January1stMeasurement(year);
      var count = 0;
      var lastDay = 0;
  
      function FirstDay(year, month, day) {
          var check = 0;
          if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
              check = 1;
  
          var arr = [0, 31, 28+check, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
          for(var i = 0 ; i < month ; i++)
              day += arr[i];
  
          var temp = day % 7;
          if(temp == 6) temp = 0;
          else temp++;
          return temp;
      }
  
      function LastDay(year, month) {
          var check = 0;
          if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
              check = 1;
          
          var arr = [0, 31, 28+check, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          return arr[month];
      }
  
      oneMonthOneDay = FirstDay(year, month, oneMonthOneDay);
      lastDay = LastDay(year, month);
  
      for(var i = 0 ; i < 6 ; i++) {
          for(var j = 0 ; j < 7 ; j++) {
              if((i == 0 && j < oneMonthOneDay) || count >= lastDay)
                  arr[i][j] = "";
              else {
                  arr[i][j] = ++count;
              }
          }
      }
      return arr;
  }
  ```

- 일단 이 함수의 시작은 년도와 월을 입력 받는 것으로부터 시작된다.
- 실제로 출석부에서 달력을 출력할 때 현재의 날짜 즉 년도, 월을 받아서 실행할 것이기 때문에 년도와 월을 매개변수로 받는다.
- 시작부터 arr라는 이차원 배열을 선언한다.
- 이때 문제가 생겼었는데 javascript에서 일반적인 다른 언어들과는 다른 배열 선언방식을 지원한다는 것이다.
- 당연히 처음에는 var라는 자료형이 모두 받아주는 줄 알고 var arr; 라는 선언만 하고 사용했었는데 당연히 오류가 발생하였고, 인터넷을 찾아보니 다차원 배열을 [[],[]] 로 선언한다길래 해봤는데 arr[2] [0] 에서 오류가 발생하여 한참동안 찾아헤맸다.
- 결국엔 다차원 배열을 선언할 때는 x*y 만큼의 배열을 선언할 때 [] 안에 []를 x만큼 주어야 한다는 것을 알게 되었다. 이 깨달음 이후에 arr[2] [0] 이 왜 오류가 발생하는지도 자연스럽게 알게 되었다. [[],[]] 에서 [] 안의 첫 번째 []가 [0] [y] 이고 두 번째 []가 [1] [y] 이므로 [2] [0] 은 없으니 당연히 오류가 발생할 수 밖에 없었다.



- 그 다음줄부터 알 수 없는 함수가 사용되는데 일단 지금은 저 함수가 매개변수로 보낸 년도에 따른 1월 1일의 요일을 리턴해준다는 것만 알면 되겠다.
- 다음에 나오는 두 가지의 내부 함수는 넘기고 아래를 보면 바로 그 내부함수를 사용하는 것을 알 수 있다.

- 저 FirstDay 라는 함수만 가져와서 본다면 아래와 같다.

  ```javascript
  function FirstDay(year, month, day) {
      var check = 0;
      if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
          check = 1;
  
      var arr = [0, 31, 28+check, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
      for(var i = 0 ; i < month ; i++)
          day += arr[i];
  
      var temp = day % 7;
      if(temp == 6) temp = 0;
      else temp++;
      return temp;
  }
  ```

- 년도, 월, 일을 매개변수로 받아서 함수를 진행한다.

- 여기서 년도는 서버에서 받아온 system 시간이고 월도 보내준 월로 동일하다.

- 하지만 일은 아까 알 수 없는 함수에서 얻어온 일을 사용한다.

- 이 함수에서는 FirstDay() 라는 이름 그대로 선택한 월의 1일의 요일을 숫자로 리턴한다.

- 여기서 일-월-화-수-목-금-토 순으로 이루어지며 각각 0-1-2-3-4-5-6 으로 가중치가 존재한다.

- 배열 index 0부터 index month-1 까지 존재하는 요소들을 day에 더해서 7로 나누어 나머지를 리턴한다.

- 그리고 마지막에 의문의 코드가 존재하는데 그는 월-화-수-목-금-토-일을 일-월-화-수-목-금-토로 바꾸는 과정속에서 생긴 코드이다.

  ```javascript
  ...
  var temp = day % 7;
  if(temp == 6) temp = 0;
  else temp++;
  return temp;
  }
  ```

- 다음 코드는 바로 LastDay() 라는 함수이다.

- 이름에 걸맞게 그 달의 마지막 날짜를 구한다.

  ```javascript
  function LastDay(year, month) {
      var check = 0;
      if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
          check = 1;
  
      var arr = [0, 31, 28+check, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      return arr[month];
  }
  ```

- 얼핏보면 FirstDay() 함수와 비슷해보이지만 (사실 비슷하다) 좀 더 간단한 구조를 가지고 있다.

- 다음엔 이중 for문을 이용해서 공백과 count를 적절히 배열에 추가하여 그 배열 즉, arr를 리턴한다.



##### January1stMeasurement

- 아까 위에서 알 수 없는 함수가 바로 이 함수이다.

- 일단 아래를 통해 코드를 살펴보자.

  ```javascript
  var January1stMeasurement = function(year) {
      var yun = 0;
      var yoil = year-1;
      for(var i = 1 ; i <= year ; i++)
          if((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0))
              yun++;
      yoil += yun;
  
      if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
          yoil -= 1;
      return yoil % 7;
  }
  ```

- 이 함수는 말 그대로 1월 1일의 요일을 구하는 함수이다.
- 년도를 매개변수로 받아서 1년 1월 1일의 요일이 월요일이라는 것을 이용해서 입력한 년도-기준년도(1) + 윤년의 횟수를 이용해서 구한다.
- 어떠한 년도의 1일이 수요일이라면 그 다음 년도의 1일은 목요일이다. 하지만 윤년이 존재한다면 하루 더 늘어서 1일이 금요일이 된다. 따라서 윤년이 아니면 1일을 더하고 윤년이라면 2일을 더해서 그것을 7로 나누어 입력한 년도의 1월 1일의 요일을 리턴한다.



- 오늘의 날짜인 2019년과 12월을 입력하면 아래와 같이 출력된다.

  ```javascript
  function Calculation(yoil) {
      switch(yoil) {
          case 0 : return "월";
          case 1 : return "화";
          case 2 : return "수";
          case 3 : return "목";
          case 4 : return "금";
          case 5 : return "토";
          case 6 : return "일";
          default : return "공백";
      }
  }
  
  var January1stMeasurement = function(year) {
      var yun = 0;
      var yoil = year-1;
      for(var i = 1 ; i <= year ; i++)
          if((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0))
              yun++;
      yoil += yun;
  
      if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
          yoil -= 1;
      return yoil % 7;
  }
  
  var CreateAMonthlyCalendar = function(year, month) {
      var arr = [[],[],[],[],[],[]];
      var oneMonthOneDay = January1stMeasurement(year);
      var count = 0;
      var lastDay = 0;
  
      function FirstDay(year, month, day) {
          var check = 0;
          if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
              check = 1;
  
          var arr = [0, 31, 28+check, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
          for(var i = 0 ; i < month ; i++)
              day += arr[i];
  
          var temp = day % 7;
          if(temp == 6) temp = 0;
          else temp++;
          return temp;
      }
  
      function LastDay(year, month) {
          var check = 0;
          if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
              check = 1;
          
          var arr = [0, 31, 28+check, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          return arr[month];
      }
  
      oneMonthOneDay = FirstDay(year, month, oneMonthOneDay);
      lastDay = LastDay(year, month);
  
      for(var i = 0 ; i < 6 ; i++) {
          for(var j = 0 ; j < 7 ; j++) {
              if((i == 0 && j < oneMonthOneDay) || count >= lastDay)
                  arr[i][j] = "";
              else {
                  arr[i][j] = ++count;
              }
          }
      }
      return arr;
  }
  
  var calendar = CreateAMonthlyCalendar(2019,12);
  
  console.log(calendar);
  ```

###### 출력 결과

```javascript
(6) [Array(7), Array(7), Array(7), Array(7), Array(7), Array(7)]
0: (7) [1, 2, 3, 4, 5, 6, 7]
1: (7) [8, 9, 10, 11, 12, 13, 14]
2: (7) [15, 16, 17, 18, 19, 20, 21]
3: (7) [22, 23, 24, 25, 26, 27, 28]
4: (7) [29, 30, 31, "", "", "", ""]
5: (7) ["", "", "", "", "", "", ""]
length: 6
__proto__: Array(0)
```

- 2019년 12월 1일의 달력이 출력되었다.
- 1일이 일요일이라는 것을 알 수 있다.

