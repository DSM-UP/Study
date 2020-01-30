const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const USER_LS = "crrentUser";
const greeting = document.querySelector(".js-greetings");
const SHOWING_CN = "showing";

function saveName(text)
{
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentvlaue = input.value;
    paintGreeting(currentvlaue);
    saveName(currentvlaue);
}

function askForName()
{
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName()
{
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null)
    {
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}

loadName();
