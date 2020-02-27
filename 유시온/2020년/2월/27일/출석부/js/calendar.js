function set_calendar() {

    function FindYoilOfOneMonthOneDay(year) {
        var yun = 0;
        var yoil = year - 1;
        for (var i = 1; i <= year; i++)
            if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0))
                yun++;
        yoil += yun;

        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
            yoil -= 1;

        var temp = yoil % 7;
        if (temp == 6) temp = 0;
        else temp++;
        //console.log("OneMonthOneDay : " + temp);
        return temp;
    }

    function ThisMonthFirstDay(year, month) {
        var day = FindYoilOfOneMonthOneDay(year);
        var yun = 0;
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
            yun = 1;
        var arr = [31, 28 + yun, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (var i = 0; i < month - 1; i++)
            day += arr[i];
        //console.log("FirstDay : " + day%7);
        return day % 7;
    }

    function LastDay(year, month) {
        if (month < 1) {
            year -= 1;
            month = 12;
        }
        var yun = 0;
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
            yun = 1;
        var arr = [31, 28 + yun, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        //console.log("LastDay : " + arr[month-1]);
        return arr[month - 1];
    }

    function DayData(month, day, color, special) {
        this.month = month;
        this.day = day;
        this.color = color;
        this.special = special;
    }

    function CreateAMonthlyCalendar(year, month) {
        var calendar = [[], [], [], [], [], []];

        var firstDay = ThisMonthFirstDay(year, month);
        var lastDay = LastDay(year, month);
        var beforeLastDay = LastDay(year, month - 1) - firstDay + 1;
        var date = 0;
        var nextDate = 0;

        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 7; j++) {
                if (i == 0 && j < firstDay)
                    calendar[i][j] = new DayData(month - 1, beforeLastDay + j, "GRAY", "");
                else if (date >= lastDay)
                    calendar[i][j] = new DayData(month + 1, ++nextDate, "GRAY", "");
                else {
                    if (j == 0)
                        calendar[i][j] = new DayData(month, ++date, "RED", "");
                    else if (j == 6)
                        calendar[i][j] = new DayData(month, ++date, "BLUE", "");
                    else
                        calendar[i][j] = new DayData(month, ++date, "BLACK", "");
                }
            }
        }

        return calendar;
    }









    function DayObj(m_day) {
        var day = m_day;
        function removeClass(class_name){
            day.classList.remove(class_name);
        }

        function addClass(class_name){
            day.classList.add(class_name);
        }
        this.get_day_number = function () {
            return day.childNodes[1].firstChild.nodeValue;
        }
        this.set_day_number = function (value) {
            value = value.toString();
            value = value.length == 2 ? value : new Array(2 - value.length + 1).join('0') + value;
            day.childNodes[1].firstChild.nodeValue = value;
        }

        this.setColor = function(color){
            if(color === "GRAY"){
                addClass("GrayDay");
            } else if(color === "BLACK"){
                const date = new Date();
                addClass("Ordinary");
                if(date.getDate() == this.get_day_number()){
                    addClass("Today");
                }
            }
            else {
                addClass("Special");
            }
        }

        this.clone = function () {
            return new DayObj(day.cloneNode(true));
        }

        this.get_node = function () {
            return day;
        }

        function setupClass(){
            removeClass("GrayDay");
            removeClass("Special");
            removeClass("Ordinary");
        }
        setupClass();
    }

    function make_days(days, Day) {//만든 day들을 담을 배열, 복사할 원본 day
        let calendar = CreateAMonthlyCalendar(2020, 2);
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 5; j++) {
                if (i != 0 || j != 0) {
                    days[i][j] = Day.clone();
                }
                else {
                    days[i][j] = Day;
                }
                days[i][j].set_day_number(calendar[i][j+1].day);
                days[i][j].setColor(calendar[i][j+1].color);

            }
        }

    }


    let Day = new DayObj(document.querySelector(".Day"));
    let Weeks = document.querySelectorAll(".Week");

    let days = [[], [], [], [], [], []];
    make_days(days, Day);
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 5; j++) {
            if (i != 0 || j != 0) {
                Weeks[i].appendChild(days[i][j].get_node());
            }
        }
    }
}

function set_event(){
    //토글 스위치
    var toggle_btn = document.getElementsByClassName("Toggle_BTN");
    toggle_btn[0].addEventListener('click', function (event) {
        if (event.target.checked) {
            document.querySelectorAll('.schedule').forEach(function (schedule) {
                schedule.style.display = "none";
            });
            document.querySelectorAll('.teachers').forEach(function (schedule) {
                schedule.style.display = "block";
            });
        }
        else {
            document.querySelectorAll('.schedule').forEach(function (schedule) {
                schedule.style.display = "block";
            });
            document.querySelectorAll('.teachers').forEach(function (schedule) {
                schedule.style.display = "none";
            });
        }
    });
}



function makeCalendar(c_obj) {
    let inner_html_text = `<!DOCTYPE html>

    <link rel="stylesheet" href="calendar.css">
    <div id="Calendar_Container">
        <div id="Calendar_Header">
            <div class="Today_Text">
                <div class="Year_Text">2020</div>년
                <div class="Month_Text">01</div>월
                <div class="Day_Text">15</div>일
                (<div class="Day_Of_The_WeeK">수</div>)
            </div>
            <div class="Content_Changer">
                일정
                <label class="Toggle_way">
                    <input type="checkbox" class="Toggle_BTN" name="" value="" />
                    <span class="Toggle"></span>
                </label>
                담당자
            </div>
        </div>


        <div id="Calendar_Main"> 
            <div class="con_for_size">
                <div class="Names_Five_Days">
                    <div class="Name_Day Monday">월</div>
                    <div class="Name_Day Tuesday">화</div>
                    <div class="Name_Day Wednesday">수</div>
                    <div class="Name_Day Thursday">목</div>
                    <div class="Name_Day Friday">금</div>
                </div>
               
                <div class="Calendar_Content" >
                    
                    <div class="Week">
                        <div class="Day Ordinary">
                            <div class="Day_Number">30</div>
                            <div class="Content">
                                <div class="schedule ">화요일 방과후</div>
                                <div class="teachers">
                                    <div class="teacher1">손정우</div>
                                    <div class="teacher2">유시온</div>
                                    <div class="teacher3">이진혁</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Week">
                    </div>
                    <div class="Week">
                    </div>
                    <div class="Week">
                    </div>
                    <div class="Week">
                    </div>
                    <div class="Week">
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
`
    c_obj.innerHTML = inner_html_text;
    set_calendar();
    set_event();
}

makeCalendar(document.querySelector('.calendar'));