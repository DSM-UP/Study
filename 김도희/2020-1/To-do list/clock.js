const clock = document.querySelector(".jsclock");
const clocktitle = clock.querySelector("h1");

function gettime()
{
    const date = new Date();
    const minutes = date.getMinutes();
    const hour = date.getHours();
    const second = date.getSeconds();
    clocktitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}`: minutes}:${second < 10 ? `0${second}` : second}`;
}

function init()
{
    gettime();
    setInterval(gettime, 1000);
}

init();
