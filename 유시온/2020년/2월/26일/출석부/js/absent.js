const experienceBtn = document.querySelector('#experience-button');
const outingBtn = document.querySelector('#outing-button');
const absentBtn = document.querySelector('#absent-button');

function eB() {
    experienceBtn.classList.add('select');
    outingBtn.classList.remove('select');
    absentBtn.classList.remove('select');
}

function oB() {
    experienceBtn.classList.remove('select');
    outingBtn.classList.add('select');
    absentBtn.classList.remove('select');
}

function aB() {
    experienceBtn.classList.remove('select');
    outingBtn.classList.remove('select');
    absentBtn.classList.add('select');
}

experienceBtn.addEventListener("click", eB);
outingBtn.addEventListener("click", oB);
absentBtn.addEventListener("click", aB);