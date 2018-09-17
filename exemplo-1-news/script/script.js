/*

const titulo = document.getElementById("formTitle")

console.log(titulo)
*/

/*
const input = document.getElementById("loginInputEmail").value;
const botao = document.querySelector(".news__button");
botao.addEventListener("click", function(evento)){
    evento.preventDefault();
    const email = input.value
    alert (`Email ${email} cadastrado com sucesso`)


 
    
})
*/

const input = document.getElementById("newsInputEmail")
const botao = document.querySelector(".news__button")

botao.addEventListener("click", function(event){
    event.preventDefault();


const resposta = document.createElement("Email cadastrado com sucesso")

resposta.appendChild(respostaMensagem);

const newsForm = document.querySelector(".news__form");

newsForm.insertBefore(resposta, newsForm.childNodes [0]);

})