// Declaração do array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const nome = document.getElementById('amigo').value.trim();

    // Valida se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Atualiza a lista exibida no HTML
    atualizarLista();

    // Limpa o campo de entrada
    document.getElementById('amigo').value = '';
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    // Obter o elemento da lista no HTML
    const lista = document.getElementById('listaAmigos');

    // Limpar a lista existente
    lista.innerHTML = '';

    // Percorrer o array 'amigos' e adicionar cada nome como um elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento <li>
        const item = document.createElement('li');
        item.textContent = amigos[i]; // Definir o texto do elemento <li> como o nome do amigo

        // Adicionar o elemento <li> à lista
        lista.appendChild(item);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Validar se há amigos disponíveis no array
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.');
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado no elemento de resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo secreto sorteado: <strong>${amigoSorteado}</strong></li>`;
}