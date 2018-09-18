const inputName = document.getElementById("contatoInputNome");
const inputEmail = document.getElementById("contatoInputEmail");
const inputPhone = document.getElementById("contatoInputPhone");
const inputMessage = document.getElementById("contatoInputMessage");
const botao = document.querySelector(".contato__button")

botao.addEventListener("click", function(evento){
  evento.preventDefault();
  if (inputName.value === undefined || inputName.value === null 
  || inputName.value === ""  || inputName.value === " " ){
    inputName.focus();
    return false;
  }

  if (inputEmail.value === undefined || inputEmail.value === null || 
  inputEmail.value === "" || inputEmail.value === " "){
    inputEmail.focus();
    return false;
  }

  if (inputPhone.value === undefined || inputPhone.value === null ||
  inputPhone.value === "" || inputPhone.value === " "){
    inputPhone.focus();
    return false;
  }

    if (inputMessage.value === undefined || inputMessage.value === null ||
    inputMessage.value === "" || inputMessage.value === " "){
    inputMessage.focus();
    return false;
}
  alert ("enviado")
  return true;
  
});

