const loginButton = document.querySelector(".login__button");
const loginModal = document.querySelector(".login-modal");
const buttonClose = document.querySelector(".login-modal__button-close");

loginButton.addEventListener("click", function(evento){
evento.preventDefault();
document.querySelector(".login-modal").style.display="flex"
});

buttonClose.addEventListener("click", function(evento){
evento.preventDefault();
document.querySelector(".login-modal").style.display="none"
});