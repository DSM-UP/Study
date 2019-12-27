## Calendar - 3

- 이번에는 저번에 만들었던 캘린더에 이어서 6*7모양의 달력, 이차원 배열에 Day라는 객체를 넣는 형식을 사용하였다.

- 예전에는 그냥 숫자만 넣어서 달력을 완성시켰지만 빨간날, 파란날, 쉬는날, 회색 달력 등 여러 가지 요소를 넣어야 했기에 고치게 되었다.

- 아래의 코드는 새롭게 완성된 Calendar_ver2의 코드이다.

  ```javascript
  function FindYoilOfOneMonthOneDay(year) {
      var yun = 0;
      var yoil = year-1;
      for(var i = 1 ; i <= year ; i++)
          if((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0))
              yun++;
      yoil += yun;
  
      if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
          yoil -= 1;
  
      var temp = yoil % 7;
      if(temp == 6) temp = 0;
      else temp++;
      console.log("OneMonthOneDay : " + temp);
      return temp;
  }
  
  function ThisMonthFirstDay(year, month) {
      var day = FindYoilOfOneMonthOneDay(year);
      var yun = 0;
      if(((year%4 == 0) && (year%100 != 0)) || (year%400 == 0))
          yun = 1;
      var arr = [31, 28+yun, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      for(var i = 0 ; i < month-1 ; i++)
          day += arr[i];
      console.log("FirstDay : " + day%7);
      return day % 7;
  }
  
  function LastDay(year, month) {
      if(month < 1) {
          year-=1;
          month = 12;
      }
      var yun = 0;
      if(((year%4 == 0 ) && (year%100 != 0)) || (year%400 == 0))
          yun = 1;
      var arr = [31, 28+yun, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      console.log("LastDay : " + arr[month-1]);
      return arr[month-1];
  }
  
  function Day(month, day, color, special) {
      this.month = month;
      this.day = day;
      this.color = color;
      this.special = special;
  }
  
  function CreateAMonthlyCalendar(year, month) {
      var calendar = [[],[],[],[],[],[]];
  
      var firstDay = ThisMonthFirstDay(year, month);
      var lastDay = LastDay(year, month);
      var beforeLastDay = LastDay(year, month-1) - firstDay + 1;
      var date = 0;
      var nextDate = 0;
  
      for(var i = 0 ; i < 6 ; i++) {
          for(var j = 0 ; j < 7 ; j++) {
              if(i == 0 && j < firstDay)
                  calendar[i][j] = new Day(month-1, beforeLastDay+j, "GREY", "");
              else if(date >= lastDay)
                  calendar[i][j] = new Day(month+1, ++nextDate, "GREY", "");
              else {
                  if(j == 0)
                      calendar[i][j] = new Day(month, ++date, "RED", "");
                  else if(j == 6)
                      calendar[i][j] = new Day(month, ++date, "BLUE", "");
                  else
                      calendar[i][j] = new Day(month, ++date, "BLACK", "");
              }
          }
      }
  
      return calendar;
  }
  
  var calendar = CreateAMonthlyCalendar(2019, 12);
  
  console.log(calendar);
  ```

- 이것을 실제로 console.log를 보면 아래와 같다.

  ```javascript
  (6) [Array(7), Array(7), Array(7), Array(7), Array(7), Array(7)]
  0: Array(7)
  0: Day {month: 12, day: 1, color: "RED", special: ""}
  1: Day {month: 12, day: 2, color: "BLACK", special: ""}
  2: Day {month: 12, day: 3, color: "BLACK", special: ""}
  3: Day {month: 12, day: 4, color: "BLACK", special: ""}
  4: Day {month: 12, day: 5, color: "BLACK", special: ""}
  5: Day {month: 12, day: 6, color: "BLACK", special: ""}
  6: Day {month: 12, day: 7, color: "BLUE", special: ""}
  length: 7
  __proto__: Array(0)
  1: Array(7)
  0: Day {month: 12, day: 8, color: "RED", special: ""}
  1: Day {month: 12, day: 9, color: "BLACK", special: ""}
  2: Day {month: 12, day: 10, color: "BLACK", special: ""}
  3: Day {month: 12, day: 11, color: "BLACK", special: ""}
  4: Day {month: 12, day: 12, color: "BLACK", special: ""}
  5: Day {month: 12, day: 13, color: "BLACK", special: ""}
  6: Day {month: 12, day: 14, color: "BLUE", special: ""}
  length: 7
  __proto__: Array(0)
  2: Array(7)
  0: Day {month: 12, day: 15, color: "RED", special: ""}
  1: Day {month: 12, day: 16, color: "BLACK", special: ""}
  2: Day {month: 12, day: 17, color: "BLACK", special: ""}
  3: Day {month: 12, day: 18, color: "BLACK", special: ""}
  4: Day {month: 12, day: 19, color: "BLACK", special: ""}
  5: Day {month: 12, day: 20, color: "BLACK", special: ""}
  6: Day {month: 12, day: 21, color: "BLUE", special: ""}
  length: 7
  __proto__: Array(0)
  3: Array(7)
  0: Day {month: 12, day: 22, color: "RED", special: ""}
  1: Day {month: 12, day: 23, color: "BLACK", special: ""}
  2: Day {month: 12, day: 24, color: "BLACK", special: ""}
  3: Day {month: 12, day: 25, color: "BLACK", special: ""}
  4: Day {month: 12, day: 26, color: "BLACK", special: ""}
  5: Day {month: 12, day: 27, color: "BLACK", special: ""}
  6: Day {month: 12, day: 28, color: "BLUE", special: ""}
  length: 7
  __proto__: Array(0)
  4: Array(7)
  0: Day {month: 12, day: 29, color: "RED", special: ""}
  1: Day {month: 12, day: 30, color: "BLACK", special: ""}
  2: Day {month: 12, day: 31, color: "BLACK", special: ""}
  3: Day {month: 13, day: 1, color: "GREY", special: ""}
  4: Day {month: 13, day: 2, color: "GREY", special: ""}
  5: Day {month: 13, day: 3, color: "GREY", special: ""}
  6: Day {month: 13, day: 4, color: "GREY", special: ""}
  length: 7
  __proto__: Array(0)
  5: Array(7)
  0: Day {month: 13, day: 5, color: "GREY", special: ""}
  1: Day {month: 13, day: 6, color: "GREY", special: ""}
  2: Day {month: 13, day: 7, color: "GREY", special: ""}
  3: Day {month: 13, day: 8, color: "GREY", special: ""}
  4: Day {month: 13, day: 9, color: "GREY", special: ""}
  5: Day {month: 13, day: 10, color: "GREY", special: ""}
  6: Day {month: 13, day: 11, color: "GREY", special: ""}
  length: 7
  __proto__: Array(0)
  length: 6
  __proto__: Array(0)
  ```

- 위와 같이 더러운 console.log가 뜨게 된다.
- 하지만 확실하게 알 수 있다.
- 6*7 의 이차원 배열 안에 Day 라는 객체가 존재하는데 그 객체의 프로퍼티에는 month, day, color, special이 있으며 month는 그 일의 월, day는 그 일의 일, color는 빨간날, 파란날, 검정(일반), 회색(전달이나 다음달)을 알 수 있고 special은 예끼치 못한 공휴일이나 자습을 쉬는 날을 위해서 넣어두었는데 이 부분은 나중에 학교 달력을 파싱하여 처리할 것이므로 비어두었다.
- 딱히 문제나 힘든 점은 없었다. 하지만 클린 코드로 짜지 못한점, 그리고 javascript에 완벽하게 능숙하지 못한 점이 문제라고 할 수 있겠다.