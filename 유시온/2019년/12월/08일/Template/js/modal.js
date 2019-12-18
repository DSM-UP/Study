var btns = document.querySelectorAll("#calendar_btn");

var modal = document.querySelector("#myModal")
 
var span = document.querySelector(".modal_close");                                          

for(var i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        modal.style.display = "block";   
    })
}

span.addEventListener("click", function(){
    modal.style.display = "none";
})

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}