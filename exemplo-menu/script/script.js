const buttonMenu = document.querySelector(".sidebar-menu__button");
const menu = document.querySelector(".sidebar-menu");

let counter =1;
buttonMenu.addEventListener("click", function (evento){ evento.preventDefault();


    menu.style.left = "-430px"
    counter++
    if (counter % 2 !== 0 ){
        menu.style.left = "0px"
    }
    
});