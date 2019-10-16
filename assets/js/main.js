var mostrar=0;
window.onload = function(){
    var nav = document.querySelector(".options");
    var options= document.querySelectorAll(".day");
    var menu = document.getElementsByClassName("menu-item")

    nav.addEventListener("click",function(event){
        options[mostrar].setAttribute("hidden",true);
        menu[mostrar].style.background = null;
        
        mostrar=event.srcElement.id;
        
        options[mostrar].removeAttribute("hidden");
        menu[mostrar].style.background ="#1c313a";
    });
}
