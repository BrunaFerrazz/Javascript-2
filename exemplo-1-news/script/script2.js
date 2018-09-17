const input = document.getElementById("newsInputEmail")
const botao = document.querySelector(".news__button")

botao.addEventListener("click", function(event){
    event.preventDefault();


const resposta = document.createElement("span")
const texto = document.createTextNode("email cadastrado com sucesso")

resposta.appendChild(texto);

const newsForm = document.querySelector(".news__form");

newsForm.insertBefore(resposta, newsForm.childNodes [0]);

})