======================================html 

<!DOCTYPE html>
<html>
    <head>
        <title>somthing</title>
        <link rel="stylesheet" href = "greeting.css">
    </head>
    <body>
        <div class = "jsclock">
            <h1>00:00</h1>
        </div>
      <form class = "js-form form">
          <input type="text"  placeholder="what is your name?">
      </form>
      <h4 class="js-greetings greetings"></h4>
    <script src = "clock.js"></script>
    <script src = "greeting.js"></script>
    </body>
</html>


=================================================css

.form,
.greetings
{
    display: none;
}

.showing
{
    display: block;
}

=================================================js

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
