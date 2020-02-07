const Exp = document.getElementById('exp');
const Pet = document.getElementById('pet');
const growth = document.getElementById('growth');
const click = document.getElementById('click');

let number = 1;

function start(){
    basic();

    if(number%10 === 0) 
    {
        Pet.src = "C:\\Users\\user\\Desktop\\newpro\\여(1)성장완료.gif";
        one();
    }

    console.log(number);
    Exp.innerHTML = number;
    number = number+1;
}

function basic()
{
   Pet.src="C:\Users\\user\\Desktop\\newpro\\여(1)움짤.gif";
   growth.innerText = null;
   click.innerText = "펫을 클릭해 주세요!";
}


function one(){
    click.innerText = null;
   console.log("1차 성장"); 
    growth.innerHTML = "펫 성장 완료!";
}

Pet.addEventListener("click", start);
