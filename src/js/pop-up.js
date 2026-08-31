const campoBusca = document.getElementById('campoBusca');
const containerLista = document.getElementById('minhaListaDados');

// Elementos do Modal
const modalElement = document.getElementById('modalMusica');
const modalInstancia = new bootstrap.Modal(modalElement);
const modalTitulo = document.getElementById('modalTitulo');
const modalImagem = document.getElementById('modalImagem');
const modalDescricao = document.getElementById('modalDescricao');

function renderizarLista(dadosFiltrados) {
    containerLista.innerHTML = "";

    if (dadosFiltrados.length === 0) {
        containerLista.innerHTML = `<li class="list-group-item text-muted text-center">Nenhum resultado</li>`;
        return;
    }

    dadosFiltrados.forEach(item => {
        const li = document.createElement('li');
        // 'list-group-item-action' ativa o efeito hover e estilo de item clicável
        li.className = "list-group-item list-group-item-action cursor-pointer";
        li.style.cursor = "pointer";
        li.textContent = item.nome;

        // Clique no item abre o Pop-up com as informações
        li.addEventListener('click', () => {
            exibirModal(item);
        });

        containerLista.appendChild(li);
    });
}

function exibirModal(musica) {
    modalTitulo.textContent = musica.nome;
    modalImagem.src = musica.imagem;
    modalImagem.alt = musica.nome;
    modalDescricao.textContent = musica.descricao;

    modalInstancia.show();
}

campoBusca.addEventListener('input', () => {
    const termoBusca = campoBusca.value.toLowerCase();
    const listaFiltrada = minhaListaDados.filter(item =>
        item.nome.toLowerCase().includes(termoBusca)
    );
    renderizarLista(listaFiltrada);
});

// Inicializa a lista na tela
renderizarLista(minhaListaDados);