//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
  const nomeAmigo = document.getElementById("amigo").value; // Obtém o valor do input com id "amigo"
  if (nomeAmigo) {
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    document.getElementById("amigo").value = ""; // Limpa o input
  }
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

  amigos.forEach(amigo => {
    const itemLista = document.createElement("li");
    itemLista.textContent = amigo;
    listaAmigos.appendChild(itemLista);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para o sorteio.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`; // Mostra o resultado dentro de um li
}
