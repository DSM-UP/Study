const studentInfo = document.querySelector('#student-info');
const dateInfo = document.querySelector('#date-info');
const selectBtn = document.querySelector('#section-select-button');
const studentSpace = document.querySelector('#section-student-space');
const students = document.querySelectorAll('.std1-1');

const dateInfos = document.querySelector('#date-informations');
const stuInfos = document.querySelector('#student-informations');
const stuInfoChart = document.querySelector('#information-chart-student');
const dateInfoChart =document.querySelector('#information-chart-date');

function selectBtnClick() {
    studentInfo.classList.toggle('hide');
    dateInfo.classList.toggle('hide');
    studentSpace.classList.toggle('hide');
    dateInfos.classList.toggle('hide');
    stuInfos.classList.toggle('hide');
    stuInfoChart.classList.toggle('hide');
    dateInfoChart.classList.toggle('hide');
    if (studentInfo.classList.contains('hide')) {
        selectBtn.value = '학생별로 보기';
    }
    else {
        selectBtn.value = '날짜별로 보기';
    }
}

function studentBtnClick() {
    students.forEach(function(student) {
        if (student !== this) {
            student.classList.remove('select');
        }
    })
    this.classList.add('select');
}

selectBtn.addEventListener("click", selectBtnClick);
students.forEach(function(student){ 
    student.addEventListener("click", studentBtnClick); 
});
