//make calendar data
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
        return arr;
    }

    oneMonthOneDay = FirstDay(year, month, oneMonthOneDay);
    lastDay = LastDay(year, month);

    for(var i = 0 ; i < 6 ; i++) {
        for(var j = 0 ; j < 7 ; j++) {
            if((i == 0 && j < oneMonthOneDay) || count >= lastDay[month])
                arr[i][j] = "";
            else {
                arr[i][j] = ++count;
            }
        }
    }
    return arr;
}



//draw calendar

var GetTeacher = function(month, date, number) {
    if(date == ''){
        return '';
    }
    else {
        return '손정우'
    }
}


function Calendar(Element, year, month) {
    Element.innerHTML = `
    <link rel="stylesheet" href="calendar.css">
    <div class='Calendar'>
    <ul class='Week'>
        <li class="DayOfWeek Sunday">일</li>
        <li class="DayOfWeek Monday">월</li>
        <li class="DayOfWeek Tuseday">화</li>
        <li class="DayOfWeek Wednesday">수</li>
        <li class="DayOfWeek Thursday">목</li>
        <li class="DayOfWeek Friday">금</li>
        <li class="DayOfWeek Saturday">토</li>
    </ul>
    <div class="Days">
        <div class="Week">
            <div class="Date">
                <span class="DataNumber">
                    5
                </span>
                <ul class="Teachers">
                    <li class="Teacher1">손정우</li>
                    <li class="Teacher2">유시온</li>
                    <li class="Teacher3">이진혁</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;

    this.calendarData = CreateAMonthlyCalendar(year, month);
    this.calendar = Element.getElementsByClassName('Days')[0];
    this.week = this.calendar.querySelector('.Week');
    this.date = this.week.querySelector('.Date');

    this.setTeacher = function(date, month) {
        var teachers = date.querySelector('.Teachers').getElementsByTagName('li');
        for(var i = 0; i < 3; i++) {
            teachers[i].innerHTML = GetTeacher(month, date.querySelector('.DataNumber').innerHTML, i);
        }
    }

    this.setDates  = function(week, dateDatas) {
        var dates = week.getElementsByClassName('Date');
        for(var i = 0; i < 7; i++){
            dates[i].querySelector('.DataNumber').innerHTML = dateDatas[i];
            this.setTeacher(dates[i], 1)
        }
    }

    for(var i = 1; i < 7; i++) {
        var newDate = this.date.cloneNode(true);
        if(i == 6) {
            newDate.className = 'Date weekend';
        }
        this.week.appendChild(newDate);
    }

    this.weeks = [this.week];
    for(var i = 1; i < 6; i++){
        this.weeks.push(this.week.cloneNode(true));
        this.calendar.appendChild(this.weeks[i]);  
    }

    for(i = 0; i < 6; i++) {
        this.setDates(this.weeks[i], this.calendarData[i]);
    }


}
