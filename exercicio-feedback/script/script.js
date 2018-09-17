const botao = document.querySelector(".feedback__button")
const inputmensagem = document.getElementById("feedbackInputMessage");

botao.addEventListener("click", function(evento){
evento.preventDefault ();

const mensagem = document.createElement("P");
const mensagemTexto = document.createTextNode(inputmensagem.value);
mensagem.appendChild(mensagemTexto)

const historico = document.querySelector(".testimonials")
historico.appendChild(mensagem)




});