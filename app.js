//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos.
const amigos = [];


// Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

// Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. Use innerHTML para limpar a lista antes de adicionar novos elementos.
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}