/*$(document).ready(function() {

  
 tirando o comportamento padrao do formulario 
    
$('form').on('submit', function(e) {
    e.preventDefault();


    const enderecoDaNovaImagem =$('#endereco-imagem-nova').val();
    const novoItem=$('<li></li>');
    $(`<img src="${enderecoDaNovaImagem}" /> `).appendTo(novoItem);
    $(`<div class="overlay_imagem_link">
    <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho Real" tagert="_blank" >Ver imagem em tamanho Real</a>
    </div>`).appendTo(novoItem);


        
        
    })
    
})*/

// Variáveis
const tarefaInput = document.getElementById("tarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("tarefas");


// Event Listeners
adicionarBotao.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
      adicionarTarefa();
  }
});


// Funções
function adicionarTarefa() {
  const tarefaTexto = tarefaInput.value;
  if (tarefaTexto.trim() !== "") {
      const novaTarefa = document.createElement("li");
      novaTarefa.innerHTML = `
          ${tarefaTexto} <button class="excluir">Excluir</button>`;
      listaTarefas.appendChild(novaTarefa);
      tarefaInput.value = "";
  }
}


listaTarefas.addEventListener("click", function (e) {
  if (e.target.classList.contains("excluir")) {
      e.target.parentElement.style="text-decoration: line-through"
      
      
      ;
  }
});
