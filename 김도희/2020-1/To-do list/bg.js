const body = document.querySelector("body");

const IMAGE_NUMBER = 4;

function handleImageload()
{
    console.log("finish loading");
}

function paintImage(imagenumber)
{
    const image = new Image();
    image.src = `image\\${imagenumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image); 
    
    //이미지가 API 일때 사용
   image.addEventListener("loadend", handleImageload);
}

function getrandom()
{
    const number = Math.floor(Math.random() * IMAGE_NUMBER); 
    return number;
}

function init()
{
    const randomNumber = getrandom();
    paintImage(randomNumber);
}

init();