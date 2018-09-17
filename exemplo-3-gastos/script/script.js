const button = document.querySelector(".transacao__button");

button.addEventListener("click", function (evento){
    evento.preventDefault();
   const tabela = document.querySelector(".extrato__table");

   const inputName = document.getElementById("transacaoInputName");
   const inputMoney = document.getElementById("transacaoInputMoney");
   const inputDate = document.getElementById("transacaoInputDate");


   // Criar Linha
   const linha = document.createElement("tr");

  
    //criar Colunas
const colunaNome = document.createElement("td");
const colunaNomeTexto = document.createTextNode(inputName.value);
colunaNome.appendChild(colunaNomeTexto);

const colunaValor = document.createElement("td");
const colunaValorTexto = document.createTextNode(inputMoney.value);
colunaValor.appendChild(colunaValorTexto);

const colunaData = document.createElement("td");
console.log(tabela);
const colunaDataTexto = document.createTextNode (inputDate.value);
colunaData.appendChild(colunaDataTexto);

//inserir colunas na linha
linha.appendChild(colunaNome);

linha.appendChild(colunaValor);

linha.appendChild(colunaData);

//adiciona linha a tabela
tabela.appendChild(linha);

});