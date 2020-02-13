const dateButtonMon = document.querySelector('#date-button-mon');
const dateButtonTue = document.querySelector('#date-button-tue');
const dateButtonEtc = document.querySelector('#date-button-etc');

const teacherChangeBtn = document.querySelector('#teacher-change-mode');
const scheduleChangeBtn = document.querySelector('#schedule-change-mode');
const scheduleModifyBtn = document.querySelector('#schedule-modify-button');
const scheduleBox2 = document.querySelector('#schedule-box-2');

const secondFloorTeacherLabel = document.querySelector('#second-floor-teacher-label');
const thirdFloorTeacherLabel = document.querySelector('#third-floor-teacher-label');
const forthFloorTeacherLabel = document.querySelector('#forth-floor-teacher-label');
const secondFloorTeacher = document.querySelector('#second-floor-teacher');
const thirdFloorTeacher = document.querySelector('#third-floor-teacher');
const forthFloorTeacher = document.querySelector('#forth-floor-teacher');

const teacherBox = document.querySelector('#teacher-box');
const teacherSelect2 = document.querySelector('#teacher-select-2');
const teacherSelect3 = document.querySelector('#teacher-select-3');
const teacherModifyButton = document.querySelector('#teacher-modify-button');

const teacherSelect2DivSecondLabel = document.querySelector('#teacher-select-2-div-second-label')
const teacherSelect2DivThirdLabel = document.querySelector('#teacher-select-2-div-third-label')
const teacherSelect2DivForthLabel = document.querySelector('#teacher-select-2-div-forth-label')
const teacherSelect2DivSecond = document.querySelector('#teacher-select-2-div-second')
const teacherSelect2DivThird = document.querySelector('#teacher-select-2-div-third')
const teacherSelect2DivForth = document.querySelector('#teacher-select-2-div-forth')

const teacherSelect3DivSecondLabel = document.querySelector('#teacher-select-3-div-second-label')
const teacherSelect3DivThirdLabel = document.querySelector('#teacher-select-3-div-third-label')
const teacherSelect3DivForthLabel = document.querySelector('#teacher-select-3-div-forth-label')
const teacherSelect3DivSecond = document.querySelector('#teacher-select-3-div-second')
const teacherSelect3DivThird = document.querySelector('#teacher-select-3-div-third')
const teacherSelect3DivForth = document.querySelector('#teacher-select-3-div-forth')

function sCB_Click() {
    scheduleChangeBtn.classList.toggle('modify-mode');
    dateButtonMon.classList.toggle('hide');
    dateButtonTue.classList.toggle('hide');
    dateButtonEtc.classList.toggle('hide');
    scheduleModifyBtn.classList.toggle('showSecondBox');
    scheduleBox2.classList.toggle('hide');
    if(scheduleChangeBtn.classList.contains('modify-mode')) {
        scheduleChangeBtn.value = '수정모드'
        scheduleModifyBtn.value = '교체'
    }
    else {
        scheduleChangeBtn.value = '교체모드'
        scheduleModifyBtn.value = '수정'
    }
}

function tCB_Click() {
    teacherChangeBtn.classList.toggle('modify-mode');
    secondFloorTeacherLabel.classList.toggle('hide');
    thirdFloorTeacherLabel.classList.toggle('hide');
    forthFloorTeacherLabel.classList.toggle('hide');
    secondFloorTeacher.classList.toggle('hide');
    thirdFloorTeacher.classList.toggle('hide');
    forthFloorTeacher.classList.toggle('hide');
    teacherBox.classList.toggle('hide');
    teacherSelect2.classList.toggle('hide');
    teacherSelect3.classList.toggle('hide');
    teacherModifyButton.classList.toggle('modify-button-mode');
    if(teacherChangeBtn.classList.contains('modify-mode')) {
        teacherChangeBtn.value = '수정모드'
    }
    else {
        teacherChangeBtn.value = '교체모드'
    }
}

