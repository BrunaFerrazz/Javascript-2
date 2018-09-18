const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirma = document.getElementById("cadastroInputEmailConfirm");
const inputSenha = document.getElementById("cadastroInputPassword");
const inputSenhaConfrima = document.getElementById("cadastroInputPasswordConfirm");
const inputCel = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");
const inputNews = document.getElementById("cadastroInputNews");
const botao = document.querySelector(".cadastro__button")
const inputLevel = document.getElementsByName("level");

botao.addEventListener("click", function (evento) {
  evento.preventDefault();

  const optionsSelect = inputArea.options 
  [inputArea.selectedIndex]

let radioItem;
for(let i = 0; i < inputLevel.length; i++){
  if(inputLevel[i].checked){
    console.log(inputLevel[i])
    radioItem=inputLevel[i]
  }
}


if (inputEmail.value !== inputEmailConfirma.value){
  alert ("email não confere");
  return false;
}
if (inputSenha.value !== inputSenhaConfrima.value){
  alert ("senha não confere");
  return false;
}
if (inputSenha.value.length <= 7 ){
  alert ("senha deve ter mais que sete caracteres")
  return false; 
}

if (inputNome.value === undefined || inputNome.value === " " ||
inputNome.value === null || inputNome.value === ""){
inputNome.focus();
return false;
} if (inputEmail.value === undefined || inputEmail.value === " " || 
inputEmail.value === null || inputEmail.value === ""){
inputEmail.focus();
return false;
}if (inputEmailConfirma.value === undefined || inputEmailConfirma.value === " " || 
inputEmailConfirma.value === null || inputEmailConfirma.value === ""){
inputEmailConfirma.focus();
return false;
}if (inputSenha.value === undefined || inputSenha.value === " " || 
inputSenha.value === null || inputSenha.value === ""){
inputSenha.focus();
return false;
}if (inputSenhaConfrima.value === undefined || inputSenhaConfrima.value === " " || 
inputSenhaConfrima.value === null || inputSenhaConfrima.value === ""){
inputSenhaConfrima.focus();
return false;
}if (inputCel.value === undefined || inputCel.value === " " || 
inputCel.value === null || inputCel.value === ""){
inputCel.focus();
return false;
}if (inputCel.value === undefined || inputCel.value === " " || 
inputCel.value === null || inputCel.value === ""){
inputCel.focus();
return false;
}  




} ) ;