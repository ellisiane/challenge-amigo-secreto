// Array para armazenar os nomes dos amigos (objetos com nome e contagem)
const amigos = [];

// Função para remover acentos de um nome
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para formatar corretamente um nome (Primeira letra maiúscula, resto minúsculas)
function formatarNome(nome) {
    return nome
        .toLowerCase()
        .split(" ")
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(" ");
}

// Função para comparar nomes (ignora capitalização e acentos)
function compararNomes(nome1, nome2) {
    const nome1SemAcento = removerAcentos(nome1).toLowerCase();
    const nome2SemAcento = removerAcentos(nome2).toLowerCase();
    return nome1SemAcento === nome2SemAcento;
}

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Validação: não permitir nome vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

     // Validação: não permitir números no nome
  if (/\d/.test(nome)) {
    alert("Por favor, insira apenas nomes sem números.");
    return;
  }

    let nomeFormatado = formatarNome(nome);

    // Verifica se o nome completo já existe na lista
    let amigoExistente = amigos.find(amigo => compararNomes(amigo.nome, nomeFormatado));

    if (amigoExistente) {
        // Se o nome já existe, solicita um sobrenome para diferenciá-lo
        let sobrenome = prompt(`O nome "${amigoExistente.nome}" já existe. Por favor, adicione um sobrenome diferente para diferenciá-lo:`);
        
        if (!sobrenome || sobrenome.trim() === "") {
            alert("Sobrenome não pode ser vazio.");
            return;
        }

        sobrenome = formatarNome(sobrenome);
        let novoNome = `${nomeFormatado} ${sobrenome}`;

        // Verifica se o novo nome completo com sobrenome já foi adicionado
        if (amigos.some(amigo => compararNomes(amigo.nome, novoNome))) {
            alert(`O nome completo "${novoNome}" já existe. Tente um sobrenome diferente.`);
            return;
        }

        amigos.push({ nome: novoNome, contagem: 1 });
    } else {
        amigos.push({ nome: nomeFormatado, contagem: 1 });
    }

    atualizarLista();
    input.value = "";
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo.nome; // Exibe o nome formatado do objeto
        lista.appendChild(item);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Validação: quantidade mínima de participantes (mínimo 2)
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 participantes para realizar o sorteio.");
        return;
    }

    // Sorteia de maneira aleatória
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado].nome;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}

// Função para reiniciar a lista e o resultado sem recarregar a página
function reiniciar() {
    // Limpa o array de amigos (esvazia a lista)
    amigos.length = 0;

    // Limpa a lista exibida na interface
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Limpa o resultado do sorteio
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // Limpa o campo de entrada
    const input = document.getElementById("amigo");
    input.value = "";
}