function dBM() {
    dateButtonMon.classList.add('select');
    dateButtonTue.classList.remove('select');
    dateButtonEtc.classList.remove('select');
}

function dBT() {
    dateButtonTue.classList.add('select');
    dateButtonEtc.classList.remove('select');
    dateButtonMon.classList.remove('select');
}

function dBE() {
    dateButtonEtc.classList.add('select');
    dateButtonMon.classList.remove('select');
    dateButtonTue.classList.remove('select');
}

function tS2DS() {
    teacherSelect2DivSecond.classList.add('select');
    teacherSelect2DivThird.classList.remove('select');
    teacherSelect2DivForth.classList.remove('select');
    teacherSelect2DivSecondLabel.classList.add('select');
    teacherSelect2DivThirdLabel.classList.remove('select');
    teacherSelect2DivForthLabel.classList.remove('select');
}

function tS2DT() {
    teacherSelect2DivSecond.classList.remove('select');
    teacherSelect2DivThird.classList.add('select');
    teacherSelect2DivForth.classList.remove('select');
    teacherSelect2DivSecondLabel.classList.remove('select');
    teacherSelect2DivThirdLabel.classList.add('select');
    teacherSelect2DivForthLabel.classList.remove('select');
}

function tS2DF() {
    teacherSelect2DivSecond.classList.remove('select');
    teacherSelect2DivThird.classList.remove('select');
    teacherSelect2DivForth.classList.add('select');
    teacherSelect2DivSecondLabel.classList.remove('select');
    teacherSelect2DivThirdLabel.classList.remove('select');
    teacherSelect2DivForthLabel.classList.add('select');
}

function tS3DS() {
    teacherSelect3DivSecond.classList.add('select');
    teacherSelect3DivThird.classList.remove('select');
    teacherSelect3DivForth.classList.remove('select');
    teacherSelect3DivSecondLabel.classList.add('select');
    teacherSelect3DivThirdLabel.classList.remove('select');
    teacherSelect3DivForthLabel.classList.remove('select');
}

function tS3DT() {
    teacherSelect3DivSecond.classList.remove('select');
    teacherSelect3DivThird.classList.add('select');
    teacherSelect3DivForth.classList.remove('select');
    teacherSelect3DivSecondLabel.classList.remove('select');
    teacherSelect3DivThirdLabel.classList.add('select');
    teacherSelect3DivForthLabel.classList.remove('select');
}

function tS3DF() {
    teacherSelect3DivSecond.classList.remove('select');
    teacherSelect3DivThird.classList.remove('select');
    teacherSelect3DivForth.classList.add('select');
    teacherSelect3DivSecondLabel.classList.remove('select');
    teacherSelect3DivThirdLabel.classList.remove('select');
    teacherSelect3DivForthLabel.classList.add('select');
}

dateButtonMon.addEventListener("click", dBM);
dateButtonTue.addEventListener("click", dBT);
dateButtonEtc.addEventListener("click", dBE);
teacherChangeBtn.addEventListener("click", tCB_Click);
scheduleChangeBtn.addEventListener("click", sCB_Click);
teacherSelect2DivSecondLabel.addEventListener("click", tS2DS);
teacherSelect2DivThirdLabel.addEventListener("click", tS2DT);
teacherSelect2DivForthLabel.addEventListener("click", tS2DF);
teacherSelect2DivSecond.addEventListener("click", tS2DS);
teacherSelect2DivThird.addEventListener("click", tS2DT);
teacherSelect2DivForth.addEventListener("click", tS2DF);
teacherSelect3DivSecondLabel.addEventListener("click", tS3DS);
teacherSelect3DivThirdLabel.addEventListener("click", tS3DT);
teacherSelect3DivForthLabel.addEventListener("click", tS3DF);
teacherSelect3DivSecond.addEventListener("click", tS3DS);
teacherSelect3DivThird.addEventListener("click", tS3DT);
teacherSelect3DivForth.addEventListener("click", tS3DF);