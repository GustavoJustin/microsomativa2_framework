// Função responsável por preencher os dados e exibir o Modal
function abrirModalMusica(musica) {
    const modalElement = document.getElementById('modalMusica');
    if (!modalElement) return;

    // Atualiza os dados do modal
    document.getElementById('modalTitulo').textContent = musica.nome;
    document.getElementById('modalImagem').src = musica.imagem;
    document.getElementById('modalImagem').alt = musica.nome;
    document.getElementById('modalDescricao').textContent = musica.descricao;

    // Obtém/Cria a instância do modal do Bootstrap e abre
    const modalInstancia = bootstrap.Modal.getOrCreateInstance(modalElement);
    modalInstancia.show();
}